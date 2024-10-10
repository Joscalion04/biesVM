import BiesVM from "./BiesVM.mjs";
import fs from 'fs';
import antlr4 from 'antlr4';
//@ts-check

/**
 *
 * @author Manuel Mora Sandi 
 * @author Derek Rojas Mendoza
 * @author Josué Vindas Pérez
 * @author Joseph León Cabezas
 */
class Evaluator {
    VM = new BiesVM(); // Máquina virtual
    
    run() {
        while (this.VM.executeInstruction()) {
            // Loop until executeInstruction returns false
            // if(this.VM.executeInstruction(mnemonic, args, ctx)!=null){
            //     this.executeFunctionById(ctx, this.VM.executeInstruction(mnemonic, args, ctx));
            // }
        }
    }
}

export default Evaluator;