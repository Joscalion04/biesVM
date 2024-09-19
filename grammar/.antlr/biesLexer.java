// Generated from c:/Users/jgame/OneDrive/Escritorio/UNA/VI Semestre/Paradigmas/Trabajos/Proyecto/biesVM/grammar/bies.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class biesLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, INT=11, STR=12, WS=13;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "INT", "STR", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'LDV'", "'POP'", "'BLD'", "'ADD'", "'MUL'", "'DIV'", "'SUB'", 
			"'PRN'", "'BST'", "'HLT'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, "INT", 
			"STR", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public biesLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "bies.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\r[\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b"+
		"\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\n\u0003\nE\b\n"+
		"\u0001\n\u0004\nH\b\n\u000b\n\f\nI\u0001\u000b\u0001\u000b\u0005\u000b"+
		"N\b\u000b\n\u000b\f\u000bQ\t\u000b\u0001\u000b\u0001\u000b\u0001\f\u0004"+
		"\fV\b\f\u000b\f\f\fW\u0001\f\u0001\f\u0001O\u0000\r\u0001\u0001\u0003"+
		"\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011"+
		"\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u0001\u0000\u0002\u0001\u00000"+
		"9\u0003\u0000\t\n\r\r  ^\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003"+
		"\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007"+
		"\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001"+
		"\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000"+
		"\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000"+
		"\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000"+
		"\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0001\u001b\u0001\u0000"+
		"\u0000\u0000\u0003\u001f\u0001\u0000\u0000\u0000\u0005#\u0001\u0000\u0000"+
		"\u0000\u0007\'\u0001\u0000\u0000\u0000\t+\u0001\u0000\u0000\u0000\u000b"+
		"/\u0001\u0000\u0000\u0000\r3\u0001\u0000\u0000\u0000\u000f7\u0001\u0000"+
		"\u0000\u0000\u0011;\u0001\u0000\u0000\u0000\u0013?\u0001\u0000\u0000\u0000"+
		"\u0015D\u0001\u0000\u0000\u0000\u0017K\u0001\u0000\u0000\u0000\u0019U"+
		"\u0001\u0000\u0000\u0000\u001b\u001c\u0005L\u0000\u0000\u001c\u001d\u0005"+
		"D\u0000\u0000\u001d\u001e\u0005V\u0000\u0000\u001e\u0002\u0001\u0000\u0000"+
		"\u0000\u001f \u0005P\u0000\u0000 !\u0005O\u0000\u0000!\"\u0005P\u0000"+
		"\u0000\"\u0004\u0001\u0000\u0000\u0000#$\u0005B\u0000\u0000$%\u0005L\u0000"+
		"\u0000%&\u0005D\u0000\u0000&\u0006\u0001\u0000\u0000\u0000\'(\u0005A\u0000"+
		"\u0000()\u0005D\u0000\u0000)*\u0005D\u0000\u0000*\b\u0001\u0000\u0000"+
		"\u0000+,\u0005M\u0000\u0000,-\u0005U\u0000\u0000-.\u0005L\u0000\u0000"+
		".\n\u0001\u0000\u0000\u0000/0\u0005D\u0000\u000001\u0005I\u0000\u0000"+
		"12\u0005V\u0000\u00002\f\u0001\u0000\u0000\u000034\u0005S\u0000\u0000"+
		"45\u0005U\u0000\u000056\u0005B\u0000\u00006\u000e\u0001\u0000\u0000\u0000"+
		"78\u0005P\u0000\u000089\u0005R\u0000\u00009:\u0005N\u0000\u0000:\u0010"+
		"\u0001\u0000\u0000\u0000;<\u0005B\u0000\u0000<=\u0005S\u0000\u0000=>\u0005"+
		"T\u0000\u0000>\u0012\u0001\u0000\u0000\u0000?@\u0005H\u0000\u0000@A\u0005"+
		"L\u0000\u0000AB\u0005T\u0000\u0000B\u0014\u0001\u0000\u0000\u0000CE\u0005"+
		"-\u0000\u0000DC\u0001\u0000\u0000\u0000DE\u0001\u0000\u0000\u0000EG\u0001"+
		"\u0000\u0000\u0000FH\u0007\u0000\u0000\u0000GF\u0001\u0000\u0000\u0000"+
		"HI\u0001\u0000\u0000\u0000IG\u0001\u0000\u0000\u0000IJ\u0001\u0000\u0000"+
		"\u0000J\u0016\u0001\u0000\u0000\u0000KO\u0005\'\u0000\u0000LN\t\u0000"+
		"\u0000\u0000ML\u0001\u0000\u0000\u0000NQ\u0001\u0000\u0000\u0000OP\u0001"+
		"\u0000\u0000\u0000OM\u0001\u0000\u0000\u0000PR\u0001\u0000\u0000\u0000"+
		"QO\u0001\u0000\u0000\u0000RS\u0005\'\u0000\u0000S\u0018\u0001\u0000\u0000"+
		"\u0000TV\u0007\u0001\u0000\u0000UT\u0001\u0000\u0000\u0000VW\u0001\u0000"+
		"\u0000\u0000WU\u0001\u0000\u0000\u0000WX\u0001\u0000\u0000\u0000XY\u0001"+
		"\u0000\u0000\u0000YZ\u0006\f\u0000\u0000Z\u001a\u0001\u0000\u0000\u0000"+
		"\u0005\u0000DIOW\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}