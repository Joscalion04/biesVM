import biesGrammarVisitor from '../parser/biesVisitor.js';
import fs from 'fs';
import antlr4 from 'antlr4';

class PrintVisitor extends biesGrammarVisitor {
    visitStart(ctx) {
        return this.visitChildren(ctx);
    }

    visitInst(ctx) {
        const mnemonic = ctx.mnemonic().getText();
        // Obtener los argumentos y filtrar los nulos
        const args = ctx.arg().map(arg => this.visit(arg)).filter(arg => arg !== null);
        // Imprimir solo el argumento si existe
        if (args.length > 0) {
            console.log(`Instrucción: ${mnemonic}, Argumento: ${args.join(', ')}`);
        } else {
            console.log(`Instrucción: ${mnemonic}`);
        }
        return null;
    }

    visitArg(ctx) {
        if (ctx.INT()) {
            return ctx.INT().getText();
        } else if (ctx.STR()) {
            return ctx.STR().getText();
        }
        return null;
    }
}

export default PrintVisitor;