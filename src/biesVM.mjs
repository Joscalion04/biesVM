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
    this.bindings = [[]]; // B
    this.contexts = []; // D
  }

  /** 
  * Este método busca en la lista de contextos disponibles y devuelve el que está marcado como 
  * `ACTUAL`.
  * @method getActualContext
  * 
  * @returns {Object|undefined} El contexto actual o `undefined` si no existe.
  */
  getActualContext() {
    return this.contexts.find(context => context.ACTUAL);
  }

  /** 
  * Este método busca en la lista de contextos disponibles y devuelve el que coincide 
  * con el valor de `FUN` proporcionado.
  * @method findContextByFUN
  * 
  * @param {string} functionClosure - El valor de `FUN` que se busca en los contextos.
  * @returns {Object|undefined} El contexto que coincide con `FUN` o `undefined` si no existe.
  */
  findContextByFUN(functionClosure) {
    return this.contexts.find(context => context.FUN === functionClosure);
  }

  /** 
  * Este método crea un nuevo contexto y lo agrega a la lista de contextos.
  * 
  * @method createNewContext
  * 
  * @param {string} arg - El valor de `FUN` para el nuevo contexto.
  * @param {boolean} [actual=false] - Indica si el nuevo contexto es el actual.
  * @param {any} K - Un valor asociado al nuevo contexto.
  */
  createNewContext(arg, actual = false, K) {
    this.contexts.push({context: {code: []}, PC: 0, ACTUAL: actual, FUN: arg, previousFUN: this.getActualContext()? this.getActualContext().FUN : null, K: K});
  }

  /** 
  * Este método elimina y retorna el último elemento de la pila si se cumplen las condiciones 
  * relacionadas con el valor de `K` en el contexto actual.
  * 
  * @method pop
  * 
  * @returns {any} El valor eliminado de la pila.
  * @throws {Error} Lanza un error si `K` es igual a 0.
  */
  pop() {
    if (this.getActualContext().K === null || this.getActualContext().K >= 0) {
      const V = this.stack.pop();
      if (this.getActualContext().K !== null) {
        this.getActualContext().K--;
      }
      return V;
    } else {
      throw new Error('No se puede hacer POP con K = 0');
    }
  }

  /** 
  * Este método solicita una entrada del usuario a través de la consola y 
  * retorna una promesa que se resuelve con el valor ingresado.
  * 
  * @method getInput
  * 
  * @returns {Promise<string>} Una promesa que se resuelve con la entrada del usuario.
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
  * Ejecuta una instrucción basada en el argumento proporcionado o la instrucción actual.
  * El método maneja diferentes tipos de instrucciones, modificando la pila y los contextos según sea necesario.
  * 
  * @async
  * @method executeInstruction
  * 
  * @param {Array<string>} [arg] - Argumento auxiliar para ejecutar el comando 'INI', que debe ser un array que contenga 
  *                                  una cadena (como 'INI') y un valor adicional.
  * 
  * @returns {Promise<string|null>} Retorna una promesa que se resuelve con 'FIN' si se ejecuta la instrucción 'HLT', 
  *                                  o null si la instrucción se ejecuta normalmente.
  * 
  * @throws {Error} Lanza un error si ocurre un fallo en el casteo de tipos en la instrucción 'CST'.
 */
  async executeInstruction(arg) { // arg auxiliar para ejecutar el INI mientras se guardan las instrucciones en el code, solo tiene ['INI', $n]
    
    const actualCode = this.getActualContext() ? this.code[this.getActualContext().PC] : null;
    console.log(actualCode);
    switch (arg ? (arg[0] != null ? arg[0] : actualCode.mnemonic) : actualCode.mnemonic) {
      // Inicializar
      case 'INI': {
        if (this.contexts.length === 0) {
            this.createNewContext(arg[1], true, null);
            this.getActualContext().PC = -1;
        }
      } break;

      // Stop
      case 'HLT': {
        this.code = [];
        this.stack = [];
        this.bindings = [[]];
        this.contexts = [];
        return 'FIN';
      } break;

      case 'POP': {
        this.pop();
      } break;

      // Swap
      case 'SWP': {
        const N = this.pop();
        const M = this.pop()
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
        this.stack.push(this.bindings[actualCode.args[0]][actualCode.args[1]]);
      } break;

      case 'BST': {
        const V = this.pop();// Variable
        const E = parseInt(actualCode.args[0]); // Binding
        const K = parseInt(actualCode.args[1]); 
        this.bindings[E][K] = V;
      } break;

      case 'ADD': {
        const N = parseInt(this.pop()); console.log(N)
        const M = parseInt(this.pop()); console.log(M)
        if (typeof N === 'number' && typeof M === 'number') {
          this.stack.push(N + M);
        }
      } break;

      case 'MUL': {
        const N = parseInt(this.pop());
        const M = parseInt(this.pop()); 
        if (typeof N === 'number' && typeof M === 'number') {
          this.stack.push(N * M);
        }
      } break;

      case 'DIV': {
        const N = parseInt(this.pop()); 
        const M = parseInt(this.pop()); 
        if (typeof N === 'number' && typeof M === 'number') {
          this.stack.push(N / M);
        }
      } break;

      case 'SUB': {
        const N = parseInt(this.pop()); 
        const M = parseInt(this.pop()); 
        if (typeof N === 'number' && typeof M === 'number') {
          this.stack.push(N - M);
        }
      } break;
      
      // Negación
      case 'NEG': {
        const N = this.pop()
        if (typeof N === 'number') {
          this.stack.push(-N);
        }
      } break;

      // Signo
      case 'SGN': {
        const N = this.pop()
        if (typeof N === 'number') {
          this.stack.push(Math.sign(N) > 0 ? 1 : 0);//Revisar
        }
      } break;

      // Igual
      case 'EQ': {
        const N = this.pop()
        const M = this.pop()
        this.stack.push(N === M ? 1 : 0);
      } break;

      // Mayor que
      case 'GT': {
        const N = this.pop()
        const M = this.pop()
        this.stack.push(N > M ? 1 : 0);
      } break;

      // Mayor o igual que
      case 'GTE': {
        const N = this.pop()
        const M = this.pop()
        this.stack.push(N >= M ? 1 : 0);
      } break;

      // Menor que
      case 'LT': {
        const N = this.pop()
        const M = this.pop()
        this.stack.push(N < M ? 1 : 0);
      } break;

      // Menor o igual que
      case 'LTE': {
        const N = this.pop()
        const M = this.pop()
        this.stack.push(N <= M ? 1 : 0);
      } break;

      case 'AND': {
        const N = this.pop()
        const M = this.pop()
        this.stack.push(N && M ? 1 : 0);
      } break;

      case 'OR': {
        const N = this.pop()
        const M = this.pop()
        this.stack.push(N || M ? 1 : 0);
      } break;

      case 'XOR': {
        const N = this.pop()
        const M = this.pop()
        this.stack.push(N ^ M);// Funciona este operador?
      } break;

      case 'NOT': {
        const N = this.pop()
        this.stack.push(N ? 0 : N);
      } break;

      // String null test
      case 'SNT': {
        const V = this.pop()
        this.stack.push(V === "" ? 1 : 0);
      } break;

      // Concatenar strings
      case 'CAT': {
        const H1 = this.pop()
        const H2 = this.pop()
        this.stack.push(H1.concat(H2));
      } break;

      // Convertir a string
      case 'TOS': {
        const V = this.pop()
        this.stack.push(V.toString());
      } break;

      // List null test
      case 'LNT': {
        const V = this.pop()
        this.stack.push(Array.isArray(V) && V.length === 0 ? 1 : 0);
      } break;

      // Insertar al inicio de la lista
      case 'LIN': {
        const V = this.pop()
        const L = this.pop()
        L.unshift(V);
        this.stack.push(L);
      } break;

      // Tomar el k-ésimo elemento de la lista
      case 'LTK': {
        const K = this.pop()
        const V = this.pop()
        this.stack.push(V[K]);
      } break;

      // Tomar el resto después del k-ésimo elemento de la lista
      case 'LRK': {
        const K = this.pop()
        const V = this.pop()
        this.stack.push(V.slice(K));
      } break;

      // Convertir a lista
      case 'TOL': {
        const V = this.pop()
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
        if (this.pop()) {
          this.code += N;
        } else {
          this.code++;
        }
      } break;

      // Salta N instrucciones si es falso
      case 'BF': {
        const N = args[0];
        if (!this.pop()) {
          this.code += N;
        } else {
          this.code++;
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
        const closure = this.pop();// La closure es la función que vamos a aplicar
        const V = this.pop();

        // Guardamos el contexto actual
        const actualContext = this.getActualContext();
        actualContext.context = {code: this.code};
        actualContext.ACTUAL = false;

        // Ponemos el contexto de la nueva función en actual  
        const newContext = this.findContextByFUN(closure);
        newContext.ACTUAL = true;
        this.code = newContext.context.code;
        newContext.K = actualCode.args[0] ? actualCode.args[0] : 1;// Guardamos el K de la función
        newContext.PC = 0;  // Inicializamos el PC
        this.bindings.push([V]); // Creamos un nuevo ambiente para la función
        
        console.log(`Entrando a función ${closure}\n`);

        return closure;
      } break;      
      
      case 'RET': {
        // Guardamos el contexto actual
        const actualContext = this.getActualContext();
        actualContext.context = {code: []};
        actualContext.ACTUAL = false;

        // Ponemos el contexto anterior en actual
        const previousContext = this.findContextByFUN(actualContext.previousFUN);
        previousContext.ACTUAL = true;
        this.code = previousContext.context.code;

        console.log(`Saliendo de función ${actualContext.FUN}\n`);
        console.log(`Entrando a función ${previousContext.FUN}\n`);
      } break;      

      case 'CST': {
        const type = actualCode.args[0]; // Tipo objetivo (number, list, string)
        const value = this.pop()
      
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
        const type = actualCode.args[0]; // Tipo a verificar (number, list, string)
        const value = this.pop()
        
        // Verificamos si el valor es del tipo indicado
        const isInstanceOf = 
          (type === 'number' && typeof value === 'number') ||
          (type === 'list' && Array.isArray(value)) ||
          (type === 'string' && typeof value === 'string');
      
        this.stack.push(isInstanceOf ? 1 : 0); // Apilamos 1 si es del tipo, 0 si no
      } break;      

      case 'PRN': {
        const N = this.pop()
        console.log(N);
        this.stack.push(N);
      } break;

      // Tomar el k-ésimo elemento de un string
      case 'STK': {
        const K = this.pop()
        const V = this.pop()
        this.stack.push(V[K]);
      } break;

      // Tomar el resto después del k-ésimo elemento del string
      case 'SRK': {
        const K = this.pop()
        const V = this.pop()
        this.stack.push(V.slice(K));
      } break;

      // Guardar el input de consola en en stack
      case 'INP': {
        const input = await this.getInput();
        this.stack.push(input);
      } break;
    }
    // Incrementamos el PC
    this.getActualContext().PC++;
    return null;
  }

  // /**
  // * Busca y devuelve la closure de una función por su nombre recorriendo los contextos 
  // * cada contexto va a tener algo parecido a un json: [{FUN: '$0', PC: '', ACTUAL: true}, {FUN: '$1', PC: '', ACTUAL: false}]
  // *
  // * @param functionName El nombre de la función a buscar.
  // * @return La closure asociada a la función encontrada.
  // * @throws Error Si la función no se encuentra en los contextos.
  // */
  // findFunction(functionName) {
  //   for (let i = this.contexts.length - 1; i >= 0; i--) {
  //     const context = this.contexts[i];
  //     const closure = context.find(c => c.FUN === functionName);
  //     if (closure) {
  //       return closure;
  //     }
  //   }
  //   throw new Error(`Función ${functionName} no encontrada`);
  // }
}

export default BiesVM;