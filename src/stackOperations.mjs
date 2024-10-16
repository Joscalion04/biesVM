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
            const actualCode = vm.code[vm.getActualContext().PC];
            this.stack.push(vm.bindings[actualCode.args[0]].binding[actualCode.args[1]]);
            break;
        }
        case 'BST': {
            const actualCode = vm.code[vm.getActualContext().PC];
            const V = vm.stack.pop();
            const E = parseInt(actualCode.args[0]); // Binding
            const K = parseInt(actualCode.args[1]); 
            vm.bindings[E].binding[K] = V;
            break;
        }
        default:
            throw new Error(`Unknown stack operation: ${mnemonic}`);
    }
}