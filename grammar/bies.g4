grammar bies;
// GRAMATICA DEMO 

//LEXER
INT : '-'?[0-9]+;
STR : '\'' .*?'\'';
WS : [ \t\r\n]+ -> skip;

// PARSER
start : inst+;
inst : mnemonic arg*;
mnemonic : 'LDV' | 'POP' | 'BLD' | 'ADD' | 'MUL' | 'DIV' | 'SUB' | 'PRN' ;
arg : INT | STR ;
