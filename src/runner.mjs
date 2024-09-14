import fs from 'fs';
import antlr4 from 'antlr4';

import biesGrammarLexer from '../parser/grammar/biesLexer.js';
import biesGrammarParser from '../parser/grammar/biesParser.js';
import biesGrammarVisitor from '../parser/grammar/biesVisitor.js';

class PrintVisitor extends biesGrammarVisitor{
    visitStart(ctx){
        return this.visitChildren(ctx);
    }

    visitInst(ctx){
        const mnemonic = ctx.mnemonic().getText();
        const args = ctx.arg().map(arg => this.visit(arg));
        console.log(`Instruccion: ${mnemonic}, Argumento: ${args.join(', ')}`);
        return null;
    }

    visitArg(ctx){
        if(ctx.INT()){
            return ctx.INT().getText();
        }else if(ctx.STR()){
            return ctx.STR().getText();
        }
        return null;
    }
}
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