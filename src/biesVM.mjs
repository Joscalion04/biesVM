class BiesVM {
  constructor() {
    this.code = []; // C
    this.stack = []; // S
    this.bindings = [[]]; // B
    this.contexts = []; // D
  }

  findFunction(functionName) {
    for (let i = this.bindings.length - 1; i >= 0; i--) {
      if (this.bindings[i][functionName]) {
        return this.bindings[i][functionName]; // Retorna la closure
      }
    }
    throw new Error(`Función ${functionName} no encontrada`);
  }


  executeInstruction(mnemonic, args) { // instruction es el ctx del arbol
    // Lógica para ejecutar cada instrucción
    // Ejemplo: LDV, ADD, POP, etc.
    switch (mnemonic) {
      case 'INI': {

      } break;

      case 'HLT': {
        this.code = [];
        this.stack = [];
        this.bindings = [[]];
        this.contexts = [];
      } break;

      case 'PRN': {
        const N = this.stack.pop();
        console.log(N);
        this.stack.push(N);
      } break;

      case 'POP': {
        this.stack.pop();
      } break;

      case 'SWP': {
        const N = this.stack.pop();
        const M = this.stack.pop();
        this.stack.push(N);
        this.stack.push(M);
      } break;

      case 'LDV': {
        const N = args[0];
        this.stack.push(N);
      } break;

      case 'BLD': {
        //console.log(this.bindings[args[0]][args[1]]);
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
      // endregion Operaciones aritméticas
      case 'NEG': {
        const N = this.stack.pop();
        if (typeof N === 'number') {
          this.stack.push(-N);
        }
      } break;

      case 'SGN': {
        const N = this.stack.pop();
        if (typeof N === 'number') {
          this.stack.push(Math.sign(N) > 0 ? 1 : 0);//Revisar
        }
      } break;

      case 'EQ': {// Solo si son numeros?
        const N = this.stack.pop();
        const M = this.stack.pop();
        this.stack.push(N === M ? 1 : 0);
      } break;

      case 'GT': {// Solo si son numeros?
        const N = this.stack.pop();
        const M = this.stack.pop();
        this.stack.push(N > M ? 1 : 0);
      } break;

      case 'GTE': {// Solo si son numeros?
        const N = this.stack.pop();
        const M = this.stack.pop();
        this.stack.push(N >= M ? 1 : 0);
      } break;

      case 'LT': {// Solo si son numeros?
        const N = this.stack.pop();
        const M = this.stack.pop();
        this.stack.push(N < M ? 1 : 0);
      } break;

      case 'LTE': {// Solo si son numeros?
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
        this.stack.push(!N ? 1 : 0);
      } break;

      case 'SNT': {
        const V = this.stack.pop();
        this.stack.push(V === "" ? 1 : 0);
      } break;

      case 'CAT': {
        const H1 = this.stack.pop();
        const H2 = this.stack.pop();
        this.stack.push(H1.concat(H2));
      } break;

      case 'TOS': {
        const V = this.stack.pop();
        this.stack.push(V.toString());
      } break;

      case 'LNT': {//?

      } break;

      case 'LIN': {
        const V = this.stack.pop();
        const L = this.stack.pop();
        L.unshift(V);
        this.stack.push(L);
      } break;

      case 'LTK': {
        const K = this.stack.pop();
        const V = this.stack.pop();
        this.stack.push(V[K]);//?
      } break;

      case 'LRK': {
        const K = this.stack.pop();
        const V = this.stack.pop();
        this.stack.push(V.slice(K));
      } break;

      case 'TOL': {
        const V = this.stack.pop();
        this.stack.push(Array.of(V));
      } break;

      case 'NOP': {
        // No hacer nada
      } break;
      
      case 'BR': {

      } break;

      case 'BF': {
          
      } break;

      case 'LDF': {
        const functionName = args[0];
        // Buscar la función en los bindings (closure = función + entorno)
        const closure = this.findFunction(functionName);
        this.stack.push(closure);
      } break;      

      case 'APP': {

      } break;
      
      case 'RET': {
        
      } break;

      case '$FUN': {
      
      } break;
    }
  }
}

export default BiesVM;