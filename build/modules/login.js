"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
var prompt = require('prompt-sync')();
var readlineSync = require('readline-sync');
function login(clientes) {
    console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|    ');
    console.log('    |~~~~~~~~~~ LOGIN ~~~~~~~~~~~|   ');
    console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|\n    ');
    console.log('E-mail: ');
    var email = prompt('>> ');
    console.log('Senha: ');
    var senha = readlineSync.question('>> ', {
        hideEchoBack: true
    });
    clientes.forEach(function (cliente) {
        if (email == cliente.email) {
            if (senha == cliente.senha) {
                //TODO: LOGIN COM SUCESSO
                prompt('A');
                return true;
            }
            else {
                //TODO: SENHA INCORRETA
                prompt('B');
                return false;
            }
        }
        else {
            //TODO: EMAIL NÃO CADASTRADO
            prompt('C');
            return false;
        }
    });
    return false;
}
exports.login = login;
