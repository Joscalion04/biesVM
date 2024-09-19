import fs from 'fs';
import antlr4 from 'antlr4';
import PrintVisitor from "../src/processor.mjs";
import biesGrammarLexer from '../parser/biesLexer.js';
import biesGrammarParser from '../parser/biesParser.js';

let default_input_file = './test/biesTest.txt'
function test_parser(input_file=default_input_file){
    console.log(`Leyendo el documento... ${input_file}`)
    
    const input = fs.readFileSync(input_file,'utf-8');

    //de archivo a chars //
    const chars = new antlr4.InputStream(input);

    //CREA EL LEXER SEGUN LOS CARACTERES
    const lexer = new biesGrammarLexer(chars);

    // TOKENIZA //
    const tokens = new antlr4.CommonTokenStream(lexer);

    //CREA EL PARSER //
    const parser = new biesGrammarParser(tokens);

    //CONSTRUYE EL AST
    parser.buildParseTrees = true;
    const AST = parser.start();

    // VISITA EL AST //
    const visitor = new PrintVisitor();
    visitor.visit(AST);

    console.log(`PROCESADO ${input_file} !`)
}

export default test_parser