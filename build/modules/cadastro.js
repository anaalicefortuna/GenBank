"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastro = void 0;
var prompt = require('prompt-sync')();
function cadastro(tipoUsuario, clientes) {
    console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
    console.log('    |~~~~~~~~~ CADASTRO ~~~~~~~~~|');
    console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|\n');
    console.log('Digite seu nome:');
    var nome = prompt('>> ');
    if (tipoUsuario == 1) {
        console.log('Digite seu CPF:');
        var cpfText = prompt('>> ');
    }
    else {
        console.log('Digite seu CNPJ:');
        var cnpjText = prompt('>> ');
    }
    console.log('Digite seu e-mail:');
    var email = prompt('>> ');
    console.log('Digite seu celular: ');
    var celularText = prompt('>> ');
    console.log('Digite sua senha: ');
    var senha = prompt('>> ');
    console.log('|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
    console.log("|~~~~~ MUITO OBRIGADO SR(A):".concat(nome, "~~~~~~|"));
    console.log('|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
    console.log();
    console.log('|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
    console.log('|~~ OBRIGADO POR SER CADASTRAR NA GENBANK! ~~|');
    console.log('|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
    console.log();
    console.log('|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
    console.log('|~~~~~~~ CONTINUE PARA A TELA DE LOGIN ~~~~~~|');
    console.log('|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
}
exports.cadastro = cadastro;
