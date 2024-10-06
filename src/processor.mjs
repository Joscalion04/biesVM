import biesGrammarVisitor from '../parser/biesVisitor.js';
import BiesVM from "../src/biesVM.mjs";
import fs from 'fs';
import antlr4 from 'antlr4';
//@ts-check

/**
 * Visitor personalizado que extiende el `biesGrammarVisitor` para recorrer 
 * el árbol sintáctico y ejecutar la máquina virtual asociada (BiesVM).
 *
 * @author Manuel Mora Sandi 
 * @author Derek Rojas Mendoza
 * @author Josué Vindas Pérez
 * @author Joseph León Cabezas
 */
class PrintVisitor extends biesGrammarVisitor {
    VM = new BiesVM(); // Máquina virtual
    PC = 0;
    hasExecutedFunction = false; // Nuevo indicador para controlar la ejecución de la función $0

    /**
     * Inicia el recorrido del árbol, pero busca la función `funID $0` antes de procesar todo.
     * 
     * @param {Object} ctx El contexto del nodo de inicio en el árbol sintáctico.
     * @return El resultado de visitar el nodo de la función `funID $0` o procesar normalmente.
     */
    visitStart(ctx) {
        // Aquí se recorre el AST completo, pero controlando la ejecución de la función $0
        this.executeFunctionById(ctx, "$0"); // MAIN
        
        // Una vez ejecutada la función $0, continuar con el recorrido normal si es necesario
        if (!this.hasExecutedFunction) {
            return this.visitChildren(ctx);
        }

        return null; 
    }

    /**
     * Visita una instrucción en el AST y procesa el mnemonico y los argumentos.
     * 
     * @param {Object} ctx - El contexto del nodo actual en el árbol de análisis sintáctico (AST).
     * @returns {null} - No retorna ningún valor después de procesar la instrucción.
     * 
     * El método obtiene el mnemonico de la instrucción, los argumentos (si los hay) y los imprime en la consola. 
     */
    visitInst(ctx) {
        const mnemonic = ctx.mnemonic().getText(); // Obtiene la instrucción
        const args = ctx.arg().map(arg => this.visit(arg)).filter(arg => arg !== null); // Obtener los argumentos y filtrar los nulos
        
        // Ejecutar instrucción en la máquina virtual
        //this.VM.executeInstruction(mnemonic, args, ctx);
        // this.VM.executeInstruction(ctx);
        // VM.executeInstruction(mnemonic, args)(findFunctionbID())
        // if(this.VM.executeInstruction(mnemonic, args)!=null){
        // 
        // executeFunctionById(tree, functionId){
        // 
        // }
        //}
        if(this.VM.executeInstruction(mnemonic, args, ctx)!=null){
            this.executeFunctionById(ctx, this.VM.executeInstruction(mnemonic, args, ctx));
        }
        return null;
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
     * Visita una definición de función y procesa el cuerpo de la función.
     * 
     * @param {Object} ctx - El contexto de la función en el árbol sintáctico.
     * @returns {null}
     */
    visitFunDef(ctx) {
        const functionId = ctx.FUNCTION(0).getText(); // Identificador de la función
        console.log(`Definición de función: ${functionId}`);
        // Recorrer el cuerpo de la función
        return this.visitChildren(ctx);
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
        const visitor = new biesGrammarVisitor();

        /**
         * Visitor que busca la función por ID
         */
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
            console.log(`Ejecutando función con ID: ${functionId}`);
            this.visit(functionNode); // Ejecutar el visitor sobre el nodo de la función
        } else {
            console.log(`Función con ID ${functionId} no encontrada.`);
        }
    }
}

export default PrintVisitor;