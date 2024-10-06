/**
* Clase que representa una máquina virtual Bies, la cual ejecuta un conjunto de instrucciones
* 
* @author Manuel Mora Sandi 
* @author Derek Rojas Mendoza
* @author Josué Vindas Pérez
* @author Joseph León Cabezas
*/

class BiesVM {
  /**
  * Constructor de la máquina virtual Bies con un conjunto de instrucciones y un entorno global
  * @constructor
  * @param {string} code - Código fuente a ejecutar
  * @param {object} bindings - Entorno global
  * @param {object} contexts - Contextos de ejecución
  * @param {object} stack - Pila de ejecución
  */
  constructor() {
    this.code = []; // C
    this.stack = []; // S
    this.bindings = [[]]; // B
    this.contexts = []; // D
  }

  /**
  * Busca y devuelve la closure de una función por su nombre recorriendo los bindings 
  * desde el más reciente al más antiguo. Lanza un error si no se encuentra.
  *
  * @param functionName El nombre de la función a buscar.
  * @return La closure asociada a la función encontrada.
  * @throws Error Si la función no se encuentra en ningún binding.
  */
  findFunction(functionName) {
    for (let i = this.contexts.length - 1; i >= 0; i--) {
      if (this.contexts[i][functionName]) {
        return this.contexts[i][functionName]; // Retorna la closure
      }
    }
    throw new Error(`Función ${functionName} no encontrada`);
  }

