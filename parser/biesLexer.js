// Generated from grammar/bies.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,48,304,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,
2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,
27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,
7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,
41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,1,0,1,0,1,
0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,
3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,
8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,
12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,15,1,15,1,15,
1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,
20,1,20,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,
1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,27,1,27,1,
27,1,27,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,31,
1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,34,1,34,1,34,1,35,1,
35,1,35,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,39,
1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,42,3,42,266,8,42,
1,42,4,42,269,8,42,11,42,12,42,270,1,43,1,43,5,43,275,8,43,10,43,12,43,278,
9,43,1,43,1,43,1,44,1,44,4,44,284,8,44,11,44,12,44,285,1,45,1,45,1,45,1,
45,1,45,1,46,1,46,1,46,1,46,1,46,1,47,4,47,299,8,47,11,47,12,47,300,1,47,
1,47,1,276,0,48,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,
25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,
49,25,51,26,53,27,55,28,57,29,59,30,61,31,63,32,65,33,67,34,69,35,71,36,
73,37,75,38,77,39,79,40,81,41,83,42,85,43,87,44,89,45,91,46,93,47,95,48,
1,0,2,1,0,48,57,3,0,9,10,13,13,32,32,308,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,
0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,
1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,
0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,
0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,
51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,
0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,
1,0,0,0,0,75,1,0,0,0,0,77,1,0,0,0,0,79,1,0,0,0,0,81,1,0,0,0,0,83,1,0,0,0,
0,85,1,0,0,0,0,87,1,0,0,0,0,89,1,0,0,0,0,91,1,0,0,0,0,93,1,0,0,0,0,95,1,
0,0,0,1,97,1,0,0,0,3,105,1,0,0,0,5,111,1,0,0,0,7,115,1,0,0,0,9,119,1,0,0,
0,11,123,1,0,0,0,13,127,1,0,0,0,15,131,1,0,0,0,17,135,1,0,0,0,19,139,1,0,
0,0,21,143,1,0,0,0,23,147,1,0,0,0,25,151,1,0,0,0,27,155,1,0,0,0,29,159,1,
0,0,0,31,163,1,0,0,0,33,166,1,0,0,0,35,169,1,0,0,0,37,173,1,0,0,0,39,176,
1,0,0,0,41,180,1,0,0,0,43,184,1,0,0,0,45,187,1,0,0,0,47,191,1,0,0,0,49,195,
1,0,0,0,51,199,1,0,0,0,53,203,1,0,0,0,55,207,1,0,0,0,57,211,1,0,0,0,59,215,
1,0,0,0,61,219,1,0,0,0,63,223,1,0,0,0,65,227,1,0,0,0,67,231,1,0,0,0,69,234,
1,0,0,0,71,237,1,0,0,0,73,240,1,0,0,0,75,244,1,0,0,0,77,248,1,0,0,0,79,252,
1,0,0,0,81,256,1,0,0,0,83,260,1,0,0,0,85,265,1,0,0,0,87,272,1,0,0,0,89,281,
1,0,0,0,91,287,1,0,0,0,93,292,1,0,0,0,95,298,1,0,0,0,97,98,5,112,0,0,98,
99,5,97,0,0,99,100,5,114,0,0,100,101,5,101,0,0,101,102,5,110,0,0,102,103,
5,116,0,0,103,104,5,58,0,0,104,2,1,0,0,0,105,106,5,97,0,0,106,107,5,114,
0,0,107,108,5,103,0,0,108,109,5,115,0,0,109,110,5,58,0,0,110,4,1,0,0,0,111,
112,5,73,0,0,112,113,5,78,0,0,113,114,5,73,0,0,114,6,1,0,0,0,115,116,5,72,
0,0,116,117,5,76,0,0,117,118,5,84,0,0,118,8,1,0,0,0,119,120,5,80,0,0,120,
121,5,79,0,0,121,122,5,80,0,0,122,10,1,0,0,0,123,124,5,83,0,0,124,125,5,
87,0,0,125,126,5,80,0,0,126,12,1,0,0,0,127,128,5,76,0,0,128,129,5,68,0,0,
129,130,5,86,0,0,130,14,1,0,0,0,131,132,5,66,0,0,132,133,5,76,0,0,133,134,
5,68,0,0,134,16,1,0,0,0,135,136,5,66,0,0,136,137,5,83,0,0,137,138,5,84,0,
0,138,18,1,0,0,0,139,140,5,65,0,0,140,141,5,68,0,0,141,142,5,68,0,0,142,
20,1,0,0,0,143,144,5,77,0,0,144,145,5,85,0,0,145,146,5,76,0,0,146,22,1,0,
0,0,147,148,5,68,0,0,148,149,5,73,0,0,149,150,5,86,0,0,150,24,1,0,0,0,151,
152,5,83,0,0,152,153,5,85,0,0,153,154,5,66,0,0,154,26,1,0,0,0,155,156,5,
78,0,0,156,157,5,69,0,0,157,158,5,71,0,0,158,28,1,0,0,0,159,160,5,83,0,0,
160,161,5,71,0,0,161,162,5,78,0,0,162,30,1,0,0,0,163,164,5,69,0,0,164,165,
5,81,0,0,165,32,1,0,0,0,166,167,5,71,0,0,167,168,5,84,0,0,168,34,1,0,0,0,
169,170,5,71,0,0,170,171,5,84,0,0,171,172,5,69,0,0,172,36,1,0,0,0,173,174,
5,76,0,0,174,175,5,84,0,0,175,38,1,0,0,0,176,177,5,76,0,0,177,178,5,84,0,
0,178,179,5,69,0,0,179,40,1,0,0,0,180,181,5,65,0,0,181,182,5,78,0,0,182,
183,5,68,0,0,183,42,1,0,0,0,184,185,5,79,0,0,185,186,5,82,0,0,186,44,1,0,
0,0,187,188,5,88,0,0,188,189,5,79,0,0,189,190,5,82,0,0,190,46,1,0,0,0,191,
192,5,78,0,0,192,193,5,79,0,0,193,194,5,84,0,0,194,48,1,0,0,0,195,196,5,
83,0,0,196,197,5,78,0,0,197,198,5,84,0,0,198,50,1,0,0,0,199,200,5,67,0,0,
200,201,5,65,0,0,201,202,5,84,0,0,202,52,1,0,0,0,203,204,5,84,0,0,204,205,
5,79,0,0,205,206,5,83,0,0,206,54,1,0,0,0,207,208,5,76,0,0,208,209,5,78,0,
0,209,210,5,84,0,0,210,56,1,0,0,0,211,212,5,76,0,0,212,213,5,73,0,0,213,
214,5,78,0,0,214,58,1,0,0,0,215,216,5,76,0,0,216,217,5,84,0,0,217,218,5,
75,0,0,218,60,1,0,0,0,219,220,5,76,0,0,220,221,5,82,0,0,221,222,5,75,0,0,
222,62,1,0,0,0,223,224,5,84,0,0,224,225,5,79,0,0,225,226,5,76,0,0,226,64,
1,0,0,0,227,228,5,78,0,0,228,229,5,79,0,0,229,230,5,80,0,0,230,66,1,0,0,
0,231,232,5,66,0,0,232,233,5,82,0,0,233,68,1,0,0,0,234,235,5,66,0,0,235,
236,5,84,0,0,236,70,1,0,0,0,237,238,5,66,0,0,238,239,5,70,0,0,239,72,1,0,
0,0,240,241,5,76,0,0,241,242,5,68,0,0,242,243,5,70,0,0,243,74,1,0,0,0,244,
245,5,65,0,0,245,246,5,80,0,0,246,247,5,80,0,0,247,76,1,0,0,0,248,249,5,
82,0,0,249,250,5,69,0,0,250,251,5,84,0,0,251,78,1,0,0,0,252,253,5,67,0,0,
253,254,5,83,0,0,254,255,5,84,0,0,255,80,1,0,0,0,256,257,5,73,0,0,257,258,
5,78,0,0,258,259,5,79,0,0,259,82,1,0,0,0,260,261,5,80,0,0,261,262,5,82,0,
0,262,263,5,78,0,0,263,84,1,0,0,0,264,266,5,45,0,0,265,264,1,0,0,0,265,266,
1,0,0,0,266,268,1,0,0,0,267,269,7,0,0,0,268,267,1,0,0,0,269,270,1,0,0,0,
270,268,1,0,0,0,270,271,1,0,0,0,271,86,1,0,0,0,272,276,5,39,0,0,273,275,
9,0,0,0,274,273,1,0,0,0,275,278,1,0,0,0,276,277,1,0,0,0,276,274,1,0,0,0,
277,279,1,0,0,0,278,276,1,0,0,0,279,280,5,39,0,0,280,88,1,0,0,0,281,283,
5,36,0,0,282,284,7,0,0,0,283,282,1,0,0,0,284,285,1,0,0,0,285,283,1,0,0,0,
285,286,1,0,0,0,286,90,1,0,0,0,287,288,5,36,0,0,288,289,5,70,0,0,289,290,
5,85,0,0,290,291,5,78,0,0,291,92,1,0,0,0,292,293,5,36,0,0,293,294,5,69,0,
0,294,295,5,78,0,0,295,296,5,68,0,0,296,94,1,0,0,0,297,299,7,1,0,0,298,297,
1,0,0,0,299,300,1,0,0,0,300,298,1,0,0,0,300,301,1,0,0,0,301,302,1,0,0,0,
302,303,6,47,0,0,303,96,1,0,0,0,6,0,265,270,276,285,300,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class biesLexer extends antlr4.Lexer {

    static grammarFileName = "bies.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'parent:'", "'args:'", "'INI'", "'HLT'", 
                         "'POP'", "'SWP'", "'LDV'", "'BLD'", "'BST'", "'ADD'", 
                         "'MUL'", "'DIV'", "'SUB'", "'NEG'", "'SGN'", "'EQ'", 
                         "'GT'", "'GTE'", "'LT'", "'LTE'", "'AND'", "'OR'", 
                         "'XOR'", "'NOT'", "'SNT'", "'CAT'", "'TOS'", "'LNT'", 
                         "'LIN'", "'LTK'", "'LRK'", "'TOL'", "'NOP'", "'BR'", 
                         "'BT'", "'BF'", "'LDF'", "'APP'", "'RET'", "'CST'", 
                         "'INO'", "'PRN'", null, null, null, "'$FUN'", "'$END'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, null, null, "INT", "STR", "FUNCTION", "FUN", 
                          "END", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "T__8", "T__9", "T__10", "T__11", "T__12", 
                      "T__13", "T__14", "T__15", "T__16", "T__17", "T__18", 
                      "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
                      "T__25", "T__26", "T__27", "T__28", "T__29", "T__30", 
                      "T__31", "T__32", "T__33", "T__34", "T__35", "T__36", 
                      "T__37", "T__38", "T__39", "T__40", "T__41", "INT", 
                      "STR", "FUNCTION", "FUN", "END", "WS" ];

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
biesLexer.T__15 = 16;
biesLexer.T__16 = 17;
biesLexer.T__17 = 18;
biesLexer.T__18 = 19;
biesLexer.T__19 = 20;
biesLexer.T__20 = 21;
biesLexer.T__21 = 22;
biesLexer.T__22 = 23;
biesLexer.T__23 = 24;
biesLexer.T__24 = 25;
biesLexer.T__25 = 26;
biesLexer.T__26 = 27;
biesLexer.T__27 = 28;
biesLexer.T__28 = 29;
biesLexer.T__29 = 30;
biesLexer.T__30 = 31;
biesLexer.T__31 = 32;
biesLexer.T__32 = 33;
biesLexer.T__33 = 34;
biesLexer.T__34 = 35;
biesLexer.T__35 = 36;
biesLexer.T__36 = 37;
biesLexer.T__37 = 38;
biesLexer.T__38 = 39;
biesLexer.T__39 = 40;
biesLexer.T__40 = 41;
biesLexer.T__41 = 42;
biesLexer.INT = 43;
biesLexer.STR = 44;
biesLexer.FUNCTION = 45;
biesLexer.FUN = 46;
biesLexer.END = 47;
biesLexer.WS = 48;



