import { Command } from 'commander';
import BiesVM from './src/biesVM.mjs';
//(1) instalacion: npm install commander
//(2) ejecucion de la primer prueba: npm run simulate -- simulate
//(3) ejecucion de la segunda prueba: npm run simulate -- function
//(4) ejecucion de la tercera prueba: npm run simulate -- fibonacci

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

        'function': [
          '$FUN $0 args:0 parent: $0',
          'LDV 1',
          'BST 0 0',
          'LDF $1',
          'BST 0 1',
          'LDV 4',
          'LDV 3',
          'BLD 0 1',
          'APP',
          'APP 3',
          'PRN',
          'HLT',
          '$END',

          '$FUN $1 args:1 parent: $0',
          'LDF $2',
          'RET',
          '$END',

          '$FUN $2 args:1 parent: $1',
          'BLD 1 0',
          'BLD 0 0',
          'ADD',
          'RET',
          '$END'
        ],
        'fibonacci': [
          'INI 0',           
          'LDV 5',            
          'LDF $1',           
          'APP 1',            
          'HLT',              

          '$FUN $1 args:1 parent:$1',
          'LDV 0',
          'EQ',               
          'BT $1_1',
          'LDV 1',
          'EQ',              
          'BT $1_2',
          'LDF $1',           
          'SWP',
          'LDV -1',           
          'ADD',
          'APP 1',         
          'SWP',
          'LDV -2',          
          'ADD',
          'APP 1',           
          'ADD',              
          'BR $1_3',

          '$1_1',
          'LDV 0',            
          'BR $1_3',

          '$1_2',
          'LDV 1',            

          '$1_3',
          'PRN',              
          'RET',              
          '$END'
        ],
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