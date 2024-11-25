#!/usr/bin/env node

import { program } from 'commander';
import fs from 'fs';
import { exec } from 'child_process';

program
  .option('--o <outfile>', 'Archivo de salida para las impresiones (sysout)')
  .option('--e <errfile>', 'Archivo para las salidas de error (syserr)')
  .option('--trace <level>', 'Nivel de trace (0 o 1)', '0')
  .option('--use-config <configFile>', 'Archivo de configuración JSON', '.config_biesm.json')
  .argument('<file>', 'Archivo fuente .basm');

program.parse(process.argv);

const options = program.opts();
const sourceFile = program.args[0];

if (!sourceFile) {
    console.error('Error: No se ha proporcionado el archivo fuente.');
    process.exit(1);
}

// Cargar configuración desde el archivo JSON si se especifica
let config = {};
if (options.useConfig) {
    const configPath = options.useConfig;
    if (fs.existsSync(configPath)) {
        config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    } else {
        console.error(`Error: El archivo de configuración "${configPath}" no existe.`);
        process.exit(1);
    }
}

// Definir valores predeterminados para las opciones de salida y trace
const outFile = options.o || config.outfile || `${sourceFile.replace(/\.basm$/, '')}.out`;
const errFile = options.e || config.errfile || `${sourceFile.replace(/\.basm$/, '')}.err`;
const traceLevel = options.trace || config.trace || '0';

// Verificar si el archivo fuente existe
const filePath = `./test/${sourceFile}`;
if (!fs.existsSync(filePath)) {
    console.error(`Error: El archivo "${filePath}" no existe.`);
    process.exit(1);
}


// Ejecutar el compilador con trace y redirigir las salidas
exec(`node ./src/index.js "${filePath}"`, (error, stdout, stderr) => {
    if (error) {
        
        if (traceLevel === '1') {
            stderr += `\nTrace de errores: ID de la función y la instrucción actual...\n`;
        }

        fs.writeFileSync(errFile, stderr);
        process.exit(1);
    }

    // Guardar la salaida en el archivo especificado
    console.log(stdout); // Mostrar la salida estándar en la consola
    fs.writeFileSync(outFile, stdout);
    console.log(`Ejecución completada con éxito. Salida en: ${outFile}`);
});


// prueba: node biesvm.js --o salida.txt --e errores.txt --trace 1 casting.basm   

// -o salida.txt: archivo de salida para las impresiones (sysout)
// -e errores.txt: archivo para las salidas de error (syserr)
// --trace 1: nivel de trace (0 o 1), 1 para mostrar el trace, 0 para no mostrarlo
// casting.basm: archivo fuente .basmV