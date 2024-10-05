// Generated from grammar/bies.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesVisitor from './biesVisitor.js';

/**
* Representa un parser para la gramática BIES.
* 
* @author Manuel Mora Sandi 
* @author Derek Rojas Mendoza
* @author Josué Vindas Pérez
* @author Joseph León Cabezas
*/

/**
* La representación serializada del ATN (Augmented Transition Network) de la gramática BIES.
* @type {number[]}
* @constant
*/
const serializedATN = [4,1,19,28,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,4,0,
10,8,0,11,0,12,0,11,1,1,1,1,1,1,5,1,17,8,1,10,1,12,1,20,9,1,3,1,22,8,1,1,
2,1,2,1,3,1,3,1,3,0,0,4,0,2,4,6,0,2,1,0,1,15,1,0,16,18,26,0,9,1,0,0,0,2,
13,1,0,0,0,4,23,1,0,0,0,6,25,1,0,0,0,8,10,3,2,1,0,9,8,1,0,0,0,10,11,1,0,
0,0,11,9,1,0,0,0,11,12,1,0,0,0,12,1,1,0,0,0,13,21,3,4,2,0,14,18,3,6,3,0,
15,17,3,6,3,0,16,15,1,0,0,0,17,20,1,0,0,0,18,16,1,0,0,0,18,19,1,0,0,0,19,
22,1,0,0,0,20,18,1,0,0,0,21,14,1,0,0,0,21,22,1,0,0,0,22,3,1,0,0,0,23,24,
7,0,0,0,24,5,1,0,0,0,25,26,7,1,0,0,26,7,1,0,0,0,3,11,18,21];

/**
* Deserializa el ATN (Augmented Transition Network) utilizando el serializado
* proporcionado en `serializedATN`.
* 
* @type {antlr4.atn.ATN} 
* @constant
*/
const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

/**
* Crea un arreglo de objetos DFA a partir de los estados de decisión 
* del ATN. Cada objeto DFA se inicializa con el estado de decisión
* correspondiente y su índice en el arreglo.
*
* @type {antlr4.dfa.DFA[]} 
* @constant
*/
const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

/**
* Crea una instancia de `PredictionContextCache` de ANTLR.
* Este objeto se utiliza para almacenar y reutilizar contextos de
* predicción, optimizando así la eficiencia durante la 
* ejecución de análisis sintáctico.
*
* @type {antlr4.atn.PredictionContextCache} 
* @constant
*/
const sharedContextCache = new antlr4.atn.PredictionContextCache();

/**
* @class que representa el analizador sintáctico para el lenguaje BIES.
* Extiende la clase `antlr4.Parser`.
*/

export default class biesParser extends antlr4.Parser {
	
	/** Nombre del archivo de gramática. */
    static grammarFileName = "bies.g4";

	/** Nombres literales de los tokens. */
    static literalNames = [ null, "'LDV'", "'POP'", "'BLD'", "'ADD'", "'MUL'", 
                            "'DIV'", "'SUB'", "'PRN'", "'BST'", "'HLT'", 
                            "'LDF'", "'APP'", "'$FUN'", "'RET'", "'TOL'" ];
	
