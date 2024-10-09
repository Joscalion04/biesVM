// Generated from grammar/bies.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';

/**
* Esta clase define un visitante genérico completo para un árbol de análisis producido por biesParser.
* @author Manuel Mora Sandi 
* @author Derek Rojas Mendoza
* @author Josué Vindas Pérez
* @author Joseph León Cabezas
*/

export default class biesVisitor extends antlr4.tree.ParseTreeVisitor {

	/**
    * Visita un árbol de análisis producido por biesParser#start.
    * 
    * @param {StartContext} ctx - El contexto de la regla 'start'.
    * @returns {*} - El resultado de visitar los hijos del contexto.
    */
	visitStart(ctx) {
	  return this.visitChildren(ctx);
	}


	/**
	* Visita la definición de una función en el contexto proporcionado.
	*
	* Esta función llama a `visitChildren` para recorrer todos los nodos hijos
	* del contexto `ctx` dado.
	*
	* @param {Object} ctx - El contexto que representa la definición de la función.
	* @returns {any} El resultado de visitar los nodos hijos del contexto.
	*/
	visitFunDef(ctx) {
	  return this.visitChildren(ctx);
	}


	/**
	* Visita la declaración de argumentos en el contexto proporcionado.
	*
	* Esta función llama a `visitChildren` para recorrer todos los nodos hijos
	* del contexto `ctx` dado.
	*
	* @param {Object} ctx - El contexto que representa la declaración de argumentos.
	* @returns {any} El resultado de visitar los nodos hijos del contexto.
	*/
	visitArgsDecl(ctx) {
	  return this.visitChildren(ctx);
	}

	/**
    * Visita un árbol de análisis producido por biesParser#inst.
    * 
    * @param {InstContext} ctx - El contexto de la regla 'inst'.
    * @returns {*} - El resultado de visitar los hijos del contexto.
    */
	visitInst(ctx) {
	  return this.visitChildren(ctx);
	}


	/**
    * Visita un árbol de análisis producido por biesParser#mnemonic.
    * 
    * @param {MnemonicContext} ctx - El contexto de la regla 'mnemonic'.
    * @returns {*} - El resultado de visitar los hijos del contexto.
    */
	visitMnemonic(ctx) {
	  return this.visitChildren(ctx);
	}


	/**
    * Visita un árbol de análisis producido por biesParser#arg.
    * 
    * @param {ArgContext} ctx - El contexto de la regla 'arg'.
    * @returns {*} - El resultado de visitar los hijos del contexto.
    */
	visitArg(ctx) {
	  return this.visitChildren(ctx);
	}



}