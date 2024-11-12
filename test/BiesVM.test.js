import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

//prueba con: npm test

const testFiles = [
    'casting.basm',
    'cuadratica.basm',
    'Factorial_iterativo.basm',
    'Factorial_recursivo.basm',
    'Fibonacci_iterativo.basm',
    'Fibonacci_recursivo.basm',
    'largo_hilera.basm',
    'lista_palíndrome_iterativo.basm',
    'lista_palíndrome_recursivo.basm',
    'maximoEntre2.basm',
    'Pruebas.basm',
    'reverse_hilera_iterativo.basm',
    'reverse_hilera_recursivo.basm',
];

// Crear la carpeta de outputs si no existe
const outputDir = './test/outputs';
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

testFiles.forEach((file) => {
    test(`Test ${file}`, (done) => {
        const filePath = `./test/${file}`;

        // Verificar que el archivo de prueba existe
        expect(fs.existsSync(filePath)).toBe(true);

        // Definir rutas para los archivos de salida y errores en la carpeta específica
        const outFile = path.join(outputDir, `output_${file.replace('.basm', '')}.out`);
        const errFile = path.join(outputDir, `error_${file.replace('.basm', '')}.err`);

        // Ejecutar biesvm.js con los archivos de prueba
        exec(`node ./biesvm.js --o ${outFile} --e ${errFile} --trace 1 ${file}`, (error, stdout, stderr) => {
            // No debe haber errores en la ejecución
            expect(error).toBeNull();

            // Verificar que stderr esté vacío
            expect(stderr).toBe('');

            // Verificar que se haya creado el archivo de salida
            expect(fs.existsSync(outFile)).toBe(true);

            // Opcional: Imprimir el output para debug
            console.log(stdout);
            
            done();
        });
    }, 10000);
});
