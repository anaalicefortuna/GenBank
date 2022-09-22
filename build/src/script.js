"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var menu_1 = require("../modules/menu");
var login_1 = require("../modules/login");
var cadastro_1 = require("../modules/cadastro");
var PessoaFisica_1 = require("./PessoaFisica");
var prompt = PromptSync();
var option = 0;
var isLogado = false;
var clientes = [];
var c1 = new PessoaFisica_1.PessoaFisica('Rafaele', 'Minha rua, n. 120', 998982020, 'rafaele@gmail.com', '12345678', 19782354264);
clientes.push(c1);
console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
console.log('    |~~~ BEM VINDO AO GENBANK ~~~|');
console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|\n');
prompt('Pressione ENTER para ir ao menu ');
do {
    console.clear();
    if (!isLogado) {
        (0, menu_1.menu)();
        option = Number(prompt('>> '));
        switch (option) {
            case 1:
                //TODO: LOGIN
                if ((0, login_1.login)(clientes)) {
                    isLogado = true;
                }
                break;
            case 2:
                //TODO: CADASTRO PESSOA FISICA
                (0, cadastro_1.cadastro)(1);
                break;
            case 3:
                //TODO: CADASTRO PESSOA JURIDICA
                (0, cadastro_1.cadastro)(2);
                break;
            default:
                break;
        }
    }
    else {
        (0, menu_1.menu)();
    }
} while (option != 4);