import biesGrammarVisitor from '../parser/biesVisitor.js';
import BiesVM from "./biesVM.mjs";

/**
* Visitor personalizado que extiende el `biesGrammarVisitor` para recorrer 
* el árbol sintáctico y guardar las instrucciones de las funciones en la máquina virtual asociada (BiesVM).
* 
* @author Manuel Mora Sandi 
* @author Derek Rojas Mendoza
* @author Josué Vindas Pérez
* @author Joseph León Cabezas
*/
class Loader extends biesGrammarVisitor {
    VM = new BiesVM(); // Máquina virtual
    iniArgs = null;
    firstNode = null;

    /**
    Este método se encarga de iniciar la ejecución de funciones en el contexto del AST.
    * Busca los argumentos de inicialización (`INI`) y ejecuta la función correspondiente.
    * 
    * @method visitStart
    * @param {Object} ctx - El contexto actual que representa un nodo en el AST.
    * 
    * @returns {null} Siempre retorna `null` para mantener la consistencia en el patrón de visitante.
    */
    visitStart(ctx) {

        if (!this.iniArgs) {
            this.iniArgs = this.findINI(ctx);
        }
        if (!this.firstNode) {
            this.firstNode = ctx;
        }

        // Aquí se recorre el AST completo, pero controlando la ejecución de la función que venga como argumento en INI
        if (this.iniArgs) {
            this.VM.executeInstruction(['INI', this.iniArgs]);
            this.executeFunctionById(ctx, this.iniArgs);
        } else {
            this.VM.executeInstruction(['INI', "$0"]);
            this.executeFunctionById(ctx, "$0");
        }
        return null; 
    }

    /**
    * 
    * Este método procesa una instrucción del contexto y la almacena en el código de la máquina virtual.
    * Extrae el mnemonico y los argumentos, y ejecuta la instrucción si es un comando de retorno o 
    * detención.
    * 
    * @method visitInst
    * @param {Object} ctx - El contexto que representa una instrucción en el AST.
    * 
    * @returns {null} Siempre retorna `null` para mantener la consistencia en el patrón de visitante.
    */
    visitInst(ctx) {
        const mnemonic = ctx.mnemonic().getText(); // Obtiene la instrucción
        const args = ctx.arg().map(arg => this.visit(arg)).filter(arg => arg !== null); // Obtener los argumentos y filtrar los nulos
        // Almacenar la instrucción en el array `code` de la VM
        this.VM.code.push({ mnemonic, args });
        
        if (mnemonic === 'RET' || mnemonic === 'HLT') {
            this.run();
        }
    
        return null;
    }

    /**
    * Este método ejecuta instrucciones de la máquina virtual en un bucle hasta que se
    * encuentra una instrucción de finalización. Si se recibe una instrucción válida, se
    * ejecuta la función correspondiente.
    * 
    * @method run
    * 
    * @returns {Promise<void>} Una promesa que se resuelve cuando se completa la ejecución.
    */
    async run() {
        let continuar = true;
        while (continuar) {
            const instruction = await this.VM.executeInstruction();
            if (instruction != null) {// Significa que viene algo
                if (instruction === 'FIN') {
                    return;
                } else {
                    this.executeFunctionById(this.firstNode, instruction);
                    break;
                }
            }
        } 
    }

