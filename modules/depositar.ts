/*console.log('Digite o valor do seu depósito: ');
const valor = prompt('>> R$');
depositar(valor);*/

import { Cliente } from "../src/Cliente";
import PromptSync = require("prompt-sync");
const prompt = PromptSync();

export function depositar(cliente: Cliente){
    console.clear();

    console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
    console.log('    |~~~~~~~~~ DEPÓSITO ~~~~~~~~~|');
    console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|\n');

    console.log('Digite o valor a ser depositado: ');
    const valorText = prompt('>> R$');
    const valor = Number(valorText);

    console.log(`Confirmar depósito de R$${valor}?`);
    console.log('1 - Confirmar  2 - Cancelar');
    const op = Number(prompt('>> '));

    switch(op){
        case 1:
            cliente.conta.saldo+=valor;
            console.log(`\nDepósito realizado com sucesso. Saldo atual: ${cliente.conta.saldo}`);
        case 2:
            prompt('\nPressione ENTER para voltar ao menu');
            break;
        default:
            break;
    }

}