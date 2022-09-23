"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastro = void 0;
var prompt = require('prompt-sync')();
var PessoaFisica_1 = require("./PessoaFisica");
var PessoaJuridica_1 = require("./PessoaJuridica");
function cadastro(tipoUsuario, clientes) {
    var cadastrado = false;
    do {
        console.clear();
        var cpf = 0;
        var cnpj = 0;
        console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
        console.log('    |~~~~~~~~~ CADASTRO ~~~~~~~~~|');
        console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|\n');
        console.log('Digite -9 para voltar ao menu\n');
        console.log('Digite seu nome:');
        var nome = prompt('>> ');
        if (nome === '-9') {
            break;
        }
        if (tipoUsuario == 1) {
            console.log('\nDigite seu CPF:');
            var cpfText = prompt('>> ');
            if (cpfText == '-9') {
                break;
            }
            else {
                var isNum = /^\d+$/.test(cpfText);
                if (isNum) {
                    cpf = Number(cpfText);
                }
                else {
                    prompt('Seu CPF deve conter apenas números. ');
                    continue;
                }
            }
        }
        else {
            console.log('\nDigite seu CNPJ:');
            var cnpjText = prompt('>> ');
            cnpj = Number(cnpjText);
            if (cnpjText == '-9') {
                break;
            }
            else {
                var isNum = /^\d+$/.test(cnpjText);
                if (isNum) {
                    cpf = Number(cnpjText);
                }
                else {
                    prompt('O CNPJ deve conter apenas números. ');
                    continue;
                }
            }
        }
        console.log('\nDigite seu endereco: ');
        var endereco = prompt('>> ');
        if (endereco === '-9') {
            break;
        }
        console.log('\nDigite seu celular: ');
        var celularText = prompt('>> ');
        var celular = Number(celularText);
        if (celularText === '-9') {
            break;
        }
        console.log('\nDigite seu e-mail:');
        var email = prompt('>> ');
        if (email === '-9') {
            break;
        }
        else {
            if (!email.includes('@')) {
                prompt('E-mail inválido. ');
                continue;
            }
        }
        console.log('\nDigite sua senha: ');
        var senha = prompt('>> ');
        if (senha === '-9') {
            break;
        }
        if (tipoUsuario == 1) {
            var c = new PessoaFisica_1.PessoaFisica(nome, endereco, celular, email, senha, cpf);
            clientes.push(c);
        }
        else {
            var c = new PessoaJuridica_1.PessoaJuridica(nome, endereco, celular, email, senha, cnpj);
            clientes.push(c);
        }
        cadastrado = true;
        console.log("\nCadastro realizado com sucesso! Seja bem vinde ao GenBank!");
        prompt('\nPressione ENTER para continuar');
    } while (!cadastrado);
}
exports.cadastro = cadastro;
