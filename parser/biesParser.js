// Generated from grammar/bies.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesVisitor from './biesVisitor.js';

const serializedATN = [4,1,59,85,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,1,0,4,0,17,8,0,11,0,12,0,18,1,1,1,1,1,1,1,1,1,1,1,1,
3,1,27,8,1,1,1,4,1,30,8,1,11,1,12,1,31,1,1,1,1,1,2,1,2,1,2,5,2,39,8,2,10,
2,12,2,42,9,2,3,2,44,8,2,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,3,4,54,8,4,1,5,
1,5,3,5,58,8,5,1,5,1,5,3,5,62,8,5,1,5,1,5,3,5,66,8,5,1,5,5,5,69,8,5,10,5,
12,5,72,9,5,1,5,3,5,75,8,5,1,5,1,5,1,6,1,6,1,6,1,6,3,6,83,8,6,1,6,0,0,7,
0,2,4,6,8,10,12,0,1,1,0,1,45,96,0,16,1,0,0,0,2,20,1,0,0,0,4,35,1,0,0,0,6,
45,1,0,0,0,8,53,1,0,0,0,10,55,1,0,0,0,12,82,1,0,0,0,14,17,3,2,1,0,15,17,
3,4,2,0,16,14,1,0,0,0,16,15,1,0,0,0,17,18,1,0,0,0,18,16,1,0,0,0,18,19,1,
0,0,0,19,1,1,0,0,0,20,21,5,52,0,0,21,22,5,51,0,0,22,23,5,57,0,0,23,26,5,
48,0,0,24,25,5,56,0,0,25,27,5,51,0,0,26,24,1,0,0,0,26,27,1,0,0,0,27,29,1,
0,0,0,28,30,3,4,2,0,29,28,1,0,0,0,30,31,1,0,0,0,31,29,1,0,0,0,31,32,1,0,
0,0,32,33,1,0,0,0,33,34,5,53,0,0,34,3,1,0,0,0,35,43,3,6,3,0,36,40,3,8,4,
0,37,39,3,8,4,0,38,37,1,0,0,0,39,42,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,
41,44,1,0,0,0,42,40,1,0,0,0,43,36,1,0,0,0,43,44,1,0,0,0,44,5,1,0,0,0,45,
46,7,0,0,0,46,7,1,0,0,0,47,54,5,48,0,0,48,54,5,49,0,0,49,54,5,50,0,0,50,
54,5,51,0,0,51,54,3,10,5,0,52,54,5,58,0,0,53,47,1,0,0,0,53,48,1,0,0,0,53,
49,1,0,0,0,53,50,1,0,0,0,53,51,1,0,0,0,53,52,1,0,0,0,54,9,1,0,0,0,55,57,
5,46,0,0,56,58,5,54,0,0,57,56,1,0,0,0,57,58,1,0,0,0,58,59,1,0,0,0,59,70,
3,12,6,0,60,62,5,54,0,0,61,60,1,0,0,0,61,62,1,0,0,0,62,63,1,0,0,0,63,65,
5,59,0,0,64,66,5,54,0,0,65,64,1,0,0,0,65,66,1,0,0,0,66,67,1,0,0,0,67,69,
3,12,6,0,68,61,1,0,0,0,69,72,1,0,0,0,70,68,1,0,0,0,70,71,1,0,0,0,71,74,1,
0,0,0,72,70,1,0,0,0,73,75,5,54,0,0,74,73,1,0,0,0,74,75,1,0,0,0,75,76,1,0,
0,0,76,77,5,47,0,0,77,11,1,0,0,0,78,83,5,48,0,0,79,83,5,49,0,0,80,83,5,50,
0,0,81,83,3,10,5,0,82,78,1,0,0,0,82,79,1,0,0,0,82,80,1,0,0,0,82,81,1,0,0,
0,83,13,1,0,0,0,13,16,18,26,31,40,43,53,57,61,65,70,74,82];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesParser extends antlr4.Parser {

    static grammarFileName = "bies.g4";
    static literalNames = [ null, "'INI'", "'HLT'", "'POP'", "'SWP'", "'LDV'", 
                            "'BLD'", "'BST'", "'ADD'", "'MUL'", "'DIV'", 
                            "'SUB'", "'NEG'", "'SGN'", "'EQ'", "'GT'", "'GTE'", 
                            "'LT'", "'LTE'", "'AND'", "'OR'", "'XOR'", "'NOT'", 
                            "'SNT'", "'CAT'", "'TOS'", "'LNT'", "'LIN'", 
                            "'LTK'", "'LRK'", "'TOL'", "'NOP'", "'BR'", 
                            "'BT'", "'BF'", "'LDF'", "'APP'", "'RET'", "'CST'", 
                            "'INO'", "'PRN'", "'STK'", "'SRK'", "'INP'", 
                            "'LEN'", "'POW'", "'['", "']'", null, null, 
                            null, null, "'$FUN'", "'$END'", null, null, 
                            "'parent:'", "'args:'", null, "','" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "INT", "FLOAT", "STR", "FUNCTION", "FUN", "END", 
                             "WS", "COMMENT", "PARENT", "ARGS", "ID", "COMMA" ];
    static ruleNames = [ "start", "funDef", "inst", "mnemonic", "arg", "list", 
                         "element" ];

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
	        this.state = 16; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 52:
	                this.state = 14;
	                this.funDef();
	                break;
	            case 1:
	            case 2:
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
	            case 43:
	            case 44:
	            case 45:
	                this.state = 15;
	                this.inst();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 18; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 1064959) !== 0));
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
	        this.state = 20;
	        this.match(biesParser.FUN);
	        this.state = 21;
	        this.match(biesParser.FUNCTION);
	        this.state = 22;
	        this.match(biesParser.ARGS);
	        this.state = 23;
	        this.match(biesParser.INT);
	        this.state = 26;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===56) {
	            this.state = 24;
	            this.match(biesParser.PARENT);
	            this.state = 25;
	            this.match(biesParser.FUNCTION);
	        }

	        this.state = 29; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 28;
	            this.inst();
	            this.state = 31; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 16383) !== 0));
	        this.state = 33;
	        this.match(biesParser.END);
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
	    this.enterRule(localctx, 4, biesParser.RULE_inst);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.mnemonic();
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 46)) & ~0x1f) === 0 && ((1 << (_la - 46)) & 4157) !== 0)) {
	            this.state = 36;
	            this.arg();
	            this.state = 40;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 46)) & ~0x1f) === 0 && ((1 << (_la - 46)) & 4157) !== 0)) {
	                this.state = 37;
	                this.arg();
	                this.state = 42;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
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
	    this.enterRule(localctx, 6, biesParser.RULE_mnemonic);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 16383) !== 0))) {
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
	    this.enterRule(localctx, 8, biesParser.RULE_arg);
	    try {
	        this.state = 53;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 48:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 47;
	            this.match(biesParser.INT);
	            break;
	        case 49:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 48;
	            this.match(biesParser.FLOAT);
	            break;
	        case 50:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 49;
	            this.match(biesParser.STR);
	            break;
	        case 51:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 50;
	            this.match(biesParser.FUNCTION);
	            break;
	        case 46:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 51;
	            this.list();
	            break;
	        case 58:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 52;
	            this.match(biesParser.ID);
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



	list() {
	    let localctx = new ListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, biesParser.RULE_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(biesParser.T__45);
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===54) {
	            this.state = 56;
	            this.match(biesParser.WS);
	        }

	        this.state = 59;
	        this.element();
	        this.state = 70;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 61;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===54) {
	                    this.state = 60;
	                    this.match(biesParser.WS);
	                }

	                this.state = 63;
	                this.match(biesParser.COMMA);
	                this.state = 65;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===54) {
	                    this.state = 64;
	                    this.match(biesParser.WS);
	                }

	                this.state = 67;
	                this.element(); 
	            }
	            this.state = 72;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===54) {
	            this.state = 73;
	            this.match(biesParser.WS);
	        }

	        this.state = 76;
	        this.match(biesParser.T__46);
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



	element() {
	    let localctx = new ElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, biesParser.RULE_element);
	    try {
	        this.state = 82;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 48:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 78;
	            this.match(biesParser.INT);
	            break;
	        case 49:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 79;
	            this.match(biesParser.FLOAT);
	            break;
	        case 50:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 80;
	            this.match(biesParser.STR);
	            break;
	        case 46:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 81;
	            this.list();
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
biesParser.T__42 = 43;
biesParser.T__43 = 44;
biesParser.T__44 = 45;
biesParser.T__45 = 46;
biesParser.T__46 = 47;
biesParser.INT = 48;
biesParser.FLOAT = 49;
biesParser.STR = 50;
biesParser.FUNCTION = 51;
biesParser.FUN = 52;
biesParser.END = 53;
biesParser.WS = 54;
biesParser.COMMENT = 55;
biesParser.PARENT = 56;
biesParser.ARGS = 57;
biesParser.ID = 58;
biesParser.COMMA = 59;

biesParser.RULE_start = 0;
biesParser.RULE_funDef = 1;
biesParser.RULE_inst = 2;
biesParser.RULE_mnemonic = 3;
biesParser.RULE_arg = 4;
biesParser.RULE_list = 5;
biesParser.RULE_element = 6;

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


	ARGS() {
	    return this.getToken(biesParser.ARGS, 0);
	};

	INT() {
	    return this.getToken(biesParser.INT, 0);
	};

	END() {
	    return this.getToken(biesParser.END, 0);
	};

	PARENT() {
	    return this.getToken(biesParser.PARENT, 0);
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

	FLOAT() {
	    return this.getToken(biesParser.FLOAT, 0);
	};

	STR() {
	    return this.getToken(biesParser.STR, 0);
	};

	FUNCTION() {
	    return this.getToken(biesParser.FUNCTION, 0);
	};

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	ID() {
	    return this.getToken(biesParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitArg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_list;
    }

	element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElementContext);
	    } else {
	        return this.getTypedRuleContext(ElementContext,i);
	    }
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesParser.WS);
	    } else {
	        return this.getToken(biesParser.WS, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesParser.COMMA);
	    } else {
	        return this.getToken(biesParser.COMMA, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesParser.RULE_element;
    }

	INT() {
	    return this.getToken(biesParser.INT, 0);
	};

	FLOAT() {
	    return this.getToken(biesParser.FLOAT, 0);
	};

	STR() {
	    return this.getToken(biesParser.STR, 0);
	};

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitElement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




biesParser.StartContext = StartContext; 
biesParser.FunDefContext = FunDefContext; 
biesParser.InstContext = InstContext; 
biesParser.MnemonicContext = MnemonicContext; 
biesParser.ArgContext = ArgContext; 
biesParser.ListContext = ListContext; 
biesParser.ElementContext = ElementContext; 
