// logicalOperations.mjs
export function executeLogical(mnemonic, vm) {
    switch (mnemonic) {
        case 'EQ': {
            const N = vm.stack.pop();
            const M = vm.stack.pop();
            vm.stack.push(M === N ? 1 : 0);
            break;
        }
        case 'GT': {
            const N = vm.stack.pop();
            const M = vm.stack.pop();
            vm.stack.push(M > N ? 1 : 0);
            break;
        }
        case 'GTE': {
            const N = vm.stack.pop();
            const M = vm.stack.pop();
            vm.stack.push(M >= N ? 1 : 0);
            break;
        }
        case 'LT': {
            const N = vm.stack.pop();
            const M = vm.stack.pop();
            vm.stack.push(M < N ? 1 : 0);
            break;
        }
        case 'LTE': {
            const N = vm.stack.pop();
            const M = vm.stack.pop();
            vm.stack.push(M <= N ? 1 : 0);
            break;
        }
        case 'AND': {
            const N = vm.stack.pop();
            const M = vm.stack.pop();
            vm.stack.push(M && N ? 1 : 0);
            break;
        }
        case 'OR': {
            const N = vm.stack.pop();
            const M = vm.stack.pop();
            vm.stack.push(M || N ? 1 : 0);
            break;
        }
        case 'XOR': {
            const N = vm.stack.pop();
            const M = vm.stack.pop();
            vm.stack.push((M ? 1 : 0) ^ (N ? 1 : 0));
            break;
        }
        case 'NOT': {
            const N = vm.stack.pop();
            vm.stack.push(!N ? 1 : 0);
            break;
        }
        default:
            throw new Error(`Unknown logical operation: ${mnemonic}`);
    }
}