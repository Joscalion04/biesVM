// castingOperations.mjs
/**
 * Ejecuta una operación de conversión de tipos en la máquina virtual.
 * 
 * Esta función toma un mnemonico de operación de conversión y aplica la 
 * conversión correspondiente al valor en la parte superior de la pila de 
 * la máquina virtual (vm). Los resultados se almacenan de nuevo en la pila.
 * 
 * @function executeCasting
 * @param {string} mnemonic - El mnemonico de la operación de conversión a realizar. 
 * Puede ser 'TOS' para convertir a cadena o 'TOL' para convertir a lista.
 * @param {Object} vm - La instancia de la máquina virtual que contiene la pila 
 * y el estado actual de la ejecución.
 * 
 * @throws {Error} Si se proporciona un mnemonico de operación desconocido.
 * @author Manuel Mora Sandi 
 * @author Derek Rojas Mendoza
 * @author Josué Vindas Pérez
 * @author Joseph León Cabezas
 */
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