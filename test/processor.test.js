import PrintVisitor from '../src/processor.mjs';
import BiesVM from '../src/biesVM.mjs';
import biesGrammarVisitor from '../parser/biesVisitor.js'; 

describe('PrintVisitor', () => {
  let visitor;

  beforeEach(() => {
    // Crear una nueva instancia de PrintVisitor antes de cada prueba
    visitor = new PrintVisitor();

    // Mock de console.log para interceptar las llamadas y verificar los mensajes
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restaurar las implementaciones originales después de cada prueba
    jest.restoreAllMocks();
  });

  // Función auxiliar para crear argumentos mockeados
  function createMockArg(argType, text) {
    return {
      INT: argType === 'INT' ? () => ({ getText: () => text }) : () => null,
      STR: argType === 'STR' ? () => ({ getText: () => text }) : () => null,
      getText: () => text,
      accept: function(visitorInstance) {
        return visitorInstance.visitArg(this);
      },
    };
  }

  test('visitInst maneja una instrucción sin argumentos', () => {
    const mockMnemonicCtx = {
      getText: () => 'HLT', // Mnemónico simulado
    };

    const mockCtx = {
      mnemonic: () => mockMnemonicCtx,
      arg: () => [],
    };

    jest.spyOn(visitor.VM, 'executeInstruction').mockReturnValue(null);

    visitor.visitInst(mockCtx);

    expect(visitor.VM.executeInstruction).toHaveBeenCalledWith('HLT', [], mockCtx);
  });

  test('visitInst maneja una instrucción con un argumento entero', () => {
    const mockMnemonicCtx = {
      getText: () => 'LDV',
    };

    const mockArgCtx = createMockArg('INT', '5');

    const mockCtx = {
      mnemonic: () => mockMnemonicCtx,
      arg: () => [mockArgCtx],
      visit: (arg) => visitor.visit(arg),
    };

    jest.spyOn(visitor.VM, 'executeInstruction').mockReturnValue(null);

    visitor.visitInst(mockCtx);

    expect(visitor.VM.executeInstruction).toHaveBeenCalledWith('LDV', ['5'], mockCtx);
  });

  test('visitInst maneja una instrucción con un argumento de cadena', () => {
    const mockMnemonicCtx = {
      getText: () => 'STR',
    };

    const mockArgCtx = createMockArg('STR', '"Hello"');

    const mockCtx = {
      mnemonic: () => mockMnemonicCtx,
      arg: () => [mockArgCtx],
      visit: (arg) => visitor.visit(arg),
    };

    jest.spyOn(visitor.VM, 'executeInstruction').mockReturnValue(null);

    visitor.visitInst(mockCtx);

    expect(visitor.VM.executeInstruction).toHaveBeenCalledWith('STR', ['"Hello"'], mockCtx);
  });

  test('visitInst maneja una instrucción con un argumento de variable', () => {
    const mockMnemonicCtx = {
      getText: () => 'BLD',
    };

    const mockArgCtx = createMockArg('VAR', '$1');

    const mockCtx = {
      mnemonic: () => mockMnemonicCtx,
      arg: () => [mockArgCtx],
      visit: (arg) => visitor.visit(arg),
    };

    jest.spyOn(visitor.VM, 'executeInstruction').mockReturnValue(null);

    visitor.visitInst(mockCtx);

    expect(visitor.VM.executeInstruction).toHaveBeenCalledWith('BLD', ['$1'], mockCtx);
  });

  test('visitArg maneja un argumento entero', () => {
    const mockArgCtx = createMockArg('INT', '42');

    const result = visitor.visitArg(mockArgCtx);
    expect(result).toBe('42');
  });

  test('visitArg maneja un argumento de cadena', () => {
    const mockArgCtx = createMockArg('STR', '"World"');

    const result = visitor.visitArg(mockArgCtx);
    expect(result).toBe('"World"');
  });

  test('visitArg maneja un argumento de variable', () => {
    const mockArgCtx = createMockArg('VAR', '$2');

    const result = visitor.visitArg(mockArgCtx);
    expect(result).toBe('$2');
  });

  test('visitInst maneja una instrucción con múltiples argumentos', () => {
    const mockMnemonicCtx = {
      getText: () => 'ADD',
    };

    const mockArgCtx1 = createMockArg('INT', '2');
    const mockArgCtx2 = createMockArg('INT', '3');

    const mockCtx = {
      mnemonic: () => mockMnemonicCtx,
      arg: () => [mockArgCtx1, mockArgCtx2],
      visit: (arg) => visitor.visit(arg),
    };

    jest.spyOn(visitor.VM, 'executeInstruction').mockReturnValue(null);

    visitor.visitInst(mockCtx);

    expect(visitor.VM.executeInstruction).toHaveBeenCalledWith('ADD', ['2', '3'], mockCtx);
  });
});