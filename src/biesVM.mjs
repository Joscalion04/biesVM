import readline from 'readline';
import { getInput } from './IO_Operator.mjs'; // Asegúrate de usar la ruta correcta
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
    this.contexts.push({context: {code: []}, PC: 0, ACTUAL: actual, FUN: arg, previousFUN: null, K: K, parent: this.getActualContext() ? this.getActualContext().FUN : arg});
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
  * @returns {Promise<string|null>} Retorna una promesa que se resuelve con 'FIN' si se ejecuta la instrucción 'HLT', 
  *                                  o null si la instrucción se ejecuta normalmente.
  * @throws {Error} Lanza un error si ocurre un fallo en el casteo de tipos en la instrucción 'CST'.
 */
  async executeInstruction(arg) { // arg auxiliar para ejecutar el INI mientras se guardan las instrucciones en el code, solo tiene ['INI', $n]
    
    const actualCode = this.getActualContext() ? this.code[this.getActualContext().PC] : null;

    // console.log(actualCode);

    switch (arg ? (arg[0] != null ? arg[0] : actualCode.mnemonic) : actualCode.mnemonic) {
      // Inicializar
      case 'INI': {
          this.contexts.length === 0 ? ((this.createNewContext(arg[1], true, null), 
            this.getActualContext().PC = -1, this.bindings[0].fun = this.getActualContext().FUN)
          ) : null;
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
        this.stack.push(actualCode.args[0]);
      } break;

      // Load desde ambiente
      case 'BLD': {
        this.stack.push(this.bindings[actualCode.args[0]].binding[actualCode.args[1]]);
      } break;

      case 'BST': {
        const V = this.stack.pop();// Variable
        const E = parseInt(actualCode.args[0]); // Binding
        const K = parseInt(actualCode.args[1]); 
        this.bindings[parseInt(actualCode.args[0])].binding[parseInt(actualCode.args[1])] = V;
      } break;

      case 'ADD': {
        const N = parseInt(this.stack.pop());
        const M = parseInt(this.stack.pop());
        (typeof N === 'number' && typeof M === 'number') ? this.stack.push(N + M) : null;
      } break;

      case 'MUL': {
        const N = parseInt(this.stack.pop());
        const M = parseInt(this.stack.pop()); 
        (typeof N === 'number' && typeof M === 'number') ? this.stack.push(N * M) : null;
      } break;

      case 'DIV': {
        const N = parseInt(this.stack.pop()); 
        const M = parseInt(this.stack.pop()); 
        (typeof N === 'number' && typeof M === 'number') ? this.stack.push(N / M) : null;
      } break;

      case 'SUB': {
        const N = parseInt(this.stack.pop()); 
        const M = parseInt(this.stack.pop()); 
        (typeof N === 'number' && typeof M === 'number') ? this.stack.push(N - M) : null;
      } break;
      
      // Negación
      case 'NEG': {
        const N = this.stack.pop();
        const numero = Number(N);
        !isNaN(numero) 
        ? this.stack.push(-numero) 
        : (this.stack.push(N), (() => { 
          throw new Error(`Error: No se puede aplicar NEG. El valor '${N}' no es un número válido.`); 
        })());
      } break;
    
      // Signo
      case 'SGN': {
        const N = this.stack.pop();
        typeof N === 'number' ? this.stack.push(Math.sign(N) >= 0 ? 1 : 0) : null;
      } break;

      // Igual
      case 'EQ': {
        this.stack.push(this.stack.pop() == this.stack.pop() ? 1 : 0);
      } break;

      // Mayor que
      case 'GT': {
        this.stack.push(this.stack.pop() > this.stack.pop() ? 1 : 0);
      } break;

      // Mayor o igual que
      case 'GTE': {
        this.stack.push(this.stack.pop() >= this.stack.pop() ? 1 : 0);
      } break;

      // Menor que
      case 'LT': {
        this.stack.push(this.stack.pop() < this.stack.pop() ? 1 : 0);
      } break;

      // Menor o igual que
      case 'LTE': {
        this.stack.push(this.stack.pop() <= this.stack.pop() ? 1 : 0);
      } break;

      case 'AND': {
        this.stack.push(this.stack.pop() && this.stack.pop() ? 1 : 0);
      } break;

      case 'OR': {
        this.stack.push(this.stack.pop() || this.stack.pop() ? 1 : 0);
      } break;

      case 'XOR': {
        this.stack.push(this.stack.pop() ^ this.stack.pop());// Funciona este operador?
      } break;

      case 'NOT': {
        this.stack.push(this.stack.pop() ? 0 : N);
      } break;

      // String null test
      case 'SNT': {
        this.stack.push(this.stack.pop() === "" ? 1 : 0);
      } break;

      // Concatenar strings
      case 'CAT': {
        const H1 = this.stack.pop();
        const H2 = this.stack.pop();
        H1 === undefined || H1 === null ? this.stack.push(H2)
            : H2 === undefined || H2 === null ? this.stack.push(H1)
                : this.stack.push(String(H1).concat(String(H2)));

      } break;

      // Convertir a string
      case 'TOS': {
        this.stack.push(this.stack.pop().toString());
      } break;

      // List null test
      case 'LNT': {
        const V = this.stack.pop()
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
        this.stack.push(V[K]);// meter el k-ésimo elemento en la pila
      } break;

      // Tomar el resto después del k-ésimo elemento de la lista
      case 'LRK': {
        const K = this.stack.pop(); // Extraemos el índice K directamente desde los argumentos
        const V = this.stack.pop(); // Extraemos el valor V de la pila (debería ser una lista o cadena)
        // Verificamos si V es una cadena o una lista antes de aplicar slice
        typeof V === 'string' || Array.isArray(V) ? this.stack.push(V.slice(K)) 
        : (() => { throw new Error(`El valor ${V} no es una cadena ni una lista, no se puede aplicar slice.`); })();
      } break;
      // Convertir a lista
      case 'TOL': {
        this.stack.push(Array.of(this.stack.pop()));
      } break;

      case 'NOP': {
        // No hacer nada
      } break;
      
      // Salta N instrucciones
      case 'BR': {
        this.getActualContext().PC += parseInt(actualCode.args[0]);
        return null;
      } break;

      // Salta N instrucciones si es verdadero
      case 'BT': {
        if (this.stack.pop() === 1) {
          this.getActualContext().PC += parseInt(actualCode.args[0]);
          return null;
        }
      } break;

      // Salta N instrucciones si es falso
      case 'BF': {
        if (this.stack.pop() === 0) {
          this.getActualContext().PC += parseInt(actualCode.args[0]);
          return null;
        }
      } break;

      case 'LDF': {
        const closure = this.findContextByFUN(actualCode.args[0])?.FUN || (this.createNewContext(actualCode.args[0]), this.findContextByFUN(actualCode.args[0]).FUN);
        this.stack.push(closure);
      } break;

      case 'APP': {

        const closure = this.stack.pop(); // La closure es la función que vamos a aplicar

        // Guardamos el contexto actual
        const actualContext = this.getActualContext();
        actualContext.context = { code: this.code };
        actualContext.ACTUAL = false;

        // Ponemos el contexto de la nueva función en actual  
        const newContext = this.findContextByFUN(closure) || (() => { throw new Error(`La función ${closure} no existe.`); })();
        
        // Actualizamos el nuevo contexto
        newContext.ACTUAL = true;
        this.code = newContext.context.code;
        newContext.K = actualCode.args[0] || 1; // Guardamos el K de la función
        newContext.PC = 0; // Inicializamos el PC para empezar desde el inicio
        newContext.previousFUN = actualContext.FUN;
        // Extraemos los argumentos de la pila
        const arr = Array.from({ length: newContext.K }, () => this.stack.pop());
        arr.reverse(); // Invertimos el orden de los argumentos
        
        // Verificamos si el ambiente pertenece a una nueva función o la misma
        const isNewFunction = actualContext.FUN !== newContext.FUN;
        
        // Manejo del ambiente según el tipo de función
        if (isNewFunction) {
            // Si es una nueva función, creamos un nuevo ambiente
            this.bindings.unshift({ fun: newContext.FUN, binding: arr });
        } else {
            // Si es la misma función, actualizamos el ambiente existente
            const bindingIndex = this.bindings.findIndex(binding => binding.fun === newContext.FUN);
            const binding = this.bindings.splice(bindingIndex, 1)[0]; // Extraemos el binding existente
            this.bindings.unshift(binding);
            this.bindings[0].binding = arr; // Actualizamos el binding
        }
        
        return closure;
        
      }
    
      case 'RET': {
        // Guardamos el contexto actual
        const actualContext = this.getActualContext();
        actualContext.context = { code: [] };
        actualContext.ACTUAL = false;

        // Determinamos el contexto a activar
        const previousContext = this.findContextByFUN(actualContext.previousFUN);
        const parentContext = this.findContextByFUN(previousContext.parent);
        const contextToActivate = previousContext.context.code.length === 0 ? parentContext : previousContext; // Activamos la función padre si no hay código

        // Activamos el contexto seleccionado
        contextToActivate.ACTUAL = true;

        // Actualizamos la lista de bindings
        const bindingIndex = this.bindings.findIndex(binding => binding.fun === contextToActivate.FUN);
        const [binding] = this.bindings.splice(bindingIndex, 1); // Extraemos el binding existente
        this.bindings.unshift(binding);

        // Asignamos el código del contexto activo
        this.code = contextToActivate.context.code;

      } break;      

      case 'CST': {
        const value = this.stack.pop();

        // Función para manejar el casting
        const castValue = (value, type) => {
            const castingFunctions = {
                number: (v) => {
                    const number = Number(v);
                    return !isNaN(number) ? number : undefined;
                },
                list: (v) => (Array.isArray(v) ? v : undefined),
                string: (v) => {
                    // Si v es una lista, unir los elementos en un string sin comas
                    return Array.isArray(v) ? v.join(' ') : String(v);
                },
            };
            return castingFunctions[type] ? castingFunctions[type](value) : value;
        };

        // Verificamos el resultado y manejamos los errores
        const castedValue = castValue(value, actualCode.args[0]);
        if (castedValue !== undefined) {
            this.stack.push(castedValue);
        } else {
            this.stack.push(value);
            throw new Error(`Casting fallido: ${value} no es del tipo ${actualCode.args[0]}`);
        }

      } break;      

      case 'INO': {
        const value = this.stack.pop()
        // Verificamos si el valor es del tipo indicado
        const isInstanceOf = 
          (actualCode.args[0] === 'number' && typeof value === 'number') ||
          (actualCode.args[0] === 'list' && Array.isArray(value)) ||
          (actualCode.args[0] === 'string' && typeof value === 'string');
        this.stack.push(isInstanceOf ? 1 : 0); // Apilamos 1 si es del tipo, 0 si no
      } break;      

      case 'PRN': {
        console.log(this.stack.pop());
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
        const input = await getInput();
        this.stack.push(input);
      } break;

      case 'POW': {
        const exponent = this.stack.pop();
        const base = this.stack.pop();
      
        if (typeof base !== 'number' || typeof exponent !== 'number') {
            throw new Error('**: Both base and exponent must be numbers');
        }
        const result = Math.pow(base, exponent); // Realiza la operación de potencia
        this.stack.push(result); // Guarda el resultado en la pila
        break;
      }
      
      case 'LEN': {
        const list = this.stack.pop(); // Extrae el valor de la pila
        if (Array.isArray(list) || typeof list === 'string') {
            const length = list.length; // Calcula la longitud de la lista
            this.stack.push(length); // Empuja la longitud a la pila
        } else {
            throw new Error(`Error: El valor '${list}' no es una lista.`);
        }
        break;
      }

    }

    // console.log(this.stack);
    this.getActualContext().PC++;
    return null;
  }
}

export default BiesVM;