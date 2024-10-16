import readline from 'readline';

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
    this.bindings = [{fun: null, binding:[]}]; // B
    this.contexts = []; // D
  }

  getActualContext() {
    return this.contexts.find(context => context.ACTUAL);
  }

  findContextByFUN(functionClosure) {
    return this.contexts.find(context => context.FUN === functionClosure);
  }

  createNewContext(arg, actual = false, K) {
    this.contexts.push({context: {code: []}, PC: 0, ACTUAL: actual, FUN: arg, previousFUN: null, K: K, parent: this.getActualContext() ? this.getActualContext().FUN : arg});
  }

  // pop() {
  //   if (this.getActualContext().K === null || this.getActualContext().K >= 0) {
     
  //     const V = this.stack.pop();
      
  //     if (this.getActualContext().K !== null) {
  //       this.getActualContext().K--;
  //     }
  //     return V;
  //   } else {
  //     throw new Error('No se puede hacer POP con K = 0');
  //   }
  // }

  /**
   * Obtiene la entrada del usuario de manera asíncrona.
   * @returns {Promise<string>} - Retorna una promesa que se resuelve con la entrada del usuario.
  */
  getInput() {
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

  /**
  * Ejecuta una instrucción basada en el mnemónico proporcionado. La lógica varía 
  * dependiendo del tipo de instrucción, incluyendo operaciones aritméticas, lógicas,
  * manipulación de la pila y control de flujo.
  *
  * @param mnemonic El mnemónico de la instrucción a ejecutar.
  * @param args Los argumentos adicionales requeridos para la ejecución de la instrucción.
  */
  async executeInstruction(arg) { // arg auxiliar para ejecutar el INI mientras se guardan las instrucciones en el code, solo tiene ['INI', $n]
    
    const actualCode = this.getActualContext() ? this.code[this.getActualContext().PC] : null;

    console.log("\n\n\n\nCODE: ",actualCode);
    console.log("STACK: ",this.stack);
    console.log("BINDINGS: ", this.bindings.map(binding => binding.binding.map(b => b)));
    console.log("CONTEXTS: ",this.contexts);

    //console.log("PC: ",this.getActualContext() ? this.getActualContext().PC : '');
    switch (arg ? (arg[0] != null ? arg[0] : actualCode.mnemonic) : actualCode.mnemonic) {
      // Inicializar
      case 'INI': {
        if (this.contexts.length === 0) {
            this.createNewContext(arg[1], true, null);
            this.getActualContext().PC = -1;
            this.bindings[0].fun = this.getActualContext().FUN;
        }
      } break;

      // Stop
      case 'HLT': {
        this.code = [];
        this.stack = [];
        this.bindings = [{fun: null, binding:[]}];
        this.contexts = [];
        return 'FIN';
      } break;

      case 'POP': {
        this.stack.pop();
      } break;

      // Swap
      case 'SWP': {
        const N = this.stack.pop();
        const M = this.stack.pop()
        this.stack.push(N);
        this.stack.push(M);
      } break;

      // Load Value
      case 'LDV': {
        const V = actualCode.args[0];
        this.stack.push(V);
      } break;

      // Load desde ambiente
      case 'BLD': {
        this.stack.push(this.bindings[actualCode.args[0]].binding[actualCode.args[1]]);
      } break;

      case 'BST': {
        const V = this.stack.pop();// Variable
        const E = parseInt(actualCode.args[0]); // Binding
        const K = parseInt(actualCode.args[1]); 
        this.bindings[E].binding[K] = V;
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
        const numero = Number(N);
        if (!isNaN(numero)) {
          this.stack.push(-numero);
        } else {
          this.stack.push(N);// Devolver el valor original
          // Lanzar un error si la conversión falla
          throw new Error(`Error: No se puede aplicar NEG. El valor '${N}' no es un número válido.`);
        }
      } break;
    
      // Signo
      case 'SGN': {
        const N = this.stack.pop();
        if (typeof N === 'number') {
          this.stack.push(Math.sign(N) >= 0 ? 1 : 0);//Revisar
        }
      } break;

      // Igual
      case 'EQ': {
        const N = this.stack.pop();
        const M = this.stack.pop();
       
        this.stack.push(N == M ? 1 : 0);
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
        const V = this.stack.pop()
        
        this.stack.push(V === "" ? 1 : 0);
      
      } break;

      // Concatenar strings
      case 'CAT': {
        const H1 = this.stack.pop();
        const H2 = this.stack.pop();
        if (H1 === undefined || H1 === null) {
          this.stack.push(H2);
        } else if (H2 === undefined || H2 === null) {
          this.stack.push(H1);
        } else {
          this.stack.push(H1.concat(H2));
        }
      } break;

      // Convertir a string
      case 'TOS': {
        const V = this.stack.pop()
        this.stack.push(V.toString());
      } break;

      // List null test
      case 'LNT': {
        const V = this.stack.pop()

        this.stack.push(Array.isArray(V) && V.length === 0 ? 1 : 0);
      } break;

      // Insertar al inicio de la lista
      case 'LIN': {
        const V = this.stack.pop(); console.log(V);
        const L = this.stack.pop(); console.log(L)
        L.unshift(V);
        this.stack.push(L);
      } break;

      // Tomar el k-ésimo elemento de la lista
      case 'LTK': {
        const K = this.stack.pop();
        const V = this.stack.pop();

        this.stack.push(V[K]);// meter el k-ésimo elemento en la pila
      } break;

      // Tomar el resto después del k-ésimo elemento de la lista
      case 'LRK': {
        const K = actualCode.args[0]; // Extraemos el índice K directamente desde los argumentos
        const V = this.stack.pop(); // Extraemos el valor V de la pila (debería ser una lista o cadena)

        // Verificamos si V es una cadena o una lista antes de aplicar slice
        if (typeof V === 'string' || Array.isArray(V)) {
            this.stack.push(V.slice(K)); // Si es válido, aplicamos slice y empujamos el resultado
        } else {
            throw new Error(`El valor ${V} no es una cadena ni una lista, no se puede aplicar slice.`);
        }
    } break;
    

      // Convertir a lista
      case 'TOL': {
        const V = this.stack.pop()
        this.stack.push(Array.of(V));
      } break;

      case 'NOP': {
        // No hacer nada
      } break;
      
      // Salta N instrucciones
      case 'BR': {
        const N = actualCode.args[0];
     
        this.getActualContext().PC += parseInt(N);
        return null;
      } break;

      // Salta N instrucciones si es verdadero
      case 'BT': {
        const N = actualCode.args[0];
      
        if (this.stack.pop() === 1) {
          
          this.getActualContext().PC += parseInt(N);
          return null;
        }
      } break;

      // Salta N instrucciones si es falso
      case 'BF': {
        const N = actualCode.args[0];
        if (this.stack.pop() === 0) {
          this.getActualContext().PC += parseInt(N);
          return null;
        }
      } break;

      case 'LDF': {
        const closure = this.findContextByFUN(actualCode.args[0]) ? this.findContextByFUN(actualCode.args[0]).FUN : null;
        if (closure) {// Si la función ya existe, la metemos en la pila
          this.stack.push(closure);
        } else {  // Si no, creamos un nuevo contexto para esa función y la metemos en la pila
          this.createNewContext(actualCode.args[0]);
          this.stack.push(this.findContextByFUN(actualCode.args[0]).FUN);
        }
      } break;

      case 'APP': {
        const closure = this.stack.pop();  // La closure es la función que vamos a aplicar

        // Guardamos el contexto actual
        const actualContext = this.getActualContext();
        actualContext.context = { code: this.code };
        actualContext.ACTUAL = false;
    
        // Ponemos el contexto de la nueva función en actual  
        const newContext = this.findContextByFUN(closure);
        if (!newContext) {
            throw new Error(`La función ${closure} no existe.`);
        }
    
        // Actualizamos el nuevo contexto
        newContext.ACTUAL = true;
        this.code = newContext.context.code;
        newContext.K = actualCode.args[0] || 1;  // Guardamos el K de la función
        newContext.PC = 0;  // Inicializamos el PC para empezar desde el inicio
        newContext.previousFUN = actualContext.FUN;

        const arr = [];

        for (let i = 0; i < newContext.K; i++) {
          arr.push(this.stack.pop());
        }
    
        // Verificamos si el ambiente pertenece a una nueva función o la misma
        const isNewFunction = actualContext.FUN !== newContext.FUN;
    
        if (isNewFunction) {
          // Si es una nueva función, creamos un nuevo ambiente
          this.bindings.unshift({ fun: newContext.FUN, binding: arr });
        } else {
          // Si es la misma función, actualizamos el ambiente existente
          const bindingIndex = this.bindings.findIndex(binding => binding.fun === newContext.FUN);
          const binding = this.bindings.splice(bindingIndex, 1)[0];
          this.bindings.unshift(binding);
          this.bindings[0].binding = arr;
        }
    
        return closure;
      }
    
      case 'RET': {
        // Guardamos el contexto actual
        const actualContext = this.getActualContext();
        actualContext.context = {code: []};
        actualContext.ACTUAL = false;

        // Ponemos el contexto anterior en actual
        const previousContext = this.findContextByFUN(actualContext.previousFUN);
        const parentContext = this.findContextByFUN(previousContext.parent);
        const contextToActivate = previousContext.context.code.length === 0 ? parentContext : previousContext;// Si la función anterior no tiene código, activamos la función padre
        
        contextToActivate.ACTUAL = true;

        const bindingIndex = this.bindings.findIndex(binding => binding.fun === contextToActivate.FUN);
        const binding = this.bindings.splice(bindingIndex, 1)[0];
        this.bindings.unshift(binding);

        this.code = contextToActivate.context.code;
      } break;      

      case 'CST': {
        const type = actualCode.args[0]; // Tipo objetivo (number, list, string)
        const value = this.stack.pop()
      
        // Verificamos si el valor es del tipo adecuado
        if (type === 'number') {
          const number = Number(value);
          if (!isNaN(number)) {
            this.stack.push(number);
          } else {
            this.stack.push(value);// Devolver el valor original
            throw new Error(`Casting fallido: ${value} no es un número`);
          }
        } else if (type === 'list') {
          if (Array.isArray(value)) {
            this.stack.push(value);
          } else {
            this.stack.push(value);// Devolver el valor original
            throw new Error(`Casting fallido: ${value} no es una lista`);
          }
        } else if (type === 'string') {
          this.stack.push(String(value));
        } else {
          this.stack.push(value);// Devolver el valor original
          throw new Error(`Casting fallido: ${value} no es del tipo ${type}`);
        }
      } break;      

      case 'INO': {
        const type = actualCode.args[0]; // Tipo a verificar (number, list, string)
        const value = this.stack.pop()
        
        // Verificamos si el valor es del tipo indicado
        const isInstanceOf = 
          (type === 'number' && typeof value === 'number') ||
          (type === 'list' && Array.isArray(value)) ||
          (type === 'string' && typeof value === 'string');
      
        this.stack.push(isInstanceOf ? 1 : 0); // Apilamos 1 si es del tipo, 0 si no
      } break;      

      case 'PRN': {
        const N = this.stack.pop()
        console.log(N);
      } break;

      // Tomar el k-ésimo elemento de un string
      case 'STK': {
        const K = this.stack.pop();
        const V = this.stack.pop();

        this.stack.push(V[K]);
      } break;

      // Tomar el resto después del k-ésimo elemento del string
      case 'SRK': {
        const K = this.stack.pop();
        const V = this.stack.pop();

        this.stack.push(V.slice(K));
      } break;

      // Guardar el input de consola en en stack
      case 'INP': {
        const input = await this.getInput();
        this.stack.push(input);
      } break;
    }


    // console.log("\n\n\n\nCODE: ",actualCode);
    // console.log("STACK: ",this.stack);
    // console.log("BINDINGS: ", this.bindings.map(binding => binding.binding.map(b => b)));
    // console.log("CONTEXTS: ",this.contexts);

    // Incrementamos el PC
    this.getActualContext().PC++;
    return null;
  }
}

export default BiesVM;