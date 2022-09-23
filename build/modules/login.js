"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
var prompt = require('prompt-sync')();
var readlineSync = require('readline-sync');
function login(clientes) {
    var sair = false;
    var _loop_1 = function () {
        console.clear();
        console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|    ');
        console.log('    |~~~~~~~~~~ LOGIN ~~~~~~~~~~~|   ');
        console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|\n    ');
        console.log('Digite -9 para voltar ao menu\n');
        console.log('E-mail: ');
        var email = prompt('>> ');
        if (email === '-9') {
            return "break";
        }
        console.log('Senha: ');
        var senha = readlineSync.question('>> ', {
            hideEchoBack: true
        });
        if (senha === '-9') {
            return "break";
        }
        var c = clientes.find(function (element) { return element.email.toLowerCase() == email.toLowerCase(); });
        if (c != null) {
            if (c.senha == senha) {
                return { value: c };
            }
            else {
                prompt('Senha incorreta. Pressione ENTER para tentar novamente. ');
            }
        }
        else {
            prompt('E-mail inválido. Pressione ENTER para tentar novamente. ');
        }
    };
    do {
        var state_1 = _loop_1();
        if (typeof state_1 === "object")
            return state_1.value;
        if (state_1 === "break")
            break;
    } while (!sair);
}
exports.login = login;
