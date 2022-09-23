"use strict";
/*console.log('Digite o valor do seu depósito: ');
const valor = prompt('>> R$');
depositar(valor);*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.depositar = void 0;
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function depositar(cliente) {
    console.clear();
    console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
    console.log('    |~~~~~~~~~ DEPÓSITO ~~~~~~~~~|');
    console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|\n');
    console.log('Digite o valor a ser depositado: ');
    var valorText = prompt('>> R$');
    var valor = Number(valorText);
    console.log("Confirmar dep\u00F3sito de R$".concat(valor, "?"));
    console.log('1 - Confirmar  2 - Cancelar');
    var op = Number(prompt('>> '));
    switch (op) {
        case 1:
            cliente.conta.saldo += valor;
            cliente.conta.registrarTransacao(valor, 'Depósito');
            console.clear();
            console.log("\nDep\u00F3sito realizado com sucesso. Saldo atual: R$".concat(cliente.conta.saldo.toFixed(2)));
        case 2:
            prompt('\nPressione ENTER para voltar ao menu');
            break;
        default:
            break;
    }
}
exports.depositar = depositar;
