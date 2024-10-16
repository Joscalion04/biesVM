// io.mjs
import readline from 'readline';

/**
 * Obtiene la entrada del usuario desde la consola de manera asíncrona.
 * 
 * Esta función crea una interfaz de lectura de línea para recibir una entrada 
 * del usuario. Utiliza una promesa para manejar la respuesta de manera 
 * asíncrona, permitiendo que el flujo de ejecución continúe sin bloquear 
 * el programa mientras espera la entrada.
 * 
 * @function getInput
 * @returns {Promise<string>} Una promesa que se resuelve con la entrada del 
 * usuario como una cadena de texto.
 * @author Manuel Mora Sandi 
 * @author Derek Rojas Mendoza
 * @author Josué Vindas Pérez
 * @author Joseph León Cabezas
 */
export function getInput() {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('', (input) => {
            rl.close();
            resolve(input);
        });
    });
}