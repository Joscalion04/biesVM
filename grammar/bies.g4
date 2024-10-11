grammar bies;

// LEXER
INT : '-'?[0-9]+;
STR : '\'' .*? '\'';
FUNCTION : '$' [0-9]+; // Para identificadores de funciones como $0, $1, etc.
FUN : '$FUN'; // Para marcar el inicio de una función
END : '$END'; // Para marcar el final de una función
WS : [ \t\r\n]+ -> skip;
COMMENT : ';' .*? [\r\n] -> skip; // Comentarios ignorados

// PARSER
start : (funDef | inst)+ ; // Inicia con funciones o instrucciones, debe haber al menos una

funDef : FUN FUNCTION (argsDecl)? ('parent:' FUNCTION)? inst+ END ; // Define una función con argumentos opcionales y un padre opcional

argsDecl : 'args:' INT ; // Definición de los argumentos

inst : mnemonic (arg (arg)*)? ; // Instrucciones pueden tener uno o más argumentos

mnemonic : 'INI' | 'HLT' | 'POP' | 'SWP' | 'LDV' | 'BLD' | 'BST' | 'ADD' | 'MUL' | 'DIV' | 'SUB'
         | 'NEG' | 'SGN' | 'EQ' | 'GT' | 'GTE' | 'LT' | 'LTE' | 'AND' | 'OR' | 'XOR' | 'NOT'
         | 'SNT' | 'CAT' | 'TOS' | 'LNT' | 'LIN' | 'LTK' | 'LRK' | 'TOL' | 'NOP' | 'BR' | 'BT'
         | 'BF' | 'LDF' | 'APP' | 'RET' | 'CST' | 'INO' | 'PRN' | 'STK' | 'SRK' | 'INP';

arg : INT | STR | FUNCTION;