    /**
    * Este método evalúa un contexto de argumento y devuelve su representación como texto.
    * Maneja enteros, cadenas y variables que comienzan con `$`. 
    * 
    * @method visitArg
    * 
    * @param {Object} ctx - El contexto del argumento a evaluar.
    * @returns {string|null} La representación del argumento como texto o `null` si no se reconoce.
    */
    visitArg(ctx) {
        // Si es un entero
        if (ctx.INT()) {
            return parseInt(ctx.INT().getText(), 10);
        }
        // Si es una cadena
        else if (ctx.STR()) {
            return ctx.STR().getText().slice(1, -1); // Remover las comillas alrededor
        }
        // Si es una lista
        else if (ctx.list()) {
            const listCtx = ctx.list();
            // Manejar la lista de elementos
            return this.visitList(listCtx);
        }
        // Si es una función
        else if (ctx.FUNCTION()) {
            return ctx.FUNCTION().getText();
        }
        // Si es un identificador
        else if (ctx.ID()) {
            return ctx.ID().getText();
        }
        return undefined; // Si no es ninguno de los anteriores, retornar undefined
    }
    
    
    /**
    * Busca un nodo de definición de función en el árbol de sintaxis abstracta (AST) 
    * basado en el identificador de la función proporcionado.
    * 
    * @method findFunctionById
    * 
    * @param {Object} tree - El árbol de sintaxis abstracta en el que buscar la función.
    * @param {string} functionId - El identificador de la función que se desea encontrar.
    * @returns {Object|null} El nodo de la función encontrada o `null` si no se encuentra.
    */
    findFunctionById(tree, functionId) {
        let foundNode = null;

        class FunctionFinder extends biesGrammarVisitor {
            visitFunDef(ctx) {
                const currentFunctionId = ctx.FUNCTION(0).getText();
                if (currentFunctionId === functionId) {
                    foundNode = ctx; // Nodo encontrado
                    return ctx;
                }
                return this.visitChildren(ctx); // Continuar visitando hijos
            }
        }

        // Ejecutar el visitor que busca la función
        const finder = new FunctionFinder();
        finder.visit(tree);

        return foundNode; // Devolver el nodo encontrado o null
    }

    visitList(ctx) {
        const elements = ctx.element().map(elementCtx => {
            // Asegúrate de que `elementCtx` tenga la forma esperada
            return this.visitArg(elementCtx);
        });
        return elements;
    }

    /**
    * Ejecuta una función específica en el árbol de sintaxis abstracta (AST) 
    * basado en el identificador de la función proporcionado.
    * 
    * @method executeFunctionById
    * 
    * @param {Object} tree - El árbol de sintaxis abstracta en el que se busca la función.
    * @param {string} functionId - El identificador de la función que se desea ejecutar.
    * 
    * @returns {void} No retorna ningún valor.
    */
    executeFunctionById(tree, functionId) {
        const functionNode = this.findFunctionById(tree, functionId);
        if (functionNode) {
            //console.log(`Cargando función con ID: ${functionId}\n`);
            this.visit(functionNode);  // Ejecutar el visitor sobre el nodo de la función
        } else {
            console.log(`Función con ID ${functionId} no encontrada.\n`);
        }
    }
    
    /**
    * Busca la instrucción `INI` en el árbol de sintaxis abstracta (AST) 
    * y devuelve el primer argumento asociado a ella.
    * 
    * @method findINI
    * 
    * @param {Object} tree - El árbol de sintaxis abstracta donde se busca la instrucción `INI`.
    * 
    * @returns {string|null} El primer argumento de la instrucción `INI` si se encuentra, o `null` si no existe.
    */
    findINI(tree) {
        let foundNode = null;

        class FunctionFinder extends biesGrammarVisitor {
            visitInst(ctx) {
                const currentInstruction = ctx.mnemonic().getText() ? ctx.mnemonic().getText() : '';
                if (currentInstruction === 'INI') {
                    foundNode = ctx; // Nodo encontrado
                    return ctx;
                }
                return this.visitChildren(ctx); // Continuar visitando hijos
            }
        }

        // Ejecutar el visitor que busca la función
        const finder = new FunctionFinder();
        finder.visit(tree);

        if (foundNode) {
            const args = foundNode.arg().map(arg => this.visit(arg)).filter(arg => arg !== null);
            return args.length > 0 ? args[0] : null; // Retorna el primer argumento si existe
        } else {
            return null;
        }
    }
}

export default Loader;