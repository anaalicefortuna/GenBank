/*console.log('Digite o valor do seu depósito: ');
const valor = prompt('>> R$');
depositar(valor);*/

import { Cliente } from "./Cliente";
import PromptSync = require("prompt-sync");
import { Transacao } from "./Transacao";
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
            cliente.conta.registrarTransacao(valor, 'Depósito');
            
            console.clear();
            console.log(`\nDepósito realizado com sucesso. Saldo atual: R$${cliente.conta.saldo.toFixed(2)}`);
        case 2:
            prompt('\nPressione ENTER para voltar ao menu');
            break;
        default:
            break;
    }

}