// arithmeticOperations.mjs
export function executeArithmetic(mnemonic, vm) {
    const N = parseInt(vm.stack.pop());
    const M = parseInt(vm.stack.pop());
    if (typeof N === 'number' && typeof M === 'number') {
        switch (mnemonic) {
            case 'ADD':
                vm.stack.push(M + N);
                break;
            case 'SUB':
                vm.stack.push(M - N);
                break;
            case 'MUL':
                vm.stack.push(M * N);
                break;
            case 'DIV':
                if (N === 0) throw new Error('Division by zero');
                vm.stack.push(M / N);
                break;
            default:
                throw new Error(`Unknown arithmetic operation: ${mnemonic}`);
        }
    }
}