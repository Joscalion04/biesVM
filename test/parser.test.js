import fs from 'fs';
import test_parser from '../src/runner.mjs'; 

describe('test_parser', () => {

    it('should process the input file without throwing an error', () => {
        // Ruta del archivo de prueba
        const testFilePath = './test/biesTest.txt';

        // Leemos el contenido del archivo real.
        let testFileContent;
        try {
            testFileContent = fs.readFileSync(testFilePath, 'utf-8');
        } catch (error) {
            throw new Error(`No se pudo leer el archivo de prueba en la ruta: ${testFilePath}`);
        }

        // Verificamos que el archivo no esté vacío.
        expect(testFileContent).toBeTruthy();

        // Interceptamos la salida de la consola para capturar posibles errores del lexer o parser.
        const consoleSpy = jest.spyOn(console, 'log');
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

        // Ejecutamos el parser.
        try {
            test_parser(testFilePath);
        } catch (error) {
            console.log("Error en la ejecución del parser:", error);
        }

        // Revisamos si hubo algún error en la salida de consola.
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('PROCESADO'));
        expect(consoleErrorSpy).not.toHaveBeenCalled(); // No debería haber errores de consola.

        // Restauramos la funcionalidad original de console.log.
        consoleSpy.mockRestore();
        consoleErrorSpy.mockRestore();

        // No se elimina el archivo al final del test.
    });

});