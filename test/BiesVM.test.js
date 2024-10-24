import { exec } from 'child_process';
import fs from 'fs';

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

// Iterate through each test file
testFiles.forEach((file) => {
    test(`Test ${file}`, (done) => {
        const filePath = `./test/${file}`; // Adjust the path if needed

        // Ensure the file exists before running
        expect(fs.existsSync(filePath)).toBe(true);

        // Execute the BiesVM for each file
        exec(`node ./biesVM.js -o ${file}`, (error, stdout, stderr) => {
            expect(error).toBeNull(); // Expect no errors
            expect(stderr).toBe(''); // Expect no standard error output
            console.log(stdout); // Optional: Display the output
            done();
        });
    });
});
