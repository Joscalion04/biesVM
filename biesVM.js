#!/usr/bin/env node

import { program } from 'commander';
import fs from 'fs';
import { exec } from 'child_process';

program
  .option('-o <file>', 'Execute the .basm file');

program.parse(process.argv);

const options = program.opts();

if (options.o) {
    const file = options.o;

    // Verificar si se proporcionó el nombre del archivo
    if (!file) {
        console.error('Error: No se ha proporcionado el nombre del archivo.');
        process.exit(1);
    }

    console.log(`Archivo leído: ${file}`);

    // Comprobar si el archivo .basm existe en la carpeta de tests
    const filePath = `./test/${file}`;
    if (fs.existsSync(filePath)) {
        console.log(`Ejecutando archivo: ${filePath}`);

        // Ejecutar el script de Node.js y redirigir la salida a un archivo temporal
        exec(`node ./index.js "${filePath}"`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: La ejecución del archivo ha fallado. ${stderr}`);
                process.exit(1);
            }

            // Mostrar la salida
            console.log(stdout);
            console.log('Ejecución completada con éxito.');
        });
    } else {
        console.error(`Error: El archivo "${filePath}" no existe en la carpeta de pruebas.`);
        process.exit(1);
    }
} else {
    console.log('Uso: biesVM -o <archivo.basm>');
    process.exit(1);
}