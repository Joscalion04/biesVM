// arithmeticOperations.mjs
/**
 * Ejecuta una operación aritmética en la máquina virtual.
 * 
 * Esta función toma un mnemonico de operación aritmética y dos operandos 
 * desde la pila de la máquina virtual (vm), realizando la operación 
 * correspondiente. Los resultados se almacenan de nuevo en la pila.
 * 
 * @function executeArithmetic
 * @param {string} mnemonic - El mnemonico de la operación aritmética a realizar. 
 * Puede ser 'ADD', 'SUB', 'MUL' o 'DIV'.
 * @param {Object} vm - La instancia de la máquina virtual que contiene la pila 
 * y el estado actual de la ejecución.
 * 
 * @throws {Error} Si se intenta realizar una división por cero.
 * @throws {Error} Si se proporciona un mnemonico de operación desconocido.
 * 
 * @author Manuel Mora Sandi 
 * @author Derek Rojas Mendoza
 * @author Josué Vindas Pérez
 * @author Joseph León Cabezas
 */
export function executeArithmetic(mnemonic, vm) {
    const N = vm.stack.pop();
    const M = vm.stack.pop();

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