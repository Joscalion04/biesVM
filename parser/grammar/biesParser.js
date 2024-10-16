// Generated from grammar/bies.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesVisitor from './biesVisitor.js';

const serializedATN = [4,1,52,52,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,1,0,4,0,15,8,0,11,0,12,0,16,1,1,1,1,1,1,3,1,22,8,1,1,1,1,1,3,
1,26,8,1,1,1,4,1,29,8,1,11,1,12,1,30,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,5,3,
41,8,3,10,3,12,3,44,9,3,3,3,46,8,3,1,4,1,4,1,5,1,5,1,5,0,0,6,0,2,4,6,8,10,
0,2,1,0,3,45,1,0,46,48,52,0,14,1,0,0,0,2,18,1,0,0,0,4,34,1,0,0,0,6,37,1,
0,0,0,8,47,1,0,0,0,10,49,1,0,0,0,12,15,3,2,1,0,13,15,3,6,3,0,14,12,1,0,0,
0,14,13,1,0,0,0,15,16,1,0,0,0,16,14,1,0,0,0,16,17,1,0,0,0,17,1,1,0,0,0,18,
19,5,49,0,0,19,21,5,48,0,0,20,22,3,4,2,0,21,20,1,0,0,0,21,22,1,0,0,0,22,
25,1,0,0,0,23,24,5,1,0,0,24,26,5,48,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,28,
1,0,0,0,27,29,3,6,3,0,28,27,1,0,0,0,29,30,1,0,0,0,30,28,1,0,0,0,30,31,1,
0,0,0,31,32,1,0,0,0,32,33,5,50,0,0,33,3,1,0,0,0,34,35,5,2,0,0,35,36,5,46,
0,0,36,5,1,0,0,0,37,45,3,8,4,0,38,42,3,10,5,0,39,41,3,10,5,0,40,39,1,0,0,
0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,46,1,0,0,0,44,42,1,0,0,0,
45,38,1,0,0,0,45,46,1,0,0,0,46,7,1,0,0,0,47,48,7,0,0,0,48,9,1,0,0,0,49,50,
7,1,0,0,50,11,1,0,0,0,7,14,16,21,25,30,42,45];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

