// io.mjs
import readline from 'readline';

  /**
   * Obtiene la entrada del usuario de manera asíncrona.
   * @returns {Promise<string>} - Retorna una promesa que se resuelve con la entrada del usuario.
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