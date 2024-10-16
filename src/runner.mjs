import fs from 'fs';
import antlr4 from 'antlr4';
import Loader from "./Loader.mjs";
import biesGrammarLexer from '../parser/biesLexer.js';
import biesGrammarParser from '../parser/biesParser.js';
let default_input_file = './test/biesTest.basm'

/**
* Función para probar el parser utilizando un archivo de entrada opcional.
* Lee el archivo especificado, lo tokeniza, genera el árbol sintáctico (AST),
* y finalmente utiliza un visitor para recorrer el AST.
* 
* @param {string} [input_file=default_input_file] - Ruta del archivo de entrada a procesar, por defecto usa './test/biesTest.txt'.
* 
* @author Manuel Mora Sandi 
* @author Derek Rojas Mendoza
* @author Josué Vindas Pérez
* @author Joseph León Cabezas
*/
function test_parser(input_file=default_input_file){
    console.log(`Leyendo el documento... ${input_file}`)
    
    /**
    * Contenido del archivo leído como una cadena.
    * @type {string}
    */
    const input = fs.readFileSync(input_file,'utf-8');

    // De archivo a stream de caracteres.
    const chars = new antlr4.InputStream(input);

    /**
    * Instancia del lexer para procesar los caracteres del archivo.
    * @type {biesGrammarLexer}
    */
    const lexer = new biesGrammarLexer(chars);

    // Tokeniza el flujo de caracteres.
    const tokens = new antlr4.CommonTokenStream(lexer);

    /**
    * Instancia del parser que genera el árbol de sintaxis abstracta (AST).
    * @type {biesGrammarParser}
    */
    const parser = new biesGrammarParser(tokens);

    //Construye el AST.
    parser.buildParseTrees = true;

    /**
    * El árbol sintáctico resultante después del análisis.
    * @type {ParseTree}
    */
    const AST = parser.start();

    // Se necesita un loader que pase del AST a la máquina virtual.

    //Visita el AST.
    const loader = new Loader();
    loader.visit(AST);

}

export default test_parser