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
    VM = new BiesVM();

    /**
    * Visita el nodo inicial del árbol sintáctico y lo recorre junto con sus hijos.
    * 
    * @param ctx El contexto del nodo de inicio en el árbol sintáctico.
    * @return El resultado de visitar los hijos del nodo.
    */
    visitStart(ctx) {
        return this.visitChildren(ctx);
    }

    /**
    * Visita un nodo de instrucción en el AST y procesa el mnemonico y los argumentos.
    * 
    * @param {Object} ctx - El contexto del nodo actual en el árbol de análisis sintáctico (AST).
    * @returns {null} - No retorna ningún valor después de procesar la instrucción.
    * 
    * El método obtiene el mnemonico de la instrucción, los argumentos (si los hay) y los imprime en la consola. 
    * Si hay argumentos, estos se muestran junto al mnemonico; si no hay, solo se muestra el mnemonico.
    */
    visitInst(ctx) {
        const mnemonic = ctx.mnemonic().getText(); // Obtiene la instruccion
        const args = ctx.arg().map(arg => this.visit(arg)).filter(arg => arg !== null); // Obtener los argumentos y filtrar los nulos
        //this.VM.executeInstruction(mnemonic,args);
        // Imprimir solo el argumento si existe
        if (args.length > 0) {console.log(`Instrucción: ${mnemonic}, Argumento: ${args.join(', ')}`);} else {console.log(`Instrucción: ${mnemonic}`);}
        return null;        
    }

    /**
    * Visita una instrucción en el árbol sintáctico, obtiene el mnemónico y sus argumentos,
    * e imprime la instrucción con sus argumentos si existen.
    * 
    * @param ctx El contexto del nodo de la instrucción en el árbol sintáctico.
    * @return Siempre retorna null, ya que este método solo imprime la instrucción.
    */
    visitArg(ctx) {
        if (ctx.INT()) {
            return ctx.INT().getText();
        } else if (ctx.STR()) {
            return ctx.STR().getText();
        } else if (ctx.getText().startsWith('$')) { // Handle arguments like $1
            return ctx.getText();
        }
        return null;
    }
}

export default PrintVisitor;