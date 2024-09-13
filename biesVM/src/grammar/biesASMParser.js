// Generated from grammar/biesASM.g4 by ANTLR 4.13.2
// jshint ignore: start
const antlr4 = require('antlr4');
const biesASMListener = require('./biesASMListener');
const serializedATN = [4,1,9,35,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,5,0,
10,8,0,10,0,12,0,13,9,0,1,1,1,1,1,1,5,1,18,8,1,10,1,12,1,21,9,1,1,1,1,1,
1,1,1,2,1,2,1,2,1,2,1,2,3,2,31,8,2,1,3,1,3,1,3,0,0,4,0,2,4,6,0,1,1,0,7,8,
35,0,11,1,0,0,0,2,14,1,0,0,0,4,30,1,0,0,0,6,32,1,0,0,0,8,10,3,2,1,0,9,8,
1,0,0,0,10,13,1,0,0,0,11,9,1,0,0,0,11,12,1,0,0,0,12,1,1,0,0,0,13,11,1,0,
0,0,14,15,5,5,0,0,15,19,5,7,0,0,16,18,3,4,2,0,17,16,1,0,0,0,18,21,1,0,0,
0,19,17,1,0,0,0,19,20,1,0,0,0,20,22,1,0,0,0,21,19,1,0,0,0,22,23,5,6,0,0,
23,24,5,7,0,0,24,3,1,0,0,0,25,26,5,1,0,0,26,31,3,6,3,0,27,31,5,2,0,0,28,
31,5,3,0,0,29,31,5,4,0,0,30,25,1,0,0,0,30,27,1,0,0,0,30,28,1,0,0,0,30,29,
1,0,0,0,31,5,1,0,0,0,32,33,7,0,0,0,33,7,1,0,0,0,3,11,19,30];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesASMParser extends antlr4.Parser {

    static grammarFileName = "biesASM.g4";
    static literalNames = [ null, "'LDV'", "'MUL'", "'ADD'", "'EQ'", "'$FUN'", 
                            "'$END'" ];
    static symbolicNames = [ null, "LDV", "MUL", "ADD", "EQ", "FUN", "END", 
                             "VARIABLE", "NUMBER", "WS" ];
    static ruleNames = [ "program", "function", "instruction", "value" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = biesASMParser.ruleNames;
        this.literalNames = biesASMParser.literalNames;
        this.symbolicNames = biesASMParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, biesASMParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 8;
	            this.function_();
	            this.state = 13;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_() {
	    let localctx = new FunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, biesASMParser.RULE_function);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.match(biesASMParser.FUN);
	        this.state = 15;
	        this.match(biesASMParser.VARIABLE);
	        this.state = 19;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 30) !== 0)) {
	            this.state = 16;
	            this.instruction();
	            this.state = 21;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 22;
	        this.match(biesASMParser.END);
	        this.state = 23;
	        this.match(biesASMParser.VARIABLE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruction() {
	    let localctx = new InstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, biesASMParser.RULE_instruction);
	    try {
	        this.state = 30;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 25;
	            this.match(biesASMParser.LDV);
	            this.state = 26;
	            this.value();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 27;
	            this.match(biesASMParser.MUL);
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 28;
	            this.match(biesASMParser.ADD);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 29;
	            this.match(biesASMParser.EQ);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, biesASMParser.RULE_value);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        _la = this._input.LA(1);
	        if(!(_la===7 || _la===8)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

biesASMParser.EOF = antlr4.Token.EOF;
biesASMParser.LDV = 1;
biesASMParser.MUL = 2;
biesASMParser.ADD = 3;
biesASMParser.EQ = 4;
biesASMParser.FUN = 5;
biesASMParser.END = 6;
biesASMParser.VARIABLE = 7;
biesASMParser.NUMBER = 8;
biesASMParser.WS = 9;

biesASMParser.RULE_program = 0;
biesASMParser.RULE_function = 1;
biesASMParser.RULE_instruction = 2;
biesASMParser.RULE_value = 3;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesASMParser.RULE_program;
    }

	function_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunctionContext);
	    } else {
	        return this.getTypedRuleContext(FunctionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof biesASMListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesASMListener ) {
	        listener.exitProgram(this);
		}
	}


}



class FunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesASMParser.RULE_function;
    }

	FUN() {
	    return this.getToken(biesASMParser.FUN, 0);
	};

	VARIABLE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesASMParser.VARIABLE);
	    } else {
	        return this.getToken(biesASMParser.VARIABLE, i);
	    }
	};


	END() {
	    return this.getToken(biesASMParser.END, 0);
	};

	instruction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstructionContext);
	    } else {
	        return this.getTypedRuleContext(InstructionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof biesASMListener ) {
	        listener.enterFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesASMListener ) {
	        listener.exitFunction(this);
		}
	}


}



class InstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesASMParser.RULE_instruction;
    }

	LDV() {
	    return this.getToken(biesASMParser.LDV, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	MUL() {
	    return this.getToken(biesASMParser.MUL, 0);
	};

	ADD() {
	    return this.getToken(biesASMParser.ADD, 0);
	};

	EQ() {
	    return this.getToken(biesASMParser.EQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof biesASMListener ) {
	        listener.enterInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesASMListener ) {
	        listener.exitInstruction(this);
		}
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesASMParser.RULE_value;
    }

	VARIABLE() {
	    return this.getToken(biesASMParser.VARIABLE, 0);
	};

	NUMBER() {
	    return this.getToken(biesASMParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof biesASMListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof biesASMListener ) {
	        listener.exitValue(this);
		}
	}


}




biesASMParser.ProgramContext = ProgramContext; 
biesASMParser.FunctionContext = FunctionContext; 
biesASMParser.InstructionContext = InstructionContext; 
biesASMParser.ValueContext = ValueContext; 
