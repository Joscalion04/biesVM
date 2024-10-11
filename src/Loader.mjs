import biesGrammarVisitor from '../parser/biesVisitor.js';
import BiesVM from "./biesVM.mjs";

/**
 * Visitor personalizado que extiende el `biesGrammarVisitor` para recorrer 
 * el árbol sintáctico y guardar las instrucciones de las funciones en la máquina virtual asociada (BiesVM).
 */
class Loader extends biesGrammarVisitor {
    VM = new BiesVM(); // Máquina virtual
    iniArgs = null;
    firstNode = null;

    /**
     * Inicia el recorrido del árbol, pero busca la instrucción `INI` antes de procesar todo.
     * 
     * @param {Object} ctx El contexto del nodo de inicio en el árbol sintáctico.
     * @return El resultado de visitar el nodo de la función indicada en la isntrucción `INI` o procesar normalmente.
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
     * Visita una instrucción en el AST y procesa el mnemonico y los argumentos.
     * 
     * @param {Object} ctx - El contexto del nodo actual en el árbol de análisis sintáctico (AST).
     * @returns {null} - No retorna ningún valor después de procesar la instrucción.
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

    async run() {
        let continuar = true;
        while (continuar) {
            const instruction = await this.VM.executeInstruction();
            if (instruction != null) {// Significa que viene algo
                if (instruction === 'FIN') {
                    continuar = false;
                    break;
                } else {
                    this.executeFunctionById(this.firstNode, instruction);
                    break;
                }
            }
        } 
    }

    /**
     * Visita los argumentos de una instrucción.
     * 
     * @param {Object} ctx El contexto del nodo de la instrucción en el árbol sintáctico.
     * @return El valor del argumento como string o null si no aplica.
     */
    visitArg(ctx) {
        if (ctx.INT()) {
            return ctx.INT().getText();
        } else if (ctx.STR()) {
            return ctx.STR().getText();
        } else if (ctx.getText().startsWith('$')) { // Maneja argumentos como $1
            return ctx.getText();
        }
        return null;
    }

    /**
     * Busca un nodo de función por su `functionId` en el árbol sintáctico.
     * 
     * @param {Object} tree - El árbol sintáctico completo.
     * @param {string} functionId - El ID de la función que se desea buscar.
     * @returns {Object | null} - Retorna el nodo de la función si se encuentra, o null.
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

    /**
     * Ejecuta una función por su `functionId`, recorriendo las instrucciones de la misma.
     * 
     * @param {Object} tree - El árbol sintáctico completo.
     * @param {string} functionId - El ID de la función a ejecutar.
     * @returns {null}
     */
    executeFunctionById(tree, functionId) {
        const functionNode = this.findFunctionById(tree, functionId);
        if (functionNode) {
            console.log(`Cargando función con ID: ${functionId}\n`);
            this.visit(functionNode);  // Ejecutar el visitor sobre el nodo de la función
        } else {
            console.log(`Función con ID ${functionId} no encontrada.\n`);
        }
    }
    

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
            return foundNode.arg().map(arg => this.visit(arg)).filter(arg => arg !== null)[0];
        } else {
            return null;
        }
    }
}

export default Loader;