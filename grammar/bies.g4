grammar bies;

// LEXER
INT : '-'? [0-9]+ ; // Números enteros
FLOAT : '-'? [0-9]+ ('.' [0-9]+)? ([eE] [+-]? [0-9]+)? ; // Números decimales y en notación científica
STR : '\'' ( ~['\\] | '\\' . )* '\'' | '"' ( ~["\\] | '\\' . )* '"' ; // Cadenas
FUNCTION : '$' [0-9]+ ; // Identificadores de funciones como $0, $1, etc.
FUN : '$FUN' ; // Inicio de una función
END : '$END' ; // Fin de una función
WS : [ \t\r\n]+ -> skip ; // Espacios en blanco son ignorados
COMMENT : ';' ~[\r\n]* -> skip ; // Comentarios ignorados
PARENT : 'parent:'; // Literal para 'parent:'
ARGS : 'args:'; // Literal para 'args:'
ID : [a-zA-Z_][a-zA-Z_0-9]* ; // Identificadores como nombres de variables, etc.
COMMA : ',' ; // Coma para separar elementos en listas

// PARSER
start : (funDef | inst)+ ; // Debe haber al menos una función o instrucción

funDef : FUN FUNCTION ARGS INT (PARENT FUNCTION)? inst+ END ; // Definición de función

inst : mnemonic (arg (arg)*)? ; // Instrucciones con uno o más argumentos

mnemonic : 'INI' | 'HLT' | 'POP' | 'SWP' | 'LDV' | 'BLD' | 'BST' | 'ADD' | 'MUL' | 'DIV' | 'SUB'
         | 'NEG' | 'SGN' | 'EQ' | 'GT' | 'GTE' | 'LT' | 'LTE' | 'AND' | 'OR' | 'XOR' | 'NOT'
         | 'SNT' | 'CAT' | 'TOS' | 'LNT' | 'LIN' | 'LTK' | 'LRK' | 'TOL' | 'NOP' | 'BR' | 'BT'
         | 'BF' | 'LDF' | 'APP' | 'RET' | 'CST' | 'INO' | 'PRN' | 'STK' | 'SRK' | 'INP';

arg : INT | FLOAT | STR | FUNCTION | list | ID ; // Argumentos posibles

// Producción para listas con manejo de espacios opcionales
list : '[' WS? element (WS? COMMA WS? element)* WS? ']' ; // Definición de listas

// Elementos de la lista pueden ser enteros, decimales o cadenas
element : INT | FLOAT | STR ; // Elementos posibles dentro de una lista