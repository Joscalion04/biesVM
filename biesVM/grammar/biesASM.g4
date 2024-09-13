grammar biesASM;

// Reglas del lexer
LDV     : 'LDV';
MUL     : 'MUL';
ADD     : 'ADD';
EQ      : 'EQ';
FUN     : '$FUN';
END     : '$END';
VARIABLE: '$' [a-zA-Z_][a-zA-Z_0-9]*;

// Tokens para los números y espacio en blanco
NUMBER  : [0-9]+;
WS      : [ \t\r\n]+ -> skip;

// Reglas del parser
program  : function*;

function : FUN VARIABLE instruction* END VARIABLE;

instruction
    : LDV value
    | MUL
    | ADD
    | EQ;

value    : VARIABLE
         | NUMBER;