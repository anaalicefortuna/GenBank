"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
var prompt = require('prompt-sync')();
var readlineSync = require('readline-sync');
function login(clientes) {
    console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|    ');
    console.log('    |~~~~~~~~~~ LOGIN ~~~~~~~~~~~|   ');
    console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|\n    ');
    console.log('Digite 0 para voltar ao menu\n');
    console.log('E-mail: ');
    var email = prompt('>> ');
    if (email == '0') {
        return null;
    }
    console.log('Senha: ');
    var senha = readlineSync.question('>> ', {
        hideEchoBack: true
    });
    clientes.forEach(function (cliente) {
        if (email == cliente.email) {
            if (senha == cliente.senha) {
                //TODO
                //console.log(cliente);
                prompt('LOGIN COM SUCESSO');
                return cliente;
            }
            else {
                //TODO
                prompt('SENHA INCORRETA');
                return false;
            }
        }
        else {
            //TODO
            prompt('EMAIL NÃO CADASTRADO');
            return false;
        }
    });
    return null;
}
exports.login = login;
