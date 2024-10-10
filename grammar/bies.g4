grammar bies;

// LEXER
INT : '-'?[0-9]+;
STR : '\'' .*? '\'';
FUNCTION : '$' [0-9]+;
FUN : '$FUN';
END : '$END';
WS : [ \t\r\n]+ -> skip;
COMMENT : ';' .*? [\r\n] -> skip; // Comentario que comienza con ; y se ignora hasta el final de la línea


// PARSER
start : (funDef | inst)+ ; // Inicia con funciones o instrucciones, y debe haber al menos una

funDef : FUN FUNCTION (argsDecl)? ('parent:' FUNCTION)? inst+ END FUNCTION;

argsDecl : 'args:' INT ; // Definición de argumentos

inst : mnemonic (arg (arg)*)? ; // Instrucciones pueden tener uno o más argumentos

mnemonic : 'INI' | 'HLT' | 'POP' | 'SWP' | 'LDV' | 'BLD' | 'BST' | 'ADD' | 'MUL' | 'DIV' | 'SUB' 
         | 'NEG' | 'SGN' | 'EQ' | 'GT' | 'GTE' | 'LT' | 'LTE' | 'AND' | 'OR' | 'XOR' | 'NOT' 
         | 'SNT' | 'CAT' | 'TOS' | 'LNT' | 'LIN' | 'LTK' | 'LRK' | 'TOL' | 'NOP' | 'BR' | 'BT' 
         | 'BF' | 'LDF' | 'APP' | 'RET' | 'CST' | 'INO' | 'PRN' | 'STK' | 'SRK' | 'INP';

arg : INT | STR | FUNCTION;