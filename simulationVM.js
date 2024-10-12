import { Command } from 'commander';
import BiesVM from './src/biesVM.mjs';
//(1) instalacion: npm install commander
//(2) ejecucion: npm run simulate

const program = new Command();

program
  .version('1.0.0')
  .description('Simulador de la Máquina Virtual BiesVM que ejecuta instrucciones ensamblador.')
  .option('--trace <level>', 'Nivel de traza (0 = no traza, 1 = traza)', '0')
  .argument('<test>', 'Caso de prueba a ejecutar')  

  .action((test, options) => {
    const vm = new BiesVM();

    if (options.trace === '1') {
      vm.setTrace(true);
    }

    try {
      const instructions = {
        'simulate': ['INI 0', 'LDV 3', 'LDV 4', 'ADD', 'PRN', 'HLT'],
        // Agrega más casos de prueba aquí
      };

      if (!instructions[test]) {
        console.error('Caso de prueba no encontrado:', test);
        return;
      }

      vm.loadProgram(instructions[test]);
      vm.run();
    } catch (error) {
      console.error('Error durante la ejecución:', error.message);
    }
  });

program.parse(process.argv);