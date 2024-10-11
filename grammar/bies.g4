grammar bies;

// LEXER
INT : '-'? [0-9]+ ; // Números enteros
STR : '\'' ( ~['\\] | '\\' . )* '\'' | '"' ( ~["\\] | '\\' . )* '"' ; // Cadenas
LIST : '[' (ELEMENT (',' ELEMENT)*)? ']' ;
ELEMENT : STR | INT ;
FUNCTION : '$' [0-9]+ ; // Identificadores de funciones como $0, $1, etc.
FUN : '$FUN' ; // Inicio de una función
END : '$END' ; // Fin de una función
WS : [ \t\r\n]+ -> skip ; // Espacios en blanco son ignorados
COMMENT : ';' ~[\r\n]* -> skip ; // Comentarios ignorados
PARENT : 'parent:'; // Literal para 'parent:'
ARGS : 'args:'; // Literal para 'args:'

// PARSER
start : (funDef | inst)+ ; // Debe haber al menos una función o instrucción

funDef : FUN FUNCTION ARGS INT (PARENT FUNCTION)? inst+ END ; // Definición de función

inst : mnemonic (arg (arg)*)? ; // Instrucciones con uno o más argumentos

mnemonic : 'INI' | 'HLT' | 'POP' | 'SWP' | 'LDV' | 'BLD' | 'BST' | 'ADD' | 'MUL' | 'DIV' | 'SUB'
         | 'NEG' | 'SGN' | 'EQ' | 'GT' | 'GTE' | 'LT' | 'LTE' | 'AND' | 'OR' | 'XOR' | 'NOT'
         | 'SNT' | 'CAT' | 'TOS' | 'LNT' | 'LIN' | 'LTK' | 'LRK' | 'TOL' | 'NOP' | 'BR' | 'BT'
         | 'BF' | 'LDF' | 'APP' | 'RET' | 'CST' | 'INO' | 'PRN' | 'STK' | 'SRK' | 'INP';

arg : INT | STR | FUNCTION | LIST ; // Argumentos posibles

