// Generated from grammar/bies.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesVisitor from './biesVisitor.js';

const serializedATN = [4,1,49,53,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,1,0,4,0,15,8,0,11,0,12,0,16,1,1,1,1,1,1,3,1,22,8,1,1,1,1,1,3,
1,26,8,1,1,1,4,1,29,8,1,11,1,12,1,30,1,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,
5,3,42,8,3,10,3,12,3,45,9,3,3,3,47,8,3,1,4,1,4,1,5,1,5,1,5,0,0,6,0,2,4,6,
8,10,0,2,1,0,3,42,2,0,43,45,47,47,53,0,14,1,0,0,0,2,18,1,0,0,0,4,35,1,0,
0,0,6,38,1,0,0,0,8,48,1,0,0,0,10,50,1,0,0,0,12,15,3,2,1,0,13,15,3,6,3,0,
14,12,1,0,0,0,14,13,1,0,0,0,15,16,1,0,0,0,16,14,1,0,0,0,16,17,1,0,0,0,17,
1,1,0,0,0,18,19,5,46,0,0,19,21,5,45,0,0,20,22,3,4,2,0,21,20,1,0,0,0,21,22,
1,0,0,0,22,25,1,0,0,0,23,24,5,1,0,0,24,26,5,45,0,0,25,23,1,0,0,0,25,26,1,
0,0,0,26,28,1,0,0,0,27,29,3,6,3,0,28,27,1,0,0,0,29,30,1,0,0,0,30,28,1,0,
0,0,30,31,1,0,0,0,31,32,1,0,0,0,32,33,5,47,0,0,33,34,5,45,0,0,34,3,1,0,0,
0,35,36,5,2,0,0,36,37,5,43,0,0,37,5,1,0,0,0,38,46,3,8,4,0,39,43,3,10,5,0,
40,42,3,10,5,0,41,40,1,0,0,0,42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,
47,1,0,0,0,45,43,1,0,0,0,46,39,1,0,0,0,46,47,1,0,0,0,47,7,1,0,0,0,48,49,
7,0,0,0,49,9,1,0,0,0,50,51,7,1,0,0,51,11,1,0,0,0,7,14,16,21,25,30,43,46];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesParser extends antlr4.Parser {

    static grammarFileName = "bies.g4";
    static literalNames = [ null, "'parent:'", "'args:'", "'INI'", "'HLT'", 
                            "'POP'", "'SWP'", "'LDV'", "'BLD'", "'BST'", 
                            "'ADD'", "'MUL'", "'DIV'", "'SUB'", "'NEG'", 
                            "'SGN'", "'EQ'", "'GT'", "'GTE'", "'LT'", "'LTE'", 
                            "'AND'", "'OR'", "'XOR'", "'NOT'", "'SNT'", 
                            "'CAT'", "'TOS'", "'LNT'", "'LIN'", "'LTK'", 
                            "'LRK'", "'TOL'", "'NOP'", "'BR'", "'BT'", "'BF'", 
                            "'LDF'", "'APP'", "'RET'", "'CST'", "'INO'", 
                            "'PRN'", null, null, null, "'$FUN'", "'$END'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "INT", "STR", "FUNCTION", 
                             "FUN", "END", "WS", "COMMENT" ];
    static ruleNames = [ "start", "funDef", "argsDecl", "inst", "mnemonic", 
                         "arg" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = biesParser.ruleNames;
        this.literalNames = biesParser.literalNames;
        this.symbolicNames = biesParser.symbolicNames;
    }



	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, biesParser.RULE_start);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 14;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 46:
	                this.state = 12;
	                this.funDef();
	                break;
	            case 3:
	            case 4:
	            case 5:
	            case 6:
	            case 7:
	            case 8:
	            case 9:
	            case 10:
	            case 11:
	            case 12:
	            case 13:
	            case 14:
	            case 15:
	            case 16:
	            case 17:
	            case 18:
	            case 19:
	            case 20:
	            case 21:
	            case 22:
	            case 23:
	            case 24:
	            case 25:
	            case 26:
	            case 27:
	            case 28:
	            case 29:
	            case 30:
	            case 31:
	            case 32:
	            case 33:
	            case 34:
	            case 35:
	            case 36:
	            case 37:
	            case 38:
	            case 39:
	            case 40:
	            case 41:
	            case 42:
	                this.state = 13;
	                this.inst();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 16; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967288) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 18431) !== 0));
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



	funDef() {
	    let localctx = new FunDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, biesParser.RULE_funDef);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.match(biesParser.FUN);
	        this.state = 19;
	        this.match(biesParser.FUNCTION);
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 20;
	            this.argsDecl();
	        }

	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 23;
	            this.match(biesParser.T__0);
	            this.state = 24;
	            this.match(biesParser.FUNCTION);
	        }

	        this.state = 28; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 27;
	            this.inst();
	            this.state = 30; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967288) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2047) !== 0));
	        this.state = 32;
	        this.match(biesParser.END);
	        this.state = 33;
	        this.match(biesParser.FUNCTION);
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



	argsDecl() {
	    let localctx = new ArgsDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, biesParser.RULE_argsDecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(biesParser.T__1);
	        this.state = 36;
	        this.match(biesParser.INT);
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



	inst() {
	    let localctx = new InstContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, biesParser.RULE_inst);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.mnemonic();
	        this.state = 46;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        if(la_===1) {
	            this.state = 39;
	            this.arg();
	            this.state = 43;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 40;
	                    this.arg(); 
	                }
	                this.state = 45;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	            }


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



	mnemonic() {
	    let localctx = new MnemonicContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, biesParser.RULE_mnemonic);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967288) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2047) !== 0))) {
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



	arg() {
	    let localctx = new ArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, biesParser.RULE_arg);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        _la = this._input.LA(1);
	        if(!(((((_la - 43)) & ~0x1f) === 0 && ((1 << (_la - 43)) & 23) !== 0))) {
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

biesParser.EOF = antlr4.Token.EOF;
biesParser.T__0 = 1;
biesParser.T__1 = 2;
biesParser.T__2 = 3;
biesParser.T__3 = 4;
biesParser.T__4 = 5;
biesParser.T__5 = 6;
biesParser.T__6 = 7;
biesParser.T__7 = 8;
biesParser.T__8 = 9;
biesParser.T__9 = 10;
biesParser.T__10 = 11;
biesParser.T__11 = 12;
biesParser.T__12 = 13;
biesParser.T__13 = 14;
biesParser.T__14 = 15;
biesParser.T__15 = 16;
biesParser.T__16 = 17;
biesParser.T__17 = 18;
biesParser.T__18 = 19;
biesParser.T__19 = 20;
biesParser.T__20 = 21;
biesParser.T__21 = 22;
biesParser.T__22 = 23;
biesParser.T__23 = 24;
biesParser.T__24 = 25;
biesParser.T__25 = 26;
biesParser.T__26 = 27;
biesParser.T__27 = 28;
biesParser.T__28 = 29;
biesParser.T__29 = 30;
biesParser.T__30 = 31;
biesParser.T__31 = 32;
biesParser.T__32 = 33;
biesParser.T__33 = 34;
biesParser.T__34 = 35;
biesParser.T__35 = 36;
biesParser.T__36 = 37;
biesParser.T__37 = 38;
biesParser.T__38 = 39;
biesParser.T__39 = 40;
biesParser.T__40 = 41;
biesParser.T__41 = 42;
biesParser.INT = 43;
biesParser.STR = 44;
biesParser.FUNCTION = 45;
biesParser.FUN = 46;
biesParser.END = 47;
biesParser.WS = 48;
biesParser.COMMENT = 49;

biesParser.RULE_start = 0;
biesParser.RULE_funDef = 1;
biesParser.RULE_argsDecl = 2;
biesParser.RULE_inst = 3;
biesParser.RULE_mnemonic = 4;
biesParser.RULE_arg = 5;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_start;
    }

	funDef = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunDefContext);
	    } else {
	        return this.getTypedRuleContext(FunDefContext,i);
	    }
	};

	inst = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstContext);
	    } else {
	        return this.getTypedRuleContext(InstContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitStart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_funDef;
    }

	FUN() {
	    return this.getToken(biesParser.FUN, 0);
	};

	FUNCTION = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesParser.FUNCTION);
	    } else {
	        return this.getToken(biesParser.FUNCTION, i);
	    }
	};


	END() {
	    return this.getToken(biesParser.END, 0);
	};

	argsDecl() {
	    return this.getTypedRuleContext(ArgsDeclContext,0);
	};

	inst = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstContext);
	    } else {
	        return this.getTypedRuleContext(InstContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitFunDef(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgsDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_argsDecl;
    }

	INT() {
	    return this.getToken(biesParser.INT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitArgsDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_inst;
    }

	mnemonic() {
	    return this.getTypedRuleContext(MnemonicContext,0);
	};

	arg = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgContext);
	    } else {
	        return this.getTypedRuleContext(ArgContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitInst(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MnemonicContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_mnemonic;
    }


	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitMnemonic(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_arg;
    }

	INT() {
	    return this.getToken(biesParser.INT, 0);
	};

	STR() {
	    return this.getToken(biesParser.STR, 0);
	};

	FUNCTION() {
	    return this.getToken(biesParser.FUNCTION, 0);
	};

	END() {
	    return this.getToken(biesParser.END, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitArg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




biesParser.StartContext = StartContext; 
biesParser.FunDefContext = FunDefContext; 
biesParser.ArgsDeclContext = ArgsDeclContext; 
biesParser.InstContext = InstContext; 
biesParser.MnemonicContext = MnemonicContext; 
biesParser.ArgContext = ArgContext; 
