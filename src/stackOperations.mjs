// stackOperations.mjs
export function executeStack(mnemonic, vm) {
    switch (mnemonic) {
        case 'POP':
            vm.stack.pop();
            break;
        case 'SWP': {
            const N = vm.stack.pop();
            const M = vm.stack.pop();
            vm.stack.push(N);
            vm.stack.push(M);
            break;
        }
        case 'BLD': {
            const actualContext = vm.getActualContext();
            const value = vm.bindings[vm.code[actualContext.PC].args[0]]
                          .binding[vm.code[actualContext.PC].args[1]];
            vm.stack.push(value);
            break;
        }
        case 'BST': {
            const actualContext = vm.getActualContext();
            const variable = vm.stack.pop();
            const bindingIndex = vm.code[actualContext.PC].args[0];
            const bindingPosition = vm.code[actualContext.PC].args[1];
            vm.bindings[bindingIndex].binding[bindingPosition] = variable;
            break;
        }
        default:
            throw new Error(`Unknown stack operation: ${mnemonic}`);
    }
}