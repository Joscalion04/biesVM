grammar bies;

// LEXER
INT : '-'?[0-9]+;
STR : '\'' .*?'\'' ;
FUNCTION : '$' [0-9]+;
WS : [ \t\r\n]+ -> skip;

// PARSER
start : inst+;

inst : mnemonic (arg (arg)*)? ; // Instrucciones pueden tener uno o dos argumentos opcionales

mnemonic : 'LDV' | 'POP' | 'BLD' | 'ADD' | 'MUL' | 'DIV' | 'SUB' | 'PRN' | 'BST' | 'HLT' | 'LDF' | 'APP' | '$FUN' | 'RET';

arg : INT | STR | FUNCTION;