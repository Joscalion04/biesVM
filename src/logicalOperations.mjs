// logicalOperations.mjs
/**
 * Ejecuta una operación lógica basada en el mnemonico proporcionado 
 * utilizando el stack del modelo de máquina virtual.
 * 
 * Esta función evalúa diferentes operaciones lógicas como comparación, 
 * conjunción, disyunción y negación, y coloca el resultado en el 
 * stack de la máquina virtual. Las operaciones devuelven 1 si el 
 * resultado es verdadero y 0 si es falso.
 * 
 * @function executeLogical
 * @param {string} mnemonic - El mnemonico que determina la operación lógica a realizar. 
 * Puede ser uno de los siguientes: 'EQ', 'GT', 'GTE', 'LT', 'LTE', 'AND', 'OR', 'XOR', 'NOT'.
 * @param {Object} vm - La máquina virtual que contiene el stack y el estado actual.
 * 
 * @throws {Error} Lanza un error si el mnemonico no es reconocido.
 *  @author Manuel Mora Sandi 
 * @author Derek Rojas Mendoza
 * @author Josué Vindas Pérez 
 * @author Joseph León Cabezas
 */
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