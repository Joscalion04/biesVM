// Generated from grammar/bies.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,13,91,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,
4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,
8,1,9,1,9,1,9,1,9,1,10,3,10,69,8,10,1,10,4,10,72,8,10,11,10,12,10,73,1,11,
1,11,5,11,78,8,11,10,11,12,11,81,9,11,1,11,1,11,1,12,4,12,86,8,12,11,12,
12,12,87,1,12,1,12,1,79,0,13,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,
10,21,11,23,12,25,13,1,0,2,1,0,48,57,3,0,9,10,13,13,32,32,94,0,1,1,0,0,0,
0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,
0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,
1,0,0,0,1,27,1,0,0,0,3,31,1,0,0,0,5,35,1,0,0,0,7,39,1,0,0,0,9,43,1,0,0,0,
11,47,1,0,0,0,13,51,1,0,0,0,15,55,1,0,0,0,17,59,1,0,0,0,19,63,1,0,0,0,21,
68,1,0,0,0,23,75,1,0,0,0,25,85,1,0,0,0,27,28,5,76,0,0,28,29,5,68,0,0,29,
30,5,86,0,0,30,2,1,0,0,0,31,32,5,80,0,0,32,33,5,79,0,0,33,34,5,80,0,0,34,
4,1,0,0,0,35,36,5,66,0,0,36,37,5,76,0,0,37,38,5,68,0,0,38,6,1,0,0,0,39,40,
5,65,0,0,40,41,5,68,0,0,41,42,5,68,0,0,42,8,1,0,0,0,43,44,5,77,0,0,44,45,
5,85,0,0,45,46,5,76,0,0,46,10,1,0,0,0,47,48,5,68,0,0,48,49,5,73,0,0,49,50,
5,86,0,0,50,12,1,0,0,0,51,52,5,83,0,0,52,53,5,85,0,0,53,54,5,66,0,0,54,14,
1,0,0,0,55,56,5,80,0,0,56,57,5,82,0,0,57,58,5,78,0,0,58,16,1,0,0,0,59,60,
5,66,0,0,60,61,5,83,0,0,61,62,5,84,0,0,62,18,1,0,0,0,63,64,5,72,0,0,64,65,
5,76,0,0,65,66,5,84,0,0,66,20,1,0,0,0,67,69,5,45,0,0,68,67,1,0,0,0,68,69,
1,0,0,0,69,71,1,0,0,0,70,72,7,0,0,0,71,70,1,0,0,0,72,73,1,0,0,0,73,71,1,
0,0,0,73,74,1,0,0,0,74,22,1,0,0,0,75,79,5,39,0,0,76,78,9,0,0,0,77,76,1,0,
0,0,78,81,1,0,0,0,79,80,1,0,0,0,79,77,1,0,0,0,80,82,1,0,0,0,81,79,1,0,0,
0,82,83,5,39,0,0,83,24,1,0,0,0,84,86,7,1,0,0,85,84,1,0,0,0,86,87,1,0,0,0,
87,85,1,0,0,0,87,88,1,0,0,0,88,89,1,0,0,0,89,90,6,12,0,0,90,26,1,0,0,0,5,
0,68,73,79,87,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class biesLexer extends antlr4.Lexer {

    static grammarFileName = "bies.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'LDV'", "'POP'", "'BLD'", "'ADD'", "'MUL'", 
                         "'DIV'", "'SUB'", "'PRN'", "'BST'", "'HLT'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, null, null, "INT", "STR", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "T__8", "T__9", "INT", "STR", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

biesLexer.EOF = antlr4.Token.EOF;
biesLexer.T__0 = 1;
biesLexer.T__1 = 2;
biesLexer.T__2 = 3;
biesLexer.T__3 = 4;
biesLexer.T__4 = 5;
biesLexer.T__5 = 6;
biesLexer.T__6 = 7;
biesLexer.T__7 = 8;
biesLexer.T__8 = 9;
biesLexer.T__9 = 10;
biesLexer.INT = 11;
biesLexer.STR = 12;
biesLexer.WS = 13;



