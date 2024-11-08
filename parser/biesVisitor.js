// Generated from grammar/bies.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';

/**
* Clase que implementa un visitante para la gramática de BIES.
* Esta clase extiende de `antlr4.tree.ParseTreeVisitor` y se encarga de 
* recorrer el árbol de análisis sintáctico generado por el parser de BIES.
* 
* Los métodos de esta clase permiten realizar operaciones específicas en 
* los nodos del árbol, facilitando así la manipulación y extracción de 
* información de la estructura sintáctica.
* 
* @class biesVisitor 
* @extends {antlr4.tree.ParseTreeVisitor}
* 
* @author Manuel Mora Sandi
* @author Derek Rojas Mendoza
* @author Josué Vindas Pérez
* @author Joseph León Cabezas 
*/
export default class biesVisitor extends antlr4.tree.ParseTreeVisitor {

	/**
	* Método que visita el contexto de inicio del árbol de análisis sintáctico de BIES.
	* Este método es responsable de procesar el nodo del contexto inicial y sus hijos 
	* en el árbol. Utiliza el método `visitChildren` para recorrer todos los nodos hijos 
	* y aplicar el visitante correspondiente a cada uno.
	* 
	* @method visitStart
	* @param {StartContext} ctx - El contexto de inicio que se está visitando.
	* @returns {*} El resultado de la visita a los nodos hijos del contexto.
	*/
	visitStart(ctx) {
	  return this.visitChildren(ctx);
	}


	/**
	* Método que visita el contexto de definición de funciones en el árbol de análisis sintáctico de BIES.
	* Este método es responsable de procesar el nodo del contexto de la función y sus hijos en el árbol.
	* Utiliza el método `visitChildren` para recorrer todos los nodos hijos y aplicar el visitante correspondiente a cada uno.
	* 
	* @method visitFunDef
	* @param {FunDefContext} ctx - El contexto de definición de función que se está visitando.
	* @returns {*} El resultado de la visita a los nodos hijos del contexto de la función.
	*/
	visitFunDef(ctx) {
	  return this.visitChildren(ctx);
	}


	/**
	* Método que visita el contexto de instrucciones en el árbol de análisis sintáctico de BIES.
	* Este método se encarga de procesar el nodo del contexto de instrucciones y sus hijos en el árbol.
	* Utiliza el método `visitChildren` para recorrer todos los nodos hijos y aplicar el visitante correspondiente a cada uno.
	* 
	* @method visitInst
	* @param {InstContext} ctx - El contexto de instrucciones que se está visitando.
	* @returns {*} El resultado de la visita a los nodos hijos del contexto de instrucciones.
	*/
	visitInst(ctx) {
	  return this.visitChildren(ctx);
	}


	/**
	* Método que visita el contexto de mnemónicos en el árbol de análisis sintáctico de BIES.
	* Este método se encarga de procesar el nodo del contexto de mnemónicos y sus hijos en el árbol.
	* Utiliza el método `visitChildren` para recorrer todos los nodos hijos y aplicar el visitante correspondiente a cada uno.
	* 
	* @method visitMnemonic
	* @param {MnemonicContext} ctx - El contexto de mnemónico que se está visitando.
	* @returns {*} El resultado de la visita a los nodos hijos del contexto de mnemónico.
 	*/
	visitMnemonic(ctx) {
	  return this.visitChildren(ctx);
	}


	/**
	* Método que visita el contexto de argumentos en el árbol de análisis sintáctico de BIES.
	* Este método se encarga de procesar el nodo del contexto de argumentos y sus hijos en el árbol.
	* Utiliza el método `visitChildren` para recorrer todos los nodos hijos y aplicar el visitante correspondiente a cada uno.
	* 
	* @method visitArg
	* @param {ArgContext} ctx - El contexto de argumento que se está visitando.
	* @returns {*} El resultado de la visita a los nodos hijos del contexto de argumento.
	*/
	visitArg(ctx) {
	  return this.visitChildren(ctx);
	}


	/**
	* Método que visita el contexto de una lista en el árbol de análisis sintáctico de BIES.
	* Este método se encarga de procesar el nodo del contexto de la lista y sus hijos en el árbol.
	* Utiliza el método `visitChildren` para recorrer todos los nodos hijos y aplicar el visitante correspondiente a cada uno.
	* 
	* @method visitList
	* @param {ListContext} ctx - El contexto de lista que se está visitando.
	* @returns {*} El resultado de la visita a los nodos hijos del contexto de la lista.
	*/
	visitList(ctx) {
	  return this.visitChildren(ctx);
	}


	/**
	* Método que visita el contexto de un elemento en el árbol de análisis sintáctico de BIES.
	* Este método se encarga de procesar el nodo del contexto de un elemento y sus hijos en el árbol.
	* Utiliza el método `visitChildren` para recorrer todos los nodos hijos y aplicar el visitante correspondiente a cada uno.
	* 
	* @method visitElement
	* @param {ElementContext} ctx - El contexto del elemento que se está visitando.
	* @returns {*} El resultado de la visita a los nodos hijos del contexto del elemento.
	*/
	visitElement(ctx) {
	  return this.visitChildren(ctx);
	}
}