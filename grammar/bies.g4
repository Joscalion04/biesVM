grammar bies;

// LEXER
INT : '-'?[0-9]+;
STR : '\'' .*?'\'' ;
FUNCTION : '$' [0-9]+;
WS : [ \t\r\n]+ -> skip;

// PARSER
start : inst+;

inst : mnemonic (arg (arg)*)? ; // Instrucciones pueden tener uno o dos argumentos opcionales

mnemonic : 'INI' | 'HLT' | 'POP' | 'SWP' | 'LDV' | 'BLD' | 'BST' | 'ADD' | 'MUL' | 'DIV' | 'SUB' | 'NEG' | 'SGN' | 'EQ' | 'GT' | 'GTE' | 'LT' | 'LTE' | 'AND' | 'OR' | 'XOR' | 'NOT' | 'SNT' | 'CAT' | 'TOS' | 'LNT' | 'LIN' | 'LTK' | 'LRK' | 'TOL' | 'NOP' | 'BR' | 'BT' | 'BF' | 'LDF' | 'APP' | 'RET' | 'CST' | 'INO' | 'PRN' |;

arg : INT | STR | FUNCTION;