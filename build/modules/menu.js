"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menu = void 0;
var prompt = require('prompt-sync')();
function menu(op) {
    console.clear();
    switch (op) {
        case 1:
            console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|    ');
            console.log('    |~~~~~~~~~~~ MENU ~~~~~~~~~~~|   ');
            console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|\n\n    ');
            console.log('1 - Login');
            console.log('2 - Abrir conta (pessoa física)');
            console.log('3 - Abrir conta (pessoa jurídica)');
            console.log('4 - Sair');
            break;
        case 2:
            //TODO
            console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|    ');
            console.log('    |~~~~~~~~~~~ MENU ~~~~~~~~~~~|   ');
            console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|\n\n    ');
            console.log('1 - Depositar');
            console.log('2 - Pagar');
            console.log('3 - Extrato');
            console.log('4 - Dados pessoais');
            console.log('5 - Sair');
    }
}
exports.menu = menu;
