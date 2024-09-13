// Generated from grammar/biesASM.g4 by ANTLR 4.13.2
// jshint ignore: start
const antlr4 = require('antlr4');


const serializedATN = [4,0,9,64,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,2,
1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,
1,6,5,6,48,8,6,10,6,12,6,51,9,6,1,7,4,7,54,8,7,11,7,12,7,55,1,8,4,8,59,8,
8,11,8,12,8,60,1,8,1,8,0,0,9,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,1,0,
4,3,0,65,90,95,95,97,122,4,0,48,57,65,90,95,95,97,122,1,0,48,57,3,0,9,10,
13,13,32,32,66,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,
0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,1,19,1,0,0,0,3,23,
1,0,0,0,5,27,1,0,0,0,7,31,1,0,0,0,9,34,1,0,0,0,11,39,1,0,0,0,13,44,1,0,0,
0,15,53,1,0,0,0,17,58,1,0,0,0,19,20,5,76,0,0,20,21,5,68,0,0,21,22,5,86,0,
0,22,2,1,0,0,0,23,24,5,77,0,0,24,25,5,85,0,0,25,26,5,76,0,0,26,4,1,0,0,0,
27,28,5,65,0,0,28,29,5,68,0,0,29,30,5,68,0,0,30,6,1,0,0,0,31,32,5,69,0,0,
32,33,5,81,0,0,33,8,1,0,0,0,34,35,5,36,0,0,35,36,5,70,0,0,36,37,5,85,0,0,
37,38,5,78,0,0,38,10,1,0,0,0,39,40,5,36,0,0,40,41,5,69,0,0,41,42,5,78,0,
0,42,43,5,68,0,0,43,12,1,0,0,0,44,45,5,36,0,0,45,49,7,0,0,0,46,48,7,1,0,
0,47,46,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,14,1,0,0,0,
51,49,1,0,0,0,52,54,7,2,0,0,53,52,1,0,0,0,54,55,1,0,0,0,55,53,1,0,0,0,55,
56,1,0,0,0,56,16,1,0,0,0,57,59,7,3,0,0,58,57,1,0,0,0,59,60,1,0,0,0,60,58,
1,0,0,0,60,61,1,0,0,0,61,62,1,0,0,0,62,63,6,8,0,0,63,18,1,0,0,0,4,0,49,55,
60,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class biesASMLexer extends antlr4.Lexer {

    static grammarFileName = "biesASM.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'LDV'", "'MUL'", "'ADD'", "'EQ'", "'$FUN'", 
                         "'$END'" ];
	static symbolicNames = [ null, "LDV", "MUL", "ADD", "EQ", "FUN", "END", 
                          "VARIABLE", "NUMBER", "WS" ];
	static ruleNames = [ "LDV", "MUL", "ADD", "EQ", "FUN", "END", "VARIABLE", 
                      "NUMBER", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

biesASMLexer.EOF = antlr4.Token.EOF;
biesASMLexer.LDV = 1;
biesASMLexer.MUL = 2;
biesASMLexer.ADD = 3;
biesASMLexer.EQ = 4;
biesASMLexer.FUN = 5;
biesASMLexer.END = 6;
biesASMLexer.VARIABLE = 7;
biesASMLexer.NUMBER = 8;
biesASMLexer.WS = 9;



