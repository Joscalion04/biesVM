// Generated from grammar/bies.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,19,130,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,1,0,1,
0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,
5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,
9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,
13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,15,3,15,102,8,15,1,15,4,15,105,8,
15,11,15,12,15,106,1,16,1,16,5,16,111,8,16,10,16,12,16,114,9,16,1,16,1,16,
1,17,1,17,4,17,120,8,17,11,17,12,17,121,1,18,4,18,125,8,18,11,18,12,18,126,
1,18,1,18,1,112,0,19,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,
23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,1,0,2,1,0,48,57,3,0,9,10,
13,13,32,32,134,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,
0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,
1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,
0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,1,39,1,0,0,0,3,43,1,0,0,0,5,47,1,
0,0,0,7,51,1,0,0,0,9,55,1,0,0,0,11,59,1,0,0,0,13,63,1,0,0,0,15,67,1,0,0,
0,17,71,1,0,0,0,19,75,1,0,0,0,21,79,1,0,0,0,23,83,1,0,0,0,25,87,1,0,0,0,
27,92,1,0,0,0,29,96,1,0,0,0,31,101,1,0,0,0,33,108,1,0,0,0,35,117,1,0,0,0,
37,124,1,0,0,0,39,40,5,76,0,0,40,41,5,68,0,0,41,42,5,86,0,0,42,2,1,0,0,0,
43,44,5,80,0,0,44,45,5,79,0,0,45,46,5,80,0,0,46,4,1,0,0,0,47,48,5,66,0,0,
48,49,5,76,0,0,49,50,5,68,0,0,50,6,1,0,0,0,51,52,5,65,0,0,52,53,5,68,0,0,
53,54,5,68,0,0,54,8,1,0,0,0,55,56,5,77,0,0,56,57,5,85,0,0,57,58,5,76,0,0,
58,10,1,0,0,0,59,60,5,68,0,0,60,61,5,73,0,0,61,62,5,86,0,0,62,12,1,0,0,0,
63,64,5,83,0,0,64,65,5,85,0,0,65,66,5,66,0,0,66,14,1,0,0,0,67,68,5,80,0,
0,68,69,5,82,0,0,69,70,5,78,0,0,70,16,1,0,0,0,71,72,5,66,0,0,72,73,5,83,
0,0,73,74,5,84,0,0,74,18,1,0,0,0,75,76,5,72,0,0,76,77,5,76,0,0,77,78,5,84,
0,0,78,20,1,0,0,0,79,80,5,76,0,0,80,81,5,68,0,0,81,82,5,70,0,0,82,22,1,0,
0,0,83,84,5,65,0,0,84,85,5,80,0,0,85,86,5,80,0,0,86,24,1,0,0,0,87,88,5,36,
0,0,88,89,5,70,0,0,89,90,5,85,0,0,90,91,5,78,0,0,91,26,1,0,0,0,92,93,5,82,
0,0,93,94,5,69,0,0,94,95,5,84,0,0,95,28,1,0,0,0,96,97,5,84,0,0,97,98,5,79,
0,0,98,99,5,76,0,0,99,30,1,0,0,0,100,102,5,45,0,0,101,100,1,0,0,0,101,102,
1,0,0,0,102,104,1,0,0,0,103,105,7,0,0,0,104,103,1,0,0,0,105,106,1,0,0,0,
106,104,1,0,0,0,106,107,1,0,0,0,107,32,1,0,0,0,108,112,5,39,0,0,109,111,
9,0,0,0,110,109,1,0,0,0,111,114,1,0,0,0,112,113,1,0,0,0,112,110,1,0,0,0,
113,115,1,0,0,0,114,112,1,0,0,0,115,116,5,39,0,0,116,34,1,0,0,0,117,119,
5,36,0,0,118,120,7,0,0,0,119,118,1,0,0,0,120,121,1,0,0,0,121,119,1,0,0,0,
121,122,1,0,0,0,122,36,1,0,0,0,123,125,7,1,0,0,124,123,1,0,0,0,125,126,1,
0,0,0,126,124,1,0,0,0,126,127,1,0,0,0,127,128,1,0,0,0,128,129,6,18,0,0,129,
38,1,0,0,0,6,0,101,106,112,121,126,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class biesLexer extends antlr4.Lexer {

    static grammarFileName = "bies.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'LDV'", "'POP'", "'BLD'", "'ADD'", "'MUL'", 
                         "'DIV'", "'SUB'", "'PRN'", "'BST'", "'HLT'", "'LDF'", 
                         "'APP'", "'$FUN'", "'RET'", "'TOL'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          "INT", "STR", "FUNCTION", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "T__8", "T__9", "T__10", "T__11", "T__12", 
                      "T__13", "T__14", "INT", "STR", "FUNCTION", "WS" ];

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
biesLexer.T__10 = 11;
biesLexer.T__11 = 12;
biesLexer.T__12 = 13;
biesLexer.T__13 = 14;
biesLexer.T__14 = 15;
biesLexer.INT = 16;
biesLexer.STR = 17;
biesLexer.FUNCTION = 18;
biesLexer.WS = 19;



