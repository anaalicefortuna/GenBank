import { Cliente } from "../src/Cliente";
import PromptSync = require("prompt-sync");
import { PessoaFisica } from "../src/PessoaFisica";
const prompt = PromptSync();

export function pagamento (cliente: Cliente ){
    console.log('Digite a forma de pagamento: ');
    console.log('1 - PIX \n2 - PAGAR BOLETO \n3 - Sair');

    const op = Number(prompt('>> '));

    switch(op){
        case 1:
            console.clear();
            console.log (prompt('Digite a chave do Pix:'));
            console.clear();
            const valor = prompt('Digite o valor que deseja transferir R$: ');
            console.clear();
            console.log (`O valor de ${valor} foi transferido com sucesso.`);
            break;
        case 2:
            console.clear();
            const codB = (prompt('Digite o código de barras: '));
            console.clear();
            console.log (`Certifique-se de que o código de barras está correto: ${codB}`);
            console.log();
            console.log (prompt('Deseja concluir o pagamento?'));
            console.clear();
            console.log ('Pagamento feito com sucesso!');
        case 3:
            prompt('Pressione ENTER para voltar ao menu');
            break;
        default:
            break;
    }
}
    const c1 = new PessoaFisica('Rafaele', 'Minha rua, n. 120', 998982020, 'rafaele@gmail.com', '12345678', 19782354264); 
    pagamento (c1)