  /**
  * Ejecuta una instrucción basada en el mnemónico proporcionado. La lógica varía 
  * dependiendo del tipo de instrucción, incluyendo operaciones aritméticas, lógicas,
  * manipulación de la pila y control de flujo.
  *
  * @param mnemonic El mnemónico de la instrucción a ejecutar.
  * @param args Los argumentos adicionales requeridos para la ejecución de la instrucción.
  */
  executeInstruction(mnemonic, args) { // instruction es el ctx del arbol
    // Lógica para ejecutar cada instrucción
    // Ejemplo: LDV, ADD, POP, etc.
    console.log(mnemonic, args);
    switch (mnemonic) {
      // Inicializar
      case 'INI': {
        const N = args[0];
        this.contexts.push(N);
        this.code = this.contexts[0];
      } break;

      // Stop
      case 'HLT': {
        this.code = [];
        this.stack = [];
        this.bindings = [[]];
        this.contexts = [];
      } break;

      case 'POP': {
        this.stack.pop();
      } break;

      // Swap
      case 'SWP': {
        const N = this.stack.pop();
        const M = this.stack.pop();
        this.stack.push(N);
        this.stack.push(M);
      } break;

      // Load Value
      case 'LDV': {
        const V = args[0];
        this.stack.push(V);
      } break;

      // Load desde ambiente
      case 'BLD': {
        this.stack.push(this.bindings[args[0]][args[1]]);
      } break;

      case 'BST': {
        const K = this.stack.pop(); // Variable
        const E = parseInt(args[0]); // Binding
        const V = parseInt(args[1]); 
        this.bindings[E][V] = K;
      } break;

      case 'ADD': {
        const N = parseInt(this.stack.pop()); 
        const M = parseInt(this.stack.pop()); 
        if (typeof N === 'number' && typeof M === 'number') {
          this.stack.push(N + M);
        }
      } break;

      case 'MUL': {
        const N = parseInt(this.stack.pop());
        const M = parseInt(this.stack.pop()); 
        if (typeof N === 'number' && typeof M === 'number') {
          this.stack.push(N * M);
        }
      } break;

      case 'DIV': {
        const N = parseInt(this.stack.pop()); 
        const M = parseInt(this.stack.pop()); 
        if (typeof N === 'number' && typeof M === 'number') {
          this.stack.push(N / M);
        }
      } break;

      case 'SUB': {
        const N = parseInt(this.stack.pop()); 
        const M = parseInt(this.stack.pop()); 
        if (typeof N === 'number' && typeof M === 'number') {
          this.stack.push(N - M);
        }
      } break;
      
      // Negación
      case 'NEG': {
        const N = this.stack.pop();
        if (typeof N === 'number') {
          this.stack.push(-N);
        }
      } break;

      // Signo
      case 'SGN': {
        const N = this.stack.pop();
        if (typeof N === 'number') {
          this.stack.push(Math.sign(N) > 0 ? 1 : 0);//Revisar
        }
      } break;

      // Igual
      case 'EQ': {
        const N = this.stack.pop();
        const M = this.stack.pop();
        this.stack.push(N === M ? 1 : 0);
      } break;

      // Mayor que
      case 'GT': {
        const N = this.stack.pop();
        const M = this.stack.pop();
        this.stack.push(N > M ? 1 : 0);
      } break;

      // Mayor o igual que
      case 'GTE': {
        const N = this.stack.pop();
        const M = this.stack.pop();
        this.stack.push(N >= M ? 1 : 0);
      } break;

      // Menor que
      case 'LT': {
        const N = this.stack.pop();
        const M = this.stack.pop();
        this.stack.push(N < M ? 1 : 0);
      } break;

      // Menor o igual que
      case 'LTE': {
        const N = this.stack.pop();
        const M = this.stack.pop();
        this.stack.push(N <= M ? 1 : 0);
      } break;

      case 'AND': {
        const N = this.stack.pop();
        const M = this.stack.pop();
        this.stack.push(N && M ? 1 : 0);
      } break;

      case 'OR': {
        const N = this.stack.pop();
        const M = this.stack.pop();
        this.stack.push(N || M ? 1 : 0);
      } break;

      case 'XOR': {
        const N = this.stack.pop();
        const M = this.stack.pop();
        this.stack.push(N ^ M);// Funciona este operador?
      } break;

      case 'NOT': {
        const N = this.stack.pop();
        this.stack.push(N ? 0 : N);
      } break;

      // String null test
      case 'SNT': {
        const V = this.stack.pop();
        this.stack.push(V === "" ? 1 : 0);
      } break;

      // Concatenar strings
      case 'CAT': {
        const H1 = this.stack.pop();
        const H2 = this.stack.pop();
        this.stack.push(H1.concat(H2));
      } break;

      // Convertir a string
      case 'TOS': {
        const V = this.stack.pop();
        this.stack.push(V.toString());
      } break;

      // List null test
      case 'LNT': {
        const V = this.stack.pop();
        this.stack.push(Array.isArray(V) && V.length === 0 ? 1 : 0);
      } break;

      // Insertar al inicio de la lista
      case 'LIN': {
        const V = this.stack.pop();
        const L = this.stack.pop();
        L.unshift(V);
        this.stack.push(L);
      } break;

      // Tomar el k-ésimo elemento de la lista
      case 'LTK': {
        const K = this.stack.pop();
        const V = this.stack.pop();
        this.stack.push(V[K]);
      } break;

      // Tomar el resto después del k-ésimo elemento de la lista
      case 'LRK': {
        const K = this.stack.pop();
        const V = this.stack.pop();
        this.stack.push(V.slice(K));
      } break;

      // Convertir a lista
      case 'TOL': {
        const V = this.stack.pop();
        this.stack.push(Array.of(V));
      } break;

      case 'NOP': {
        // No hacer nada
      } break;
      
      // Salta N instrucciones
      case 'BR': {
        const N = args[0];
        this.code += N;
      } break;

      // Salta N instrucciones si es verdadero
      case 'BT': {
        const N = args[0];
        if (this.stack.pop()) {
          this.code += N;
        } else {
          this.code++;
        }
      } break;

      // Salta N instrucciones si es falso
      case 'BF': {
        const N = args[0];
        if (!this.stack.pop()) {
          this.code += N;
        } else {
          this.code++;
        }
      } break;

      case 'LDF': {
        const functionName = args[0];
        // Buscar la función en los bindings (closure = función + entorno)
        const closure = this.findFunction(functionName); // Se va a D y posiciona su PC
        this.stack.push(closure);
      } break;

      case 'APP': {
        const closure = this.stack.pop(); // La closure es la función que vamos a aplicar
        const value = this.stack.pop(); // El valor que pasamos como argumento
        const [C, S, B, D] = closure; // Cuerpo de la función, stack, bindings y contexto de la closure
        // return $k
        // Empujamos el valor de entrada al nuevo contexto de bindings
        const newBindings = [...B]; // Hacemos una copia de los bindings
        newBindings.push(value);
      
        // Guardamos el contexto actual para restaurarlo más tarde
        this.contexts.push([this.code, this.stack, this.bindings]);
      
        // Ejecutamos el cuerpo de la closure
        this.code = C;
        this.stack = S;
        this.bindings = newBindings;
      } break;      
      
      case 'RET': {
        const returnValue = this.stack.pop(); // Valor de retorno
        const [savedCode, savedStack, savedBindings] = this.contexts.pop(); // Restauramos el contexto anterior
      
        // Restauramos el contexto y apilamos el valor de retorno
        this.code = savedCode;
        this.stack = [returnValue, ...savedStack]; // Apilamos el valor de retorno
        this.bindings = savedBindings;
      } break;      

      case 'CST': {
        const type = args[0]; // Tipo objetivo (number, list, string)
        const value = this.stack.pop();
      
        // Verificamos si el valor es del tipo adecuado
        if (
          (type === 'number' && typeof value === 'number') ||
          (type === 'list' && Array.isArray(value)) ||
          (type === 'string' && typeof value === 'string')
        ) {
          this.stack.push(value); // Si coincide el tipo, lo apilamos de nuevo
        } else {
          throw new Error(`Casting fallido: ${value} no es del tipo ${type}`);
        }
      } break;      

      case 'INO': {
        const type = args[0]; // Tipo a verificar (number, list, string)
        const value = this.stack.pop();
        
        // Verificamos si el valor es del tipo indicado
        const isInstanceOf = 
          (type === 'number' && typeof value === 'number') ||
          (type === 'list' && Array.isArray(value)) ||
          (type === 'string' && typeof value === 'string');
      
        this.stack.push(isInstanceOf ? 1 : 0); // Apilamos 1 si es del tipo, 0 si no
      } break;      

      case 'PRN': {
        const N = this.stack.pop();
        console.log(N);
        this.stack.push(N);
      } break;
    }
  }
}

export default BiesVM;