// stackOperations.mjs
/**
 * Ejecuta una operación sobre el stack de la máquina virtual
 * según el mnemonico proporcionado.
 * 
 * Esta función permite manipular el stack a través de operaciones
 * como eliminar el elemento superior, intercambiar los dos elementos
 * superiores, y gestionar la vinculación de variables en el contexto 
 * actual. Las operaciones modifican el stack directamente.
 * 
 * @function executeStack
 * @param {string} mnemonic - El mnemonico que determina la operación de stack a realizar. 
 * Puede ser uno de los siguientes: 'POP', 'SWP', 'BLD', 'BST'.
 * @param {Object} vm - La máquina virtual que contiene el stack y el estado actual.
 * 
 * @throws {Error} Lanza un error si el mnemonico no es reconocido.
 * 
 * @author Manuel Mora Sandi 
 * @author Derek Rojas Mendoza
 * @author Josué Vindas Pérez
 * @author Joseph León Cabezas
 */

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