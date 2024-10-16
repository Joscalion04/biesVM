import { executeArithmetic } from './arithmeticOperations.mjs';
import { executeLogical } from './logicalOperations.mjs';
import { executeStack } from './stackOperations.mjs';
import { executeCasting } from './castingOperations.mjs';
import { getInput } from './IO_Operator.mjs';

class BiesVM {
    constructor() {
        this.code = []; // C
        this.stack = []; // S
        this.bindings = [{fun: null, binding:[]}]; // B
        this.contexts = []; // D
    }

    getActualContext() {
        return this.contexts.find(context => context.ACTUAL);
    }

    findContextByFUN(functionClosure) {
        return this.contexts.find(context => context.FUN === functionClosure);
    }

    createNewContext(arg, actual = false, K) {
        const newContext = {
            context: { code: [] },
            PC: 0,
            ACTUAL: actual,
            FUN: arg,
            previousFUN: null,
            K: K,
            parent: this.getActualContext() ? this.getActualContext().FUN : arg
        };
        this.contexts.push(newContext);
    }

    async executeInstruction(arg) {
        const actualContext = this.getActualContext();
        const actualCode = actualContext ? this.code[actualContext.PC] : null;
        const mnemonic = arg ? (arg[0] != null ? arg[0] : actualCode?.mnemonic) : actualCode?.mnemonic;

        switch (mnemonic) {
            case 'INI':
                this.initialize(arg);
                break;
            case 'HLT':
                return this.halt();
            case 'POP':
            case 'SWP':
            case 'BLD':
            case 'BST':
                executeStack(mnemonic, this);
                break;
            case 'ADD':
            case 'SUB':
            case 'MUL':
            case 'DIV':
                executeArithmetic(mnemonic, this);
                break;
            case 'EQ':
            case 'GT':
            case 'GTE':
            case 'LT':
            case 'LTE':
            case 'AND':
            case 'OR':
            case 'XOR':
            case 'NOT':
                executeLogical(mnemonic, this);
                break;
            case 'TOS':
            case 'TOL':
                executeCasting(mnemonic, this);
                break;
            default:
              console.log(mnemonic)
                throw new Error(`Unknown instruction: ${mnemonic}`);
        }

        if (actualContext) {
            actualContext.PC++;
        }
    }

    initialize(arg) {
        if (this.contexts.length === 0) {
            this.createNewContext(arg[1], true, null);
            this.getActualContext().PC = -1;
            this.bindings[0].fun = this.getActualContext().FUN;
        }
    }

    halt() {
        this.code = [];
        this.stack = [];
        this.bindings = [{fun: null, binding:[]}];
        this.contexts = [];
        return 'FIN';
    }
}

export default BiesVM;