/**
* Clase que se encarga de realizar el parseo de la gramática de BIES
* utilizando la librería ANTLR4. Esta clase extiende de `antlr4.Parser`.
*
* @class biesParser
* @extends antlr4.parser
*
* @author Manuel Mora Sandi 
* @author Derek Rojas Mendoza
* @author Josué Vindas Pérez
* @author Joseph León Cabezas
*/
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
                            "'PRN'", "'STK'", "'SRK'", "'INP'", null, null, 
                            null, "'$FUN'", "'$END'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "INT", 
                             "STR", "FUNCTION", "FUN", "END", "WS", "COMMENT" ];
    static ruleNames = [ "start", "funDef", "argsDecl", "inst", "mnemonic", 
                         "arg" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = biesParser.ruleNames;
        this.literalNames = biesParser.literalNames;
        this.symbolicNames = biesParser.symbolicNames;
    }


	/**
	* Método que representa el inicio de la regla de análisis para el contexto `start`.
	* Este método se encarga de procesar las definiciones de funciones y las instrucciones
	* dentro del contexto del análisis sintáctico. Se basa en la gramática definida por ANTLR.
	*
	* @method start
	* @returns {StartContext} El contexto `StartContext` que contiene la información sobre
	*                         las funciones y las instrucciones procesadas.
	* @throws {antlr4.error.NoViableAltException} Lanza una excepción si no se encuentra
	*                                            ninguna alternativa viable durante el análisis.
	*/
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
	            case 49:
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
	            case 43:
	            case 44:
	            case 45:
	                this.state = 13;
	                this.inst();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 16; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967288) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 147455) !== 0));
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
	* Define una función en el análisis sintáctico de BIES.
	* Este método maneja la definición de una función, incluyendo su nombre, 
	* parámetros opcionales y las instrucciones que la componen. 
	* Además, asegura que la sintaxis de la función siga las reglas definidas en la gramática.
	* 
	* @method funDef
	* @returns {FunDefContext} El contexto de la definición de la función.
	* 
	* @throws {antlr4.error.RecognitionException} Lanza una excepción si se encuentra un error de 
	* reconocimiento durante el análisis sintáctico.
	*/
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
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967288) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 16383) !== 0));
	        this.state = 32;
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
	* Define el análisis de una declaración de argumentos en la gramática de BIES.
	* Este método maneja el reconocimiento de una estructura que comienza con
	* un símbolo específico seguido de un tipo de dato entero.
	* Asegura que la sintaxis de la declaración de argumentos siga las reglas definidas en la gramática.
 	* 
	* @method argsDecl
	* @returns {ArgsDeclContext} El contexto de la declaración de argumentos analizada.
	* 
	* @throws {antlr4.error.RecognitionException} Lanza una excepción si se encuentra un error de 
	* reconocimiento durante el análisis sintáctico.
    */
	argsDecl() {
	    let localctx = new ArgsDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, biesParser.RULE_argsDecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(biesParser.T__1);
	        this.state = 35;
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

	/**
	* Define el análisis de una instrucción en la gramática de BIES.
	* Este método maneja el reconocimiento de una instrucción, comenzando con 
	* un mnemotécnico seguido de uno o más argumentos opcionales. 
	* Asegura que la sintaxis de la instrucción siga las reglas definidas en la gramática.
	* 
	* @method inst
	* @returns {InstContext} El contexto de la instrucción analizada.
	* 
	* @throws {antlr4.error.RecognitionException} Lanza una excepción si se encuentra un error de 
	* reconocimiento durante el análisis sintáctico.
	*/
	inst() {
	    let localctx = new InstContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, biesParser.RULE_inst);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.mnemonic();
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 46)) & ~0x1f) === 0 && ((1 << (_la - 46)) & 7) !== 0)) {
	            this.state = 38;
	            this.arg();
	            this.state = 42;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 46)) & ~0x1f) === 0 && ((1 << (_la - 46)) & 7) !== 0)) {
	                this.state = 39;
	                this.arg();
	                this.state = 44;
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
	* Analiza y recupera un mnemotécnico en el análisis sintáctico de BIES.
	* Este método verifica si el siguiente token en la entrada coincide con
	* uno de los mnemotécnicos permitidos según la gramática.
	* Si el token coincide, se consume; de lo contrario, se gestiona el error 
 	* de manera apropiada.
	*
	* @method mnemonic
	* @returns {MnemonicContext} El contexto del mnemotécnico reconocido.
	* 
 	* @throws {antlr4.error.RecognitionException} Lanza una excepción si se encuentra un error de 
	* reconocimiento durante el análisis sintáctico.
	*/
	mnemonic() {
	    let localctx = new MnemonicContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, biesParser.RULE_mnemonic);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967288) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 16383) !== 0))) {
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
	* Analiza y recupera un argumento en el análisis sintáctico de BIES.
	* Este método verifica si el siguiente token en la entrada coincide 
	* con uno de los argumentos permitidos según la gramática.
	* Si el token coincide, se consume; de lo contrario, se gestiona el 
	* error de manera apropiada.
	*
	* @method arg
	* @returns {ArgContext} El contexto del argumento reconocido.
	* 
	* @throws {antlr4.error.RecognitionException} Lanza una excepción si se encuentra un error de 
	* reconocimiento durante el análisis sintáctico.
	*/
	arg() {
	    let localctx = new ArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, biesParser.RULE_arg);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
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
biesParser.STR = 47;
biesParser.FUNCTION = 48;
biesParser.FUN = 49;
biesParser.END = 50;
biesParser.WS = 51;
biesParser.COMMENT = 52;

biesParser.RULE_start = 0;
biesParser.RULE_funDef = 1;
biesParser.RULE_argsDecl = 2;
biesParser.RULE_inst = 3;
biesParser.RULE_mnemonic = 4;
biesParser.RULE_arg = 5;

/**
* Clase que representa el contexto inicial en el análisis sintáctico de la gramática de BIES.
* Esta clase extiende de `antlr4.ParserRuleContext` y se utiliza para almacenar la información 
* relevante durante la ejecución de la regla de inicio en el parser.
* 
* El contexto de inicio puede incluir detalles sobre las instrucciones y elementos 
* que componen la estructura principal del programa BIES, así como métodos para 
* acceder a estos elementos.
* 
* @class StartContext
* @extends {antlr4.ParserRuleContext}
* 
* @author Manuel Mora Sandi
* @author Derek Rojas Mendoza
* @author Josué Vindas Pérez
* @author Joseph León Cabezas
*/
class StartContext extends antlr4.ParserRuleContext {

	/**
	* Crea una instancia del contexto de inicio para el análisis sintáctico en la gramática de BIES.
	* Este constructor inicializa el contexto, estableciendo el parser, el contexto padre 
	* y el estado de invocación. Se utiliza en la regla de inicio del parser para almacenar 
	* información relevante sobre el análisis sintáctico en esta etapa.
	* 
	* @constructor
	* @param {Object} parser - El parser asociado con este contexto, responsable del análisis sintáctico.
	* @param {StartContext|null} [parent=null] - El contexto padre, o null si no hay un contexto padre.
	* @param {number} [invokingState=-1] - El estado de invocación, que indica el estado actual del parser.
	* 
	* @throws {TypeError} Lanza un error si el tipo de `parser` no es válido.
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
	* Obtiene el contexto de definición de funciones desde el árbol de análisis sintáctico.
	* Este método permite acceder a todos los contextos de definición de funciones presentes 
	* en la entrada analizada. Si se proporciona un índice, devuelve el contexto correspondiente 
	* a ese índice. Si no se proporciona un índice, se devuelven todos los contextos de 
	* definición de funciones.
	* 
	* @method funDef
	* @param {number|null} [i=null] - El índice del contexto de definición de funciones a obtener, 
	*                                  o null para obtener todos los contextos.
	* @returns {Array<FunDefContext>|FunDefContext} Un array de contextos de definición de funciones 
	*                                                si se proporciona `null`, o el contexto específico 
	*                                                si se proporciona un índice.
	* 
	* @throws {TypeError} Lanza un error si el índice no es un número válido.
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
	* Obtiene el contexto de las instrucciones desde el árbol de análisis sintáctico.
	* Este método permite acceder a todos los contextos de instrucciones presentes 
	* en la entrada analizada. Si se proporciona un índice, devuelve el contexto correspondiente 
	* a ese índice. Si no se proporciona un índice, se devuelven todos los contextos de 
	* instrucciones.
	* 
	* @method inst
	* @param {number|null} [i=null] - El índice del contexto de instrucción a obtener, 
	*                                  o null para obtener todos los contextos.
	* @returns {Array<InstContext>|InstContext} Un array de contextos de instrucciones 
	*                                            si se proporciona `null`, o el contexto específico 
	*                                            si se proporciona un índice.
	* 
    * @throws {TypeError} Lanza un error si el índice no es un número válido.
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
	* Permite que un visitante procese el contexto de inicio en el árbol de análisis sintáctico.
	* Este método acepta un objeto visitante y, si el visitante es una instancia de 
	* `biesVisitor`, invoca su método `visitStart` pasándole el contexto actual. 
	* Si no es un `biesVisitor`, llama al método `visitChildren` para procesar los 
	* hijos del contexto actual.
	* 
	* @method accept
	* @param {Object} visitor - El objeto visitante que realiza el procesamiento del 
	*                            árbol de análisis sintáctico.
	* 
	* @returns {any} El resultado del procesamiento por parte del visitante.
	* 
	* @throws {TypeError} Lanza un error si el visitante no es un objeto válido.
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
* Clase que representa el contexto de definición de una función en el árbol de análisis sintáctico.
* Esta clase extiende `antlr4.ParserRuleContext` y encapsula la información relevante 
* sobre la definición de la función, incluyendo su nombre, parámetros y el cuerpo de la función.
* 
* @class FunDefContext
* @extends antlr4.ParserRuleContext
* 
* @param {Object} parser - La instancia del parser que genera este contexto.
* @param {ParserRuleContext} parent - El contexto padre en el árbol de análisis.
* @param {number} invokingState - El estado de invocación de la regla de análisis.
*/
class FunDefContext extends antlr4.ParserRuleContext {

	/**
	* Crea una instancia del contexto de definición de una función en el árbol de análisis sintáctico.
	* Este constructor inicializa el parser, el contexto padre y el estado de invocación de la regla de análisis.
	* 
	* @constructor
	* @param {Object} parser - La instancia del parser que genera este contexto.
	* @param {ParserRuleContext} [parent=null] - El contexto padre en el árbol de análisis. Por defecto es null.
	* @param {number} [invokingState=-1] - El estado de invocación de la regla de análisis. Por defecto es -1.
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
	* Obtiene el token correspondiente a la palabra clave 'FUN' en la gramática BIES.
	* Este método permite acceder al token de la función que se está definiendo,
	* facilitando su uso en el análisis sintáctico.
	* 
	* @method FUN
	* @returns {Token|null} El token de la palabra clave 'FUN' si está presente; de lo contrario, null.
	*/
	FUN() {
	    return this.getToken(biesParser.FUN, 0);
	};

	/**
	* Obtiene el token correspondiente a la palabra clave 'FUNCTION' en la gramática BIES.
	* Este método permite acceder a todos los tokens de la función que se están definiendo,
	* o a un token específico si se proporciona un índice.
	* 
	* @method FUNCTION
	* @param {number|null} [i=null] - El índice del token 'FUNCTION' que se desea obtener. 
	* Si no se proporciona, se devolverán todos los tokens de 'FUNCTION'.
	* @returns {Token[]|Token|null} Un arreglo de tokens de 'FUNCTION' si no se proporciona un índice; 
	* un token específico si se indica un índice; o null si no hay tokens disponibles.
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
	* Obtiene el token correspondiente a la palabra clave 'END' en la gramática BIES.
	* Este método permite acceder al token que indica el final de una estructura 
	* o bloque en el análisis sintáctico.
	* 
	* @method END
	* @returns {Token} El token de 'END' correspondiente en la gramática BIES.
	*/
	END() {
	    return this.getToken(biesParser.END, 0);
	};

	/**
	* Obtiene el contexto de declaración de argumentos en la gramática BIES.
	* Este método permite acceder a la parte del árbol de análisis sintáctico 
	* que corresponde a la declaración de argumentos de una función, asegurando 
	* que se sigan las reglas de la gramática.
	* 
	* @method argsDecl
	* @returns {ArgsDeclContext} El contexto de declaración de argumentos.
	*/
	argsDecl() {
	    return this.getTypedRuleContext(ArgsDeclContext,0);
	};

	/**
	* Obtiene el contexto de instrucciones en la gramática BIES.
	* Este método permite acceder a la parte del árbol de análisis sintáctico 
	* que corresponde a las instrucciones dentro de una función o bloque de código.
	* Puede devolver una lista de contextos de instrucción o un contexto específico 
	* según el índice proporcionado.
	* 
	* @method inst
	* @param {number|null} [i=null] - El índice de la instrucción a obtener. 
	* Si no se proporciona, se devolverán todas las instancias de `InstContext`.
	* @returns {InstContext|InstContext[]} El contexto de la instrucción o una lista 
	* de contextos de instrucción si no se proporciona un índice.
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
	* Permite que un visitante visite el contexto de definición de función.
	* Este método es parte del patrón Visitor, que facilita la operación sobre 
	* los nodos del árbol de análisis sintáctico. Si el visitante es una instancia
	* de `biesVisitor`, se llama al método específico para manejar la 
	* definición de función; de lo contrario, se llama a `visitChildren` 
	* para visitar los nodos hijos.
	* 
	* @method accept
	* @param {Object} visitor - El visitante que realiza la operación sobre el 
	* contexto de definición de función.
	* @returns {Object} El resultado de la visita, que puede ser el resultado de 
	* `visitFunDef` o el resultado de `visitChildren`.
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
* Clase que representa el contexto de la declaración de argumentos en el análisis sintáctico de la gramática de BIES.
* Esta clase extiende de `antlr4.ParserRuleContext` y se utiliza para almacenar la información 
* relevante durante la ejecución de la regla de declaración de argumentos en el parser.
* 
* El contexto de la declaración de argumentos puede incluir detalles sobre el tipo y número de 
* argumentos que una función puede aceptar, proporcionando métodos para acceder a esta información.
* 
* @class ArgsDeclContext
* @extends {antlr4.ParserRuleContext}
* 
* @author Manuel Mora Sandi
* @author Derek Rojas Mendoza
* @author Josué Vindas Pérez
* @author Joseph León Cabezas
*/
class ArgsDeclContext extends antlr4.ParserRuleContext {

	/**
	* Crea una instancia de `ArgsDeclContext`.
	* Este constructor inicializa el contexto de la declaración de argumentos
	* en el análisis sintáctico de la gramática de BIES.
	* 
	* @constructor
	* @param {antlr4.Parser} parser - El parser que está utilizando esta regla.
	* @param {antlr4.ParserRuleContext} parent - El contexto del padre en la jerarquía de análisis sintáctico.
	* @param {number} invokingState - El estado de invocación de la regla.
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
        this.ruleIndex = biesParser.RULE_argsDecl;
    }

	/**
	* Obtiene el token de tipo `INT` de la entrada del parser.
	* Este método se utiliza para acceder al token que representa
	* un número entero en el análisis sintáctico de la gramática de BIES.
	* 
	* @returns {antlr4.Token} El token de tipo `INT`.
	*/
	INT() {
	    return this.getToken(biesParser.INT, 0);
	};

	/**
	* Permite que un visitante recorra el contexto de declaración de argumentos.
	* Este método es parte del patrón Visitor y se utiliza para realizar
	* operaciones específicas en el contexto de la declaración de argumentos
	* en el análisis sintáctico de la gramática de BIES.
	* 
	* @param {biesVisitor} visitor - El visitante que realiza la operación.
	* @returns {any} El resultado de la operación del visitante.
	*/
	accept(visitor) {
	    if ( visitor instanceof biesVisitor ) {
	        return visitor.visitArgsDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}
}


/**
* Clase que representa el contexto de una instrucción en el análisis sintáctico de la gramática de BIES.
* Esta clase extiende de `antlr4.ParserRuleContext` y se utiliza para almacenar la información 
* relevante durante la ejecución de la regla de instrucción en el parser.
* 
* El contexto de la instrucción puede incluir detalles sobre el mnemónico y los argumentos 
* que componen la instrucción, proporcionando métodos para acceder a esta información.
* 
* @class InstContext
* @extends {antlr4.ParserRuleContext}
* 
* @author Manuel Mora Sandi
* @author Derek Rojas Mendoza
* @author Josué Vindas Pérez
* @author Joseph León Cabezas
*/
class InstContext extends antlr4.ParserRuleContext {

	/**
	* Crea una instancia del contexto de instrucción en el análisis sintáctico de la gramática de BIES.
	* Este constructor inicializa el contexto con el parser asociado, el contexto padre y el estado de invocación.
	* 
	* @param {antlr4.Parser} parser - El parser que está usando este contexto.
	* @param {antlr4.ParserRuleContext|null} parent - El contexto padre, o null si no hay uno.
	* @param {number} invokingState - El estado de invocación de este contexto; por defecto es -1 si no se proporciona.
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
	* Obtiene el contexto de la mnemotécnica en la instrucción actual del análisis sintáctico de la gramática de BIES.
	* Este método proporciona acceso al contexto que representa la mnemotécnica utilizada en la instrucción,
	* permitiendo la recuperación de la información asociada a ella.
	* 
	* @returns {MnemonicContext} El contexto de la mnemotécnica.
	*/
	mnemonic() {
	    return this.getTypedRuleContext(MnemonicContext,0);
	};

	/**
	* Obtiene el contexto de los argumentos en la instrucción actual del análisis sintáctico de la gramática de BIES.
	* Este método permite acceder a un argumento específico si se proporciona un índice, o a todos los argumentos
	* asociados a la instrucción si no se especifica ningún índice.
	* 
	* @param {number} [i=null] - El índice del argumento a recuperar. Si no se proporciona, se obtienen todos los argumentos.
	* @returns {ArgContext|ArgContext[]} El contexto del argumento específico o una lista de contextos de argumentos.
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
	* Permite que un visitante interactúe con el contexto de la instrucción durante el análisis sintáctico de la gramática de BIES.
	* Este método determina si el visitante proporcionado es una instancia de `biesVisitor` y, si es así,
	* invoca el método correspondiente para procesar el contexto de la instrucción. En caso contrario, llama al método
	* para procesar los hijos del contexto.
	* 
	* @param {Visitor} visitor - El visitante que interactúa con el contexto de la instrucción.
	* @returns {*} El resultado de la visita, que puede variar según la implementación del visitante.
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
* Clase que representa el contexto de un mnemotécnico en el análisis sintáctico de la gramática de BIES.
* Esta clase extiende de `antlr4.ParserRuleContext` y se utiliza para almacenar la información 
* relevante durante la ejecución de la regla que define un mnemotécnico en el parser.
* 
* El contexto de un mnemotécnico puede incluir detalles sobre la instrucción que se está definiendo,
* proporcionando métodos para acceder a esta información y a los argumentos asociados.
* 
* @class MnemonicContext
* @extends {antlr4.ParserRuleContext}
* 
* @author Manuel Mora Sandi
* @author Derek Rojas Mendoza
* @author Josué Vindas Pérez
* @author Joseph León Cabezas
*/
class MnemonicContext extends antlr4.ParserRuleContext {

	/**
	* Crea una instancia de `MnemonicContext`.
	* Esta clase extiende de `antlr4.ParserRuleContext` y se utiliza para almacenar la información 
	* relevante durante la ejecución de la regla que define un mnemotécnico en el parser.
	* 
	* @param {antlr4.Parser} parser - El parser asociado a este contexto.
	* @param {antlr4.ParserRuleContext} parent - El contexto padre, si existe.
	* @param {number} invokingState - El estado de invocación del contexto.
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
	* Permite que un visitante procese este contexto de mnemotécnico.
	* Si el visitante es una instancia de `biesVisitor`, se invoca el método 
	* `visitMnemonic` pasándole este contexto. De lo contrario, se llama 
	* al método `visitChildren` para procesar los nodos hijos de este contexto.
	* 
	* @param {biesVisitor} visitor - El visitante que procesa este contexto.
	* @returns {any} El resultado del procesamiento del visitante.
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
* Clase que representa el contexto de un argumento en el análisis sintáctico de la gramática de BIES.
* Esta clase extiende de `antlr4.ParserRuleContext` y se utiliza para almacenar la información 
* relevante durante la ejecución de la regla de declaración de argumentos en el parser.
* 
* El contexto de un argumento puede incluir detalles sobre el tipo y valor del argumento 
* que se está procesando, así como métodos para acceder a esta información.
* 
* @class ArgContext
* @extends {antlr4.ParserRuleContext}
* 
* @author Manuel Mora Sandi
* @author Derek Rojas Mendoza
* @author Josué Vindas Pérez
* @author Joseph León Cabezas 
*/
class ArgContext extends antlr4.ParserRuleContext {

	/**
	* Crea una instancia de `ArgContext`.
	* Este constructor inicializa el contexto del argumento en el análisis sintáctico de la gramática de BIES.
	* 
	* @param {antlr4.Parser} parser - El parser que está procesando la entrada.
	* @param {antlr4.ParserRuleContext} [parent=null] - El contexto padre en la jerarquía de análisis.
	* @param {number} [invokingState=-1] - El estado de invocación del parser. 
	* Si no se proporciona, se establece en -1.
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
	 * Obtiene el token que representa un entero en la declaración de argumentos.
	 * Este método se utiliza para acceder al token de tipo `INT` en el contexto actual del análisis sintáctico,
	 * permitiendo que otras partes del código interactúen con el valor del entero declarado.
	 * 
	 * @returns {antlr4.Token} El token que representa un entero.
	 */
	INT() {
	    return this.getToken(biesParser.INT, 0);
	};

	/**
	* Obtiene el token que representa una cadena de caracteres en la declaración de argumentos.
	* Este método se utiliza para acceder al token de tipo `STR` en el contexto actual del análisis sintáctico,
	* permitiendo que otras partes del código interactúen con el valor de la cadena declarada.
	* 
	* @returns {antlr4.Token} El token que representa una cadena de caracteres.
	*/
	STR() {
	    return this.getToken(biesParser.STR, 0);
	};

	/**
	* Obtiene el token que representa la palabra clave `FUNCTION` en la declaración de funciones.
	* Este método se utiliza para acceder al token de tipo `FUNCTION` en el contexto actual del análisis sintáctico,
	* permitiendo que otras partes del código interactúen con la declaración de funciones en la gramática BIES.
	* 
	* @returns {antlr4.Token} El token que representa la palabra clave `FUNCTION`.
	*/
	FUNCTION() {
	    return this.getToken(biesParser.FUNCTION, 0);
	};

	/**
	* Acepta un visitante en el contexto del argumento.
	* Este método permite que un visitante realice operaciones específicas en el contexto del argumento 
	* durante el análisis sintáctico, facilitando el patrón de diseño Visitor.
	* 
	* @param {Object} visitor - El visitante que se aplicará al contexto del argumento.
	* @returns {Object} El resultado de la visita al contexto del argumento.
	*/
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
