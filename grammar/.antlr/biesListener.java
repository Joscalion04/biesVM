// Generated from c:/Users/jgame/OneDrive/Escritorio/UNA/VI Semestre/Paradigmas/Trabajos/Proyecto/biesVM/grammar/bies.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link biesParser}.
 */
public interface biesListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link biesParser#start}.
	 * @param ctx the parse tree
	 */
	void enterStart(biesParser.StartContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesParser#start}.
	 * @param ctx the parse tree
	 */
	void exitStart(biesParser.StartContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesParser#inst}.
	 * @param ctx the parse tree
	 */
	void enterInst(biesParser.InstContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesParser#inst}.
	 * @param ctx the parse tree
	 */
	void exitInst(biesParser.InstContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesParser#mnemonic}.
	 * @param ctx the parse tree
	 */
	void enterMnemonic(biesParser.MnemonicContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesParser#mnemonic}.
	 * @param ctx the parse tree
	 */
	void exitMnemonic(biesParser.MnemonicContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesParser#arg}.
	 * @param ctx the parse tree
	 */
	void enterArg(biesParser.ArgContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesParser#arg}.
	 * @param ctx the parse tree
	 */
	void exitArg(biesParser.ArgContext ctx);
}