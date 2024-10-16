// castingOperations.mjs
export function executeCasting(mnemonic, vm) {
    switch (mnemonic) {
        case 'TOS':
            vm.stack.push(String(vm.stack.pop()));
            break;
        case 'TOL':
            vm.stack.push([vm.stack.pop()]);
            break;
        default:
            throw new Error(`Unknown casting operation: ${mnemonic}`);
    }
}