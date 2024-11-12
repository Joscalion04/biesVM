/**
 * Clase que representa una máquina virtual Bies, la cual ejecuta un conjunto de instrucciones
 * 
 * @author Manuel Mora Sandi 
 * @author Derek Rojas Mendoza
 * @author Josué Vindas Pérez
 * @author Joseph León Cabezas
 */
import test_parser from "./runner.mjs";
import readline from 'readline';
import fs from 'fs'; // Importar el módulo fs para trabajar con archivos


const input_file = process.argv[2]; // Obtiene el argumento pasado al script

if (!input_file) {
    console.error("Error: No se proporcionó un archivo.");
    process.exit(1);
}

try {
    // Verificar si el archivo existe antes de intentar abrirlo
    if (!fs.existsSync(input_file)) {
        console.error(`Error: El archivo ${input_file} no existe.`);
        process.exit(1);
    }

    // Ejecutar el archivo con el parser
    test_parser(input_file);
} catch (error) {
    console.error(`Error al ejecutar el archivo: ${error.message}`);
    process.exit(1);
}