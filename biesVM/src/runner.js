const antlr4 = require('antlr4');
const biesASMLexer = require('../src/grammar/biesASMLexer');
const biesASMParser = require('../src/grammar/biesASMParser');
const fs = require('fs');

// Lee el código desde un archivo o cadena
const input = fs.readFileSync('test/test_cases.basm', 'utf8');

// Configurar el lexer y parser
const chars = new antlr4.InputStream(input);
const lexer = new biesASMLexer.biesASMLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new biesASMParser.biesASMParser(tokens);

parser.buildParseTrees = true;
const tree = parser.program();

// Procesa el árbol de análisis sintáctico
console.log(tree.toStringTree(parser.ruleNames));