import BiesVM from '../src/biesVM.mjs'; 

describe('BiesVM', () => {
    let vm;

    beforeEach(() => {
        vm = new BiesVM();
    });

    test('Inicialización correcta de las pilas', () => {
        expect(vm.code).toEqual([]);
        expect(vm.stack).toEqual([]);
        expect(vm.bindings).toEqual([[]]);
        expect(vm.contexts).toEqual([]);
    });

    test('Ejecucion de LDV correctamente', () => {
        vm.executeInstruction('LDV', [5]);
        expect(vm.stack).toEqual([5]);
    });

    test('Ejecucion de ADD correctamente', () => {
        vm.stack.push(2);
        vm.stack.push(3);
        vm.executeInstruction('ADD');
        expect(vm.stack).toEqual([5]);
    });

    test('Ejecucion de SUB correctamente', () => {
        vm.stack.push(3);
        vm.stack.push(5);
        vm.executeInstruction('SUB');
        expect(vm.stack).toEqual([2]);
    });

    test('Ejecucion de MUL correctamente', () => {
        vm.stack.push(3);
        vm.stack.push(4);
        vm.executeInstruction('MUL');
        expect(vm.stack).toEqual([12]);
    });

    test('Ejecucion de DIV correctamente', () => { 
        vm.stack.push(2);
        vm.stack.push(10);
        vm.executeInstruction('DIV');
        expect(vm.stack).toEqual([5]);
    });

    test('Ejecucion de PRN correctamente', () => {
        console.log = jest.fn(); // Mocks console.log
        vm.stack.push(42);
        vm.executeInstruction('PRN');
        expect(console.log).toHaveBeenCalledWith(42);
        expect(vm.stack).toEqual([42]);
    });

    test('Ejecucion de POP correctamente', () => {
        vm.stack.push(10);
        vm.executeInstruction('POP');
        expect(vm.stack).toEqual([]); // La pila debe estar vacía
    });

    test('Ejecucion de SWP correctamente', () => {
        vm.stack.push(1);
        vm.stack.push(2);
        vm.executeInstruction('SWP');
        expect(vm.stack).toEqual([2, 1]); // Debe intercambiar los elementos
    });

    test('Ejecucion de NEG correctamente', () => {
        vm.stack.push(5);
        vm.executeInstruction('NEG');
        expect(vm.stack).toEqual([-5]);
    });

    test('Ejecucion de SGN correctamente', () => {
        vm.stack.push(-3);
        vm.executeInstruction('SGN');
        expect(vm.stack).toEqual([0]); 
        vm.stack.pop(); // Limpiar pila para siguiente test
        vm.stack.push(3);
        vm.executeInstruction('SGN');
        expect(vm.stack).toEqual([1]); 
    });

});