	/** Nombres simbólicos de los tokens. */
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "INT", "STR", "FUNCTION", "WS" ];
	
	/** Nombres de las reglas de la gramática. */
    static ruleNames = [ "start", "inst", "mnemonic", "arg" ];


	/**
	* Crea una instancia del analizador BIES.
	* @constructor
	* @param {TokenStream} input - Flujo de tokens que se va a analizar.
	* 
	*/
    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = biesParser.ruleNames;
        this.literalNames = biesParser.literalNames;
        this.symbolicNames = biesParser.symbolicNames;
    }


	/**
    * Método que analiza la regla de gramática `start`.
    * @returns {StartContext} - Retorna el contexto de inicio.
    */
	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, biesParser.RULE_start);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 9; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 8;
	            this.inst();
	            this.state = 11; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 65534) !== 0));
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
    * Método que analiza la regla de gramática `inst`.
    * @returns {InstContext} - Retorna el contexto de la instrucción.
    */
	inst() {
	    let localctx = new InstContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, biesParser.RULE_inst);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13;
	        this.mnemonic();
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 458752) !== 0)) {
	            this.state = 14;
	            this.arg();
	            this.state = 18;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 458752) !== 0)) {
	                this.state = 15;
	                this.arg();
	                this.state = 20;
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
    * Método que analiza la regla de gramática `mnemonic`.
    * @returns {MnemonicContext} - Retorna el contexto del mnemónico.
    */
	mnemonic() {
	    let localctx = new MnemonicContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, biesParser.RULE_mnemonic);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 65534) !== 0))) {
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
    * @methods
    * @returns {ArgContext} - Retorna el contexto del argumento.
    */
	arg() {
	    let localctx = new ArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, biesParser.RULE_arg);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 458752) !== 0))) {
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
biesParser.INT = 16;
biesParser.STR = 17;
biesParser.FUNCTION = 18;
biesParser.WS = 19;

biesParser.RULE_start = 0;
biesParser.RULE_inst = 1;
biesParser.RULE_mnemonic = 2;
biesParser.RULE_arg = 3;

/**
 * @class que representa el contexto de inicio del parser en la gramática BIES.
 * Hereda de antlr4.ParserRuleContext.
 */
class StartContext extends antlr4.ParserRuleContext {

	/**
    * @constructor
    * 
    * @param {Parser} parser - El parser que invoca este contexto.
    * @param {ParserRuleContext} [parent=null] - El contexto padre, si existe.
    * @param {number} [invokingState=-1] - El estado de invocación de la regla.
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
    * Recupera una o todas las instancias de InstContext hijas.
    * 
    * @param {number} [i] - El índice de la instancia de InstContext a recuperar.
    * @returns {InstContext | InstContext[]} - La instancia específica de InstContext o todas las instancias.
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
    * Acepta un visitante y delega la visita al método correspondiente.
    * 
    * @param {Visitor} visitor - El visitante que se acepta.
    * @returns {*} - El resultado de la visita del visitante.
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
* Clase que representa el contexto de una instrucción en el parser de la gramática BIES.
* Hereda de antlr4.ParserRuleContext.
*/
class InstContext extends antlr4.ParserRuleContext {

	/**
    * @constructor
    * 
    * @param {Parser} parser - El parser que invoca este contexto.
    * @param {ParserRuleContext} [parent=null] - El contexto padre, si existe.
    * @param {number} [invokingState=-1] - El estado de invocación de la regla.
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
    * Recupera la instancia de MnemonicContext asociada a esta instrucción.
    * 
    * @returns {MnemonicContext} - La instancia de MnemonicContext.
    */
	mnemonic() {
	    return this.getTypedRuleContext(MnemonicContext,0);
	};

	/**
    * Recupera una o todas las instancias de ArgContext hijas.
    * 
    * @param {number} [i] - El índice de la instancia de ArgContext a recuperar.
    * @returns {ArgContext | ArgContext[]} - La instancia específica de ArgContext o todas las instancias.
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
    * Acepta un visitante y delega la visita al método correspondiente.
    * 
    * @param {Visitor} visitor - El visitante que se acepta.
    * @returns {*} - El resultado de la visita del visitante.
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
* Clase que representa el contexto de un mnemónico en el parser de la gramática BIES.
* Hereda de antlr4.ParserRuleContext.
*/
class MnemonicContext extends antlr4.ParserRuleContext {

	/**
     * @constructor
     * @param {Parser} parser - El parser que invoca este contexto.
     * @param {ParserRuleContext} [parent=null] - El contexto padre, si existe.
     * @param {number} [invokingState=-1] - El estado de invocación de la regla.
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
    * Acepta un visitante y delega la visita al método correspondiente.
    * 
    * @param {Visitor} visitor - El visitante que se acepta.
    * @returns {*} - El resultado de la visita del visitante.
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
* Clase que representa el contexto de un argumento en el parser de la gramática BIES.
* Hereda de antlr4.ParserRuleContext.
*/
class ArgContext extends antlr4.ParserRuleContext {

	/**
    * @constructor
    * 
    * @param {Parser} parser - El parser que invoca este contexto.
    * @param {ParserRuleContext} [parent=null] - El contexto padre, si existe.
    * @param {number} [invokingState=-1] - El estado de invocación de la regla.
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
    * Obtiene el token que representa un número entero.
    * 
    * @returns {Token} - El token INT.
    */
	INT() {
	    return this.getToken(biesParser.INT, 0);
	};

	/**
    * Obtiene el token que representa una cadena de texto.
    * 
    * @returns {Token} - El token STR.
    */
	STR() {
	    return this.getToken(biesParser.STR, 0);
	};

	/**
    * Obtiene el token que representa una función.
    * 
    * @returns {Token} - El token FUNCTION.
    */
	FUNCTION() {
	    return this.getToken(biesParser.FUNCTION, 0);
	};

	/**
    * Acepta un visitante y delega la visita al método correspondiente.
    * 
    * @param {Visitor} visitor - El visitante que se acepta.
    * @returns {*} - El resultado de la visita del visitante.
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
biesParser.InstContext = InstContext; 
biesParser.MnemonicContext = MnemonicContext; 
biesParser.ArgContext = ArgContext; 
