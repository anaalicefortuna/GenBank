import PromptSync = require("prompt-sync");
import { Cliente } from "./Cliente";

const prompt = PromptSync ();

function extrato (cliente: Cliente) {

    console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
    console.log('    |~~~~~~~~~~ EXTRATO ~~~~~~~~~|');
    console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|\n');

    cliente.conta.transacoes.forEach((transacao) =>{

        console.log(`\nTipo de transação: ${transacao.tipoTransacao}`);
        console.log(`Valor: R$${transacao.valor}`);
        console.log(`Data da Transação: ${transacao.dataTransacao}\n`);
        console.log('==============================')

    });

    prompt('Pressione ENTER para voltar ao menu ');

}
export {extrato}