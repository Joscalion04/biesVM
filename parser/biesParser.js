// Generated from grammar/bies.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesVisitor from './biesVisitor.js';

const serializedATN = [4,1,57,81,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,1,0,4,0,17,8,0,11,0,12,0,18,1,1,1,1,1,1,1,1,1,1,1,1,
3,1,27,8,1,1,1,4,1,30,8,1,11,1,12,1,31,1,1,1,1,1,2,1,2,1,2,5,2,39,8,2,10,
2,12,2,42,9,2,3,2,44,8,2,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,3,4,54,8,4,1,5,
1,5,3,5,58,8,5,1,5,1,5,3,5,62,8,5,1,5,1,5,3,5,66,8,5,1,5,5,5,69,8,5,10,5,
12,5,72,9,5,1,5,3,5,75,8,5,1,5,1,5,1,6,1,6,1,6,0,0,7,0,2,4,6,8,10,12,0,2,
1,0,1,43,1,0,46,48,89,0,16,1,0,0,0,2,20,1,0,0,0,4,35,1,0,0,0,6,45,1,0,0,
0,8,53,1,0,0,0,10,55,1,0,0,0,12,78,1,0,0,0,14,17,3,2,1,0,15,17,3,4,2,0,16,
14,1,0,0,0,16,15,1,0,0,0,17,18,1,0,0,0,18,16,1,0,0,0,18,19,1,0,0,0,19,1,
1,0,0,0,20,21,5,50,0,0,21,22,5,49,0,0,22,23,5,55,0,0,23,26,5,46,0,0,24,25,
5,54,0,0,25,27,5,49,0,0,26,24,1,0,0,0,26,27,1,0,0,0,27,29,1,0,0,0,28,30,
3,4,2,0,29,28,1,0,0,0,30,31,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,33,1,
0,0,0,33,34,5,51,0,0,34,3,1,0,0,0,35,43,3,6,3,0,36,40,3,8,4,0,37,39,3,8,
4,0,38,37,1,0,0,0,39,42,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,44,1,0,0,
0,42,40,1,0,0,0,43,36,1,0,0,0,43,44,1,0,0,0,44,5,1,0,0,0,45,46,7,0,0,0,46,
7,1,0,0,0,47,54,5,46,0,0,48,54,5,47,0,0,49,54,5,48,0,0,50,54,5,49,0,0,51,
54,3,10,5,0,52,54,5,56,0,0,53,47,1,0,0,0,53,48,1,0,0,0,53,49,1,0,0,0,53,
50,1,0,0,0,53,51,1,0,0,0,53,52,1,0,0,0,54,9,1,0,0,0,55,57,5,44,0,0,56,58,
5,52,0,0,57,56,1,0,0,0,57,58,1,0,0,0,58,59,1,0,0,0,59,70,3,12,6,0,60,62,
5,52,0,0,61,60,1,0,0,0,61,62,1,0,0,0,62,63,1,0,0,0,63,65,5,57,0,0,64,66,
5,52,0,0,65,64,1,0,0,0,65,66,1,0,0,0,66,67,1,0,0,0,67,69,3,12,6,0,68,61,
1,0,0,0,69,72,1,0,0,0,70,68,1,0,0,0,70,71,1,0,0,0,71,74,1,0,0,0,72,70,1,
0,0,0,73,75,5,52,0,0,74,73,1,0,0,0,74,75,1,0,0,0,75,76,1,0,0,0,76,77,5,45,
0,0,77,11,1,0,0,0,78,79,7,1,0,0,79,13,1,0,0,0,12,16,18,26,31,40,43,53,57,
61,65,70,74];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

/**
* Clase que extiende `antlr4.Parser` y define el analizador sintáctico (parser) para el lenguaje BIES.
* Esta clase es responsable de analizar la entrada en base a las reglas de la gramática de BIES, 
* generando un árbol de análisis sintáctico (AST) que representa la estructura del código.
* 
* @class biesParser
* @extends antlr4.Parser
* 
* @author Manuel Mora Sandi 
* @author Derek Rojas Mendoza
* @author Josué Vindas Pérez
* @author Joseph León Cabezas
*/
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
                            "'['", "']'", null, null, null, null, "'$FUN'", 
                            "'$END'", null, null, "'parent:'", "'args:'", 
                            null, "','" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "INT", 
                             "FLOAT", "STR", "FUNCTION", "FUN", "END", "WS", 
                             "COMMENT", "PARENT", "ARGS", "ID", "COMMA" ];
    static ruleNames = [ "start", "funDef", "inst", "mnemonic", "arg", "list", 
                         "element" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = biesParser.ruleNames;
        this.literalNames = biesParser.literalNames;
        this.symbolicNames = biesParser.symbolicNames;
    }

	/**
	* Método que representa la regla de inicio del parser para el lenguaje BIES.
	* Este método se encarga de procesar las definiciones de funciones y las instrucciones,
	* creando el contexto inicial de análisis sintáctico (AST). Utiliza un bucle para manejar
	* múltiples definiciones o instrucciones en la entrada según las reglas de la gramática.
	* 
	* @method start
	* @returns {StartContext} El contexto del inicio que se está procesando.
	* @throws {antlr4.error.NoViableAltException} Si no se encuentra una alternativa válida en el análisis.
	*/
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
	            case 50:
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
	                this.state = 15;
	                this.inst();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 18; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 266239) !== 0));
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

	/**
	* Método que define la regla para procesar una definición de función en el lenguaje BIES.
	* Este método maneja el reconocimiento de palabras clave asociadas a la declaración de funciones,
	* como `FUN`, `FUNCTION`, `ARGS` e `INT`, además de procesar las instrucciones dentro del cuerpo de la función.
	* También maneja una posible declaración de función padre opcional, verificando la presencia de un `PARENT`.
	* 
	* @method funDef
	* @returns {FunDefContext} El contexto de la definición de función que se está procesando.
	* @throws {antlr4.error.RecognitionException} Si ocurre un error de reconocimiento durante el análisis.
	*/
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
	        if(_la===54) {
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
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4095) !== 0));
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

	/**
	* Método que define la regla para procesar una instrucción en el lenguaje BIES.
	* Este método maneja el reconocimiento de un mnemónico seguido de uno o más argumentos opcionales.
	* Si la instrucción contiene argumentos, estos se procesan mediante la invocación repetida del método `arg()`.
	* 
	* @method inst
	* @returns {InstContext} El contexto de la instrucción que se está procesando.
	* @throws {antlr4.error.RecognitionException} Si ocurre un error de reconocimiento durante el análisis.
	*/
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
	        if(((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 4157) !== 0)) {
	            this.state = 36;
	            this.arg();
	            this.state = 40;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 4157) !== 0)) {
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

	/**
	* Método que define la regla para procesar un mnemónico en el lenguaje BIES.
	* Este método se encarga de reconocer un mnemónico válido en la entrada,
	* verificando que el símbolo actual corresponda a uno de los mnemónicos definidos.
	* Si el mnemónico es válido, se registra el reconocimiento y se consume el token.
	* 
	* @method mnemonic
	* @returns {MnemonicContext} El contexto del mnemónico que se está procesando.
	* @throws {antlr4.error.RecognitionException} Si ocurre un error de reconocimiento durante el análisis.
	*/
	mnemonic() {
	    let localctx = new MnemonicContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, biesParser.RULE_mnemonic);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4095) !== 0))) {
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

	/**
	* Método que define la regla para procesar un argumento en el lenguaje BIES.
	* Este método verifica el tipo de argumento que se encuentra en la entrada,
	* permitiendo argumentos de tipo entero, flotante, cadena, función, lista o identificador.
	* Dependiendo del tipo de argumento reconocido, se consumirá el token correspondiente.
	* 
	* @method arg
	* @returns {ArgContext} El contexto del argumento que se está procesando.
	* @throws {antlr4.error.RecognitionException} Si ocurre un error de reconocimiento durante el análisis.
	*/
	arg() {
	    let localctx = new ArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, biesParser.RULE_arg);
	    try {
	        this.state = 53;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 46:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 47;
	            this.match(biesParser.INT);
	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 48;
	            this.match(biesParser.FLOAT);
	            break;
	        case 48:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 49;
	            this.match(biesParser.STR);
	            break;
	        case 49:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 50;
	            this.match(biesParser.FUNCTION);
	            break;
	        case 44:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 51;
	            this.list();
	            break;
	        case 56:
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

	/**
	* Método que define la regla para procesar una lista en el lenguaje BIES.
	* Este método comienza y termina la lista, y permite la inclusión de múltiples
	* elementos separados por comas. Se gestiona el espacio en blanco antes y
	* después de las comas. Los elementos de la lista son procesados mediante
	* el método `element()`.
	* 
	* @method list
	* @returns {ListContext} El contexto de la lista que se está procesando.
	* @throws {antlr4.error.RecognitionException} Si ocurre un error de reconocimiento durante el análisis.
    */
	list() {
	    let localctx = new ListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, biesParser.RULE_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(biesParser.T__43);
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===52) {
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
	                if(_la===52) {
	                    this.state = 60;
	                    this.match(biesParser.WS);
	                }

	                this.state = 63;
	                this.match(biesParser.COMMA);
	                this.state = 65;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===52) {
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
	        if(_la===52) {
	            this.state = 73;
	            this.match(biesParser.WS);
	        }

	        this.state = 76;
	        this.match(biesParser.T__44);
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

	/**
	* Método que define la regla para procesar un elemento dentro de una lista
	* en el lenguaje BIES. Este método verifica si el elemento es uno de los
	* tipos válidos (INT, FLOAT, STR, FUNCTION) y lo consume si es válido.
	* 
	* @method element
	* @returns {ElementContext} El contexto del elemento que se está procesando.
	* @throws {antlr4.error.RecognitionException} Si ocurre un error de reconocimiento durante el análisis.
	*/
	element() {
	    let localctx = new ElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, biesParser.RULE_element);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        _la = this._input.LA(1);
	        if(!(((((_la - 46)) & ~0x1f) === 0 && ((1 << (_la - 46)) & 7) !== 0))) {
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
biesParser.T__42 = 43;
biesParser.T__43 = 44;
biesParser.T__44 = 45;
biesParser.INT = 46;
biesParser.FLOAT = 47;
biesParser.STR = 48;
biesParser.FUNCTION = 49;
biesParser.FUN = 50;
biesParser.END = 51;
biesParser.WS = 52;
biesParser.COMMENT = 53;
biesParser.PARENT = 54;
biesParser.ARGS = 55;
biesParser.ID = 56;
biesParser.COMMA = 57;

biesParser.RULE_start = 0;
biesParser.RULE_funDef = 1;
biesParser.RULE_inst = 2;
biesParser.RULE_mnemonic = 3;
biesParser.RULE_arg = 4;
biesParser.RULE_list = 5;
biesParser.RULE_element = 6;

/**
 * Clase que extiende `antlr4.ParserRuleContext` y representa el contexto de inicio para el lenguaje BIES.
 * Esta clase es responsable de encapsular la información del contexto de análisis sintáctico
 * en la raíz del árbol de análisis, facilitando el acceso a las reglas y nodos hijos
 * de la gramática durante el proceso de análisis.
 * 
 * @class StartContext
 * @extends antlr4.ParserRuleContext
 * 
 * @author Manuel Mora Sandi 
 * @author Derek Rojas Mendoza
 * @author Josué Vindas Pérez
 * @author Joseph León Cabezas
 */
class StartContext extends antlr4.ParserRuleContext {

	/**
    * Crea una instancia de `StartContext`.
    * 
    * @param {antlr4.Parser} parser - El analizador sintáctico asociado.
    * @param {antlr4.ParserRuleContext} parent - El contexto padre.
    * @param {number} invokingState - El estado de invocación del analizador.
    */
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

	/**
	* Método que recupera definiciones de funciones en el contexto de análisis sintáctico.
	* Permite obtener una o varias instancias de `FunDefContext`, que representan las 
	* definiciones de funciones en el árbol de análisis sintáctico para el lenguaje BIES.
	* @method funDef
	* @param {number|null} i - El índice de la definición de función que se desea recuperar.
	*                           Si se proporciona `null`, se retornarán todas las definiciones.
	* @returns {Array<FunDefContext>|FunDefContext} - Un array de `FunDefContext` si `i` es `null`,
	*                                                  o una instancia de `FunDefContext` si `i` es un número.
    */
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

	/**
	 * Método que recupera instrucciones en el contexto de análisis sintáctico.
	 * Permite obtener una o varias instancias de `InstContext`, que representan las
	 * instrucciones en el árbol de análisis sintáctico para el lenguaje BIES.
	 * @method inst
	 * @param {number|null} i - El índice de la instrucción que se desea recuperar.
	 *                          Si se proporciona `null`, se retornarán todas las instrucciones.
	 * @returns {Array<InstContext>|InstContext} - Un array de `InstContext` si `i` es `null`,
	 *                                               o una instancia de `InstContext` si `i` es un número.
	 */
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

	/**
	 * Método que acepta un visitante en el contexto de análisis sintáctico.
	 * Este método permite que un objeto visitante (visitor) realice operaciones
	 * sobre el contexto actual (`StartContext`). Si el visitante es una instancia de
	 * `biesVisitor`, se llama al método específico para manejar el contexto de inicio.
	 * De lo contrario, se llama al método `visitChildren` para procesar los nodos hijos.
	 * @method accept
	 * @param {Object} visitor - El visitante que va a operar sobre este contexto.
	 * @returns {Object} - El resultado de la operación del visitante sobre el contexto.
	 */
	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitStart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}
}

/**
 * Clase que extiende `antlr4.ParserRuleContext` y define el contexto para la definición de funciones en el lenguaje BIES.
 * Esta clase representa un bloque de código que define una función, incluyendo su nombre, parámetros y cuerpo.
 * 
 * @class FunDefContext
 * @extends antlr4.ParserRuleContext
 * 
 * @author Manuel Mora Sandi 
 * @author Derek Rojas Mendoza
 * @author Josué Vindas Pérez
 * @author Joseph León Cabezas
 */
class FunDefContext extends antlr4.ParserRuleContext {

	/**
	 * Constructor de la clase `FunDefContext`.
	 * 
	 * @param {Parser} parser - El analizador sintáctico que está utilizando este contexto.
	 * @param {ParserRuleContext|null} parent - El contexto padre, o `null` si no hay.
	 * @param {number} invokingState - El estado de invocación de la regla actual.
	 */
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

	/**
	 * Método que obtiene el token correspondiente a la palabra clave `FUN`.
	 * @method FUN
	 * @returns {Token} El token que representa la palabra clave `FUN` en la entrada.
	 */
	FUN() {
	    return this.getToken(biesParser.FUN, 0);
	};

	/**
	 * Método que obtiene uno o más tokens correspondientes a la palabra clave `FUNCTION`.
	 * 
	 * @method FUNCTION
	 * @param {number|null} i - El índice del token que se desea obtener. 
	 *                          Si no se proporciona, se retornarán todos los tokens `FUNCTION`.
	 * @returns {Token|Token[]} Un token que representa la palabra clave `FUNCTION` si se especifica un índice,
	 *                          o un arreglo de todos los tokens `FUNCTION` si no se especifica.
	 */
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

	/**
	 * Método que obtiene el token correspondiente a la palabra clave `ARGS`.
	 * @method ARGS
	 * @returns {Token} El token que representa la palabra clave `ARGS`.
	 */
	ARGS() {
	    return this.getToken(biesParser.ARGS, 0);
	};

	/**
	 * Método que obtiene el token correspondiente al tipo de dato `INT`.
	 * @method INT
	 * @returns {Token} El token que representa el tipo de dato `INT`.
	 */
	INT() {
	    return this.getToken(biesParser.INT, 0);
	};

	/**
	 * Método que obtiene el token correspondiente a la palabra clave `END`.
	 * @method END
	 * @returns {Token} El token que representa la palabra clave `END`.
	 */
	END() {
	    return this.getToken(biesParser.END, 0);
	};

	/**
	 * Método que obtiene el token correspondiente a la palabra clave `PARENT`.
	 * @method PARENT
	 * @returns {Token} El token que representa la palabra clave `PARENT`.
	 */
	PARENT() {
	    return this.getToken(biesParser.PARENT, 0);
	};

	/**
	 * Método que obtiene una o varias instancias del contexto de la regla `Inst`.
	 * 
	 * @param {number|null} [i=null] - Índice de la instancia del contexto a obtener. 
	 *                                 Si es `null`, se retornan todas las instancias de `InstContext`.
	 * @method inst
	 * @returns {Array<InstContext>|InstContext} Un array de instancias de `InstContext` 
	 *                                            si `i` es `null`, o una única instancia si `i` tiene un valor.
	 */
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

	/**
	 * Método que acepta un visitante para procesar el contexto de la definición de función.
	 * 
	 * @param {Visitor} visitor - El visitante que se encargará de procesar este contexto.
	 * @method accept
	 * @returns {*} El resultado del procesamiento del visitante.
	 * 
	 * Si el visitante es una instancia de `biesVisitor`, se llama a su método `visitFunDef` 
	 * pasando este contexto. Si no, se llama a `visitChildren` para procesar todos los hijos
	 * del contexto.
	 */
	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitFunDef(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}
}

/**
 * Clase que extiende `antlr4.ParserRuleContext` y define el contexto para las instrucciones en el lenguaje BIES.
 * Esta clase representa un bloque de código que incluye diversas instrucciones que pueden ser ejecutadas 
 * dentro de una función o un programa, gestionando la lógica del flujo de control y operaciones.
 * 
 * @class InstContext
 * @extends antlr4.ParserRuleContext
 * 
 * @author Manuel Mora Sandi 
 * @author Derek Rojas Mendoza
 * @author Josué Vindas Pérez
 * @author Joseph León Cabezas
 */
class InstContext extends antlr4.ParserRuleContext {
	/**
	 * Constructor de la clase `InstContext`.
	 * 
	 * Este constructor inicializa una nueva instancia del contexto de instrucción,
	 * estableciendo el parser, el contexto padre y el estado de invocación.
	 * 
	 * @param {antlr4.Parser} parser - El analizador (parser) asociado a este contexto.
	 * @param {antlr4.ParserRuleContext} parent - El contexto padre que contiene este contexto.
	 * @param {number} invokingState - El estado de invocación que indica el punto de entrada en la gramática.
	 */
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

	/**
	 * Método que devuelve el contexto de `MnemonicContext` asociado a la instrucción.
	 * 
	 * Este método permite acceder al contexto específico de la mnemotecnia utilizada en la
	 * instrucción actual, lo que facilita la manipulación y análisis de la misma en el árbol
	 * de análisis sintáctico.
	 * @method mnemonic
	 * @returns {MnemonicContext} El contexto de la mnemotecnia correspondiente a la instrucción.
	 */
	mnemonic() {
	    return this.getTypedRuleContext(MnemonicContext,0);
	};

	/**
	 * Método que devuelve el contexto de `ArgContext` asociado a los argumentos de la función o instrucción.
	 * 
	 * Este método permite acceder a uno o más contextos de argumentos utilizados en la
	 * declaración actual. Si se llama sin parámetros, devuelve todos los contextos de argumentos,
	 * de lo contrario, devuelve el contexto de argumento en la posición especificada.
	 * 
	 * @param {number|null} i - El índice del argumento que se desea recuperar. Si se proporciona 
	 *                          un valor nulo, se devuelven todos los contextos de argumentos.
	 * @method arg
	 * @returns {ArgContext|Array<ArgContext>} El contexto de argumento específico o un arreglo
	 *                                          de contextos de argumento si no se especifica el índice.
	 */
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

	/**
	 * Método que acepta un visitante para procesar el contexto de una instrucción en el lenguaje BIES.
	 * 
	 * Este método permite que un visitante personalizado maneje el contexto de la instrucción
	 * actual, facilitando la implementación de patrones de diseño como el Visitor.
	 * 
	 * @param {Visitor} visitor - El visitante que se encargará de procesar este contexto.
	 * @method accept
	 * @returns {*} El resultado del procesamiento del visitante.
	 * 
	 * Si el visitante es una instancia de `biesVisitor`, se llama a su método `visitInst`
	 * pasando este contexto. Si no, se llama a `visitChildren` para procesar todos los hijos
	 * del contexto.
	 */
	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitInst(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}
}


/**
 * Clase que extiende `antlr4.ParserRuleContext` y define el contexto para los mnemónicos en el lenguaje BIES.
 * Esta clase representa un elemento que puede ser un mnemónico, utilizado para identificar 
 * instrucciones o operaciones en el código del lenguaje.
 * 
 * @class MnemonicContext
 * @extends antlr4.ParserRuleContext
 * 
 * @author Manuel Mora Sandi 
 * @author Derek Rojas Mendoza
 * @author Josué Vindas Pérez
 * @author Joseph León Cabezas
 */
class MnemonicContext extends antlr4.ParserRuleContext {

	/**
	 * Constructor de la clase `MnemonicContext`.
	 * 
	 * Este constructor inicializa una nueva instancia de `MnemonicContext`, configurando el analizador, 
	 * el contexto padre y el estado de invocación. Si el contexto padre o el estado de invocación no se 
	 * proporcionan, se establecen en valores predeterminados. Además, se asigna el índice de regla correspondiente 
	 * para la regla de mnemónico en el analizador.
	 * 
	 * @param {antlr4.Parser} parser - El analizador asociado a este contexto.
	 * @param {antlr4.ParserRuleContext} [parent=null] - El contexto padre de este contexto, si existe.
	 * @param {number} [invokingState=-1] - El estado de invocación, que indica en qué punto de la 
	 * gramática se ha llamado a este contexto.
	 */
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

	/**
	 * Método que acepta un visitante para procesar el contexto del mnemónico.
	 * 
	 * Este método permite que un visitante maneje la lógica de procesamiento 
	 * específica para el contexto del mnemónico en la gramática BIES. Si el 
	 * visitante es una instancia de `biesVisitor`, se invoca el método 
	 * `visitMnemonic` pasando este contexto. En caso contrario, se llama 
	 * al método `visitChildren` para procesar todos los hijos del contexto, 
	 * permitiendo que el visitante maneje otros tipos de nodos en el árbol 
	 * de análisis sintáctico.
	 * 
	 * @param {Visitor} visitor - El visitante que se encargará de procesar 
	 * este contexto del mnemónico.
	 * @method accept
	 * @returns {*} El resultado del procesamiento del visitante.
	 */
	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitMnemonic(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}
}


/**
 * Clase que extiende `antlr4.ParserRuleContext` y define el contexto para los argumentos en el lenguaje BIES.
 * Esta clase representa una serie de parámetros que se pueden pasar a una función o instrucción,
 * incluyendo los tipos y valores de dichos argumentos.
 * 
 * @class ArgContext
 * @extends antlr4.ParserRuleContext
 * 
 * @author Manuel Mora Sandi 
 * @author Derek Rojas Mendoza
 * @author Josué Vindas Pérez
 * @author Joseph León Cabezas
 */
class ArgContext extends antlr4.ParserRuleContext {

	/**
	 * Constructor de la clase `ArgContext`.
	 * 
	 * Este constructor inicializa el contexto de los argumentos en el analizador sintáctico. 
	 * Asigna el analizador correspondiente, el contexto padre y el estado de invocación.
	 * 
	 * @param {Parser} parser - El analizador sintáctico asociado a este contexto.
	 * @param {ParserRuleContext} parent - El contexto padre de este contexto, o `null` si no hay.
	 * @param {number} invokingState - El estado de invocación para este contexto. 
	 *                                 Se establece en `-1` si no se proporciona un valor válido.
	 */
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

	/**
	 * Método que devuelve el token de tipo `INT` en el contexto actual.
	 * 
	 * Este método utiliza el analizador para obtener el token que representa
	 * un entero en la entrada del código BIES. Solo se devuelve el primer
	 * token `INT` encontrado, si existe.
	 * @method INT
	 * @returns {Token} El token que representa un entero en el contexto actual.
	 */
	INT() {
	    return this.getToken(biesParser.INT, 0);
	};

	/**
	 * Método que devuelve el token de tipo `FLOAT` en el contexto actual.
	 * 
	 * Este método utiliza el analizador para obtener el token que representa
	 * un número en punto flotante en la entrada del código BIES. Solo se devuelve
	 * el primer token `FLOAT` encontrado, si existe.
	 * @method FLOAT
	 * @returns {Token} El token que representa un número en punto flotante en el contexto actual.
	 */
	FLOAT() {
	    return this.getToken(biesParser.FLOAT, 0);
	};

	/**
	 * Método que devuelve el token de tipo `STR` en el contexto actual.
	 * 
	 * Este método utiliza el analizador para obtener el token que representa
	 * una cadena de caracteres en la entrada del código BIES. Solo se devuelve
	 * el primer token `STR` encontrado, si existe.
	 * @method STR
	 * @returns {Token} El token que representa una cadena de caracteres en el contexto actual.
	 */
	STR() {
	    return this.getToken(biesParser.STR, 0);
	};

	/**
	 * Método que devuelve el token de tipo `FUNCTION` en el contexto actual.
	 * 
	 * Este método utiliza el analizador para obtener el token que representa
	 * la palabra clave `FUNCTION` en la entrada del código BIES. Solo se devuelve
	 * el primer token `FUNCTION` encontrado, si existe.
	 * @method FUNCTION
	 * @returns {Token} El token que representa la palabra clave `FUNCTION` en el contexto actual.
	 */
	FUNCTION() {
	    return this.getToken(biesParser.FUNCTION, 0);
	};

	/**
	 * Método que devuelve el contexto de la lista en el análisis sintáctico.
	 * 
	 * Este método utiliza el analizador para obtener el contexto de tipo 
	 * `ListContext` asociado al contexto actual. Se asume que hay un solo 
	 * contexto de lista presente en este nivel de análisis, por lo que se 
	 * devuelve el primer contexto `ListContext` encontrado.
	 * @method list
	 * @returns {ListContext} El contexto que representa la lista en el análisis sintáctico.
	 */
	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	/**
	 * Método que devuelve el token que representa un identificador en el análisis sintáctico.
	 * 
	 * Este método utiliza el analizador para obtener el token de tipo `ID` 
	 * asociado al contexto actual. Se asume que hay un solo token de identificador 
	 * presente en este nivel de análisis, por lo que se devuelve el primer 
	 * token `ID` encontrado.
	 * @method ID
	 * @returns {Token} El token que representa un identificador en el análisis sintáctico.
	 */
	ID() {
	    return this.getToken(biesParser.ID, 0);
	};

	/**
	 * Método que acepta un visitante para procesar el contexto de los argumentos.
	 * 
	 * @param {Visitor} visitor - El visitante que se encargará de procesar este contexto.
	 * 
	 * @returns {*} El resultado del procesamiento del visitante.
	 * @method accept
	 *
	 */
	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitArg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}
}


/**
 * Clase que extiende `antlr4.ParserRuleContext` y define el contexto para listas en el lenguaje BIES.
 * Esta clase representa un conjunto de elementos que se pueden utilizar en varias construcciones 
 * dentro del lenguaje, como argumentos de funciones o colecciones de instrucciones.
 * 
 * @class ListContext
 * @extends antlr4.ParserRuleContext
 * 
 * @author Manuel Mora Sandi 
 * @author Derek Rojas Mendoza
 * @author Josué Vindas Pérez
 * @author Joseph León Cabezas
 */
class ListContext extends antlr4.ParserRuleContext {

	/**
	 * Constructor de la clase `ListContext`.
	 * 
	 * Este constructor inicializa una instancia del contexto de lista para el analizador sintáctico (parser).
	 * 
	 * @param {Parser} parser - El parser asociado a este contexto.
	 * @param {ParserRuleContext} parent - El contexto padre de este contexto. 
	 * Si no se proporciona, se establece como `null`.
	 * @param {number} invokingState - El estado de invocación de este contexto. 
	 * Si no se proporciona o es `null`, se establece como -1.
	 */
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

	/**
	 * Método para obtener un contexto de elemento en función de un índice.
	 * 
	 * Este método permite recuperar uno o varios contextos de elementos
	 * desde la lista de contextos de `ElementContext` en el parser.
	 * 
	 * @param {number|null} i - El índice del contexto de elemento que se desea recuperar.
	 * Si no se proporciona o es `null`, se devolverán todos los contextos de elementos.
	 * 
	 * @returns {ElementContext|ElementContext[]} Un contexto específico de `ElementContext`
	 * si se proporciona un índice, o una lista de todos los contextos de `ElementContext`
	 * si el índice es `null`.
	 * @method element
	 */
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

	/**
	 * Método para obtener tokens de espacios en blanco (WS) en función de un índice.
	 * 
	 * Este método permite recuperar uno o varios tokens de espacios en blanco 
	 * (WS) desde la entrada del parser. Es útil para manejar y analizar 
	 * correctamente el formato del código en el lenguaje BIES.
	 * 
	 * @param {number|null} i - El índice del token WS que se desea recuperar.
	 * Si no se proporciona o es `null`, se devolverán todos los tokens WS 
	 * encontrados en la entrada.
	 * 
	 * @returns {Token|Token[]} Un token específico de `WS` si se proporciona 
	 * un índice, o una lista de todos los tokens `WS` si el índice es `null`.
	 * @method WS
	 */
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

	/**
	 * Método para obtener tokens de coma (COMMA) en función de un índice.
	 * 
	 * Este método permite recuperar uno o varios tokens de coma (COMMA) 
	 * desde la entrada del parser. Es útil para analizar correctamente la 
	 * sintaxis en el lenguaje BIES, especialmente en listas y argumentos 
	 * donde las comas son utilizadas como separadores.
	 * 
	 * @param {number|null} i - El índice del token COMMA que se desea recuperar.
	 * Si no se proporciona o es `null`, se devolverán todos los tokens COMMA 
	 * encontrados en la entrada.
	 * 
	 * @returns {Token|Token[]} Un token específico de `COMMA` si se proporciona 
	 * un índice, o una lista de todos los tokens `COMMA` si el índice es `null`.
	 * @method COMMA
	 */
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

	/**
	 * Método que acepta un visitante para procesar el contexto de la lista.
	 * 
	 * Este método permite que un visitante interactúe con el contexto 
	 * de la lista en el árbol de análisis sintáctico. Si el visitante 
	 * es una instancia de `biesVisitor`, se llama a su método `visitList` 
	 * pasando este contexto. De lo contrario, se llama a `visitChildren` 
	 * para procesar todos los hijos del contexto.
	 * 
	 * @param {Visitor} visitor - El visitante que se encargará de procesar 
	 * este contexto.
	 * 
	 * @returns {*} El resultado del procesamiento del visitante, que puede 
	 * ser el resultado de `visitList` o el resultado de procesar los 
	 * hijos del contexto.
	 * @method accept
	 */
	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}
}


/**
 * Clase que extiende `antlr4.ParserRuleContext` y define el contexto para los elementos en el lenguaje BIES.
 * Esta clase representa una unidad básica dentro de la gramática, que puede ser utilizada en diversas 
 * estructuras de código, como expresiones o instrucciones.
 * 
 * @class ElementContext
 * @extends antlr4.ParserRuleContext
 * 
 * @author Manuel Mora Sandi 
 * @author Derek Rojas Mendoza
 * @author Josué Vindas Pérez
 * @author Joseph León Cabezas
 */
class ElementContext extends antlr4.ParserRuleContext {

	/**
	 * Constructor de la clase `ElementContext`.
	 * 
	 * Este constructor inicializa un nuevo contexto para los elementos en la gramática BIES. 
	 * Configura el analizador y el estado de invocación, así como el índice de la regla correspondiente.
	 * 
	 * @param {Parser} parser - El analizador que utiliza este contexto.
	 * @param {ParserRuleContext} parent - El contexto del padre de este contexto (por defecto es `null`).
	 * @param {number} invokingState - El estado de invocación (por defecto es `-1` si no se proporciona).
	 */
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

	/**
	 * Método que obtiene el token correspondiente a un entero en la gramática BIES.
	 * 
	 * Este método se utiliza para acceder al token que representa un valor entero. 
	 * Retorna el primer token encontrado en la entrada que coincide con la regla 
	 * de gramática para enteros (INT).
	 * 
	 * @returns {Token} El token que representa un valor entero.
	 * @method INT
	 */
	INT() {
	    return this.getToken(biesParser.INT, 0);
	};

	/**
	 * Método que obtiene el token correspondiente a un número de punto flotante en la gramática BIES.
	 * 
	 * Este método se utiliza para acceder al token que representa un valor de punto flotante. 
	 * Retorna el primer token encontrado en la entrada que coincide con la regla 
	 * de gramática para números de punto flotante (FLOAT).
	 * 
	 * @returns {Token} El token que representa un valor de punto flotante.
	 * @method FLOAT	
	 */
	FLOAT() {
	    return this.getToken(biesParser.FLOAT, 0);
	};

	/**
	 * Método que obtiene el token correspondiente a una cadena de texto en la gramática BIES.
	 * 
	 * Este método se utiliza para acceder al token que representa un valor de cadena. 
	 * Retorna el primer token encontrado en la entrada que coincide con la regla 
	 * de gramática para cadenas de texto (STR).
	 * 
	 * @returns {Token} El token que representa un valor de cadena de texto.
	 * @method STR
	 */
	STR() {
	    return this.getToken(biesParser.STR, 0);
	};

	/**
	 * Método que acepta un visitante para procesar el contexto de un elemento en la gramática BIES.
	 * 
	 * @param {Visitor} visitor - El visitante que se encargará de procesar este contexto.
	 * 
	 * @returns {*} El resultado del procesamiento del visitante.
	 * 
	 * Si el visitante es una instancia de `biesVisitor`, se llama a su método `visitElement` 
	 * pasando este contexto. Si no, se llama a `visitChildren` para procesar todos los hijos 
	 * del contexto.
	 * @method accept	
	 */
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
