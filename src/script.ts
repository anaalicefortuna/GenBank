import PromptSync = require("prompt-sync");
import { menu } from "../modules/menu";
import { login } from "../modules/login";
import { cadastro } from "../modules/cadastro";
import { depositar } from "../modules/depositar";
import { Cliente } from "../modules/Cliente";
import { PessoaFisica } from "../modules/PessoaFisica";
import { dadosPessoais } from "../modules/dadosPessoais";
import { pagamento } from "../modules/pagamento";
import { extrato } from "../modules/extrato";

const prompt = PromptSync();

let option = 0;
let isLogado: boolean = false;
const clientes: Cliente[] = [];
let cliente: any;

const c1 = new PessoaFisica('Rafaele', 'Minha rua, n. 120', 998982020, 'rafaele@gmail.com', '12345678', 19782354264);

clientes.push(c1);


console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
console.log('    |~~~ BEM VINDO AO GENBANK ~~~|');
console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|\n');

prompt('Pressione ENTER para ir ao menu ');
do{
    //console.clear();
    if(!isLogado){
        //MENU LOGIN E CADASTRO
        menu(1);
        option = Number(prompt('>> '));
    
        switch(option){
            case 1:
                cliente = login(clientes);
                if(cliente != null){
                    isLogado=true;
                }
                break;
            case 2:
                cadastro(1, clientes);
                break;
            case 3:
                cadastro(2, clientes);
                break;
            case 4:
                break;
            default:
                break;
        }
    }else{
        //TODO
        menu(2);
        const op = Number(prompt('>> '));
        switch(op){
            case 1:
                depositar(cliente);
                break;
            case 2:
                pagamento(cliente);
                break;
            case 3:
                extrato(cliente);
                break;
            case 4:
                dadosPessoais(cliente);
                break;
            case 5: //SAIR
                isLogado = false;
                break;

            default: break;
        }
    }
    
}while(option!=4);

