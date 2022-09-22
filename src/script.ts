import PromptSync = require("prompt-sync");
import { menu } from "../modules/menu";
import { login } from "../modules/login";
import { cadastro } from "../modules/cadastro";
import { depositar } from "../modules/depositar";
import { Cartao } from "./Cartao";
import { Cliente } from "./Cliente";
import { PessoaFisica } from "./PessoaFisica";
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
                if(cliente != false && cliente != undefined){ //não funciona, função retornando undefined
                    isLogado=true;
                    console.log(cliente);
                }
                isLogado=true;
                break;
            case 2:
                //TODO: CADASTRO PESSOA FISICA
                cadastro(1);
                break;
            case 3:
                //TODO: CADASTRO PESSOA JURIDICA
                cadastro(2);
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
                //TODO: DEPOSITAR
                depositar(cliente);
                break;
            case 2:
                //TODO: PAGAR
                break;
            case 3:
                //TODO: CARTÕES
                break;
            case 4:
                //TODO: EXTRATO
                break;
            case 5:
                //TODO: DADOS PESSOAIS
                break;
            case 6: //SAIR
                isLogado = false;
                break;

            default: break;
        }
    }
    
}while(option!=4);

