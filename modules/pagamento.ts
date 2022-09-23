import { Cliente } from "./Cliente";
import PromptSync = require("prompt-sync");
import { PessoaFisica } from "./PessoaFisica";
import { Transacao } from "./Transacao";
const prompt = PromptSync();

export function pagamento (cliente: Cliente ){
    console.clear();
    console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
    console.log('    |~~~~~~~~ PAGAMENTO ~~~~~~~~~|');
    console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|\n');

    console.log('Digite a forma de pagamento: ');
    console.log('1 - PIX \n2 - PAGAR BOLETO \n3 - Voltar');

    const op = Number(prompt('>> '));
    let valorText: string;
    let valor: number;

    switch(op){
        case 1:
            console.clear();
            console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
            console.log('    |~~~~~~~~~~~~ PIX ~~~~~~~~~~~|');
            console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|\n');

            console.log('Digite a chave do Pix:');
            const chave = prompt('>> ');

            console.log('Digite o valor que deseja transferir:');
            valorText = prompt('>> R$');
            valor = Number(valorText);

            if(cliente.conta.saldo>=valor){
                console.log(`Confirmar Pix de R$${valor}?`);
                console.log('1 - Confirmar  2 - Cancelar');
                const opt = Number(prompt('>> '));

                switch(opt){
                    case 1:
                        cliente.conta.registrarTransacao(valor, 'Pix');
                        cliente.conta.saldo-=valor;

                        console.clear();
                        console.log (`O Pix de R$${valor} foi realizado com sucesso. Saldo atual: R$${cliente.conta.saldo}`);
                    case 2:
                        prompt('Pressione ENTER para voltar ao menu');
                        break;
                }
            }else{
                console.log('Saldo insuficiente.');
                prompt('Pressione ENTER para voltar ao menu');
            }
            break;
        case 2:
            console.clear();
            console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
            console.log('    |~~~~~~~~~ BOLETO ~~~~~~~~~~~|');
            console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|\n');

            console.log('Digite o código de barras do boleto: ');
            const codBText = (prompt('>> '));
            const codB = Number(codBText);

            console.log('Digite o valor a ser pago:');
            valorText = prompt('>> R$');
            valor = Number(valorText);

            if(cliente.conta.saldo>=valor){
                console.log(`Confirmar pagamento de R$${valor}?`);
                console.log('1 - Confirmar  2 - Cancelar');
                const opt = Number(prompt('>> '));

                switch(opt){
                    case 1:
                        cliente.conta.registrarTransacao(valor, 'Boleto');
                        cliente.conta.saldo-=valor;

                        console.clear();
                        console.log (`O boleto de R$${valor} foi pago com sucesso. Saldo atual: R$${cliente.conta.saldo}`);
                    case 2:
                        prompt('Pressione ENTER para voltar ao menu');
                        break;
                }
            }else{
                console.log('Saldo insuficiente.');
                prompt('Pressione ENTER para voltar ao menu');
            }
            break;
        case 3:
            break;
        default:
            break;
    }
}