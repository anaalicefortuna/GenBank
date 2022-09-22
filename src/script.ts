import PromptSync = require("prompt-sync");
import { menu } from "../modules/menu";
import { login } from "../modules/login";
import { cadastro } from "../modules/cadastro";
import { Cartao } from "./Cartao";
import { Cliente } from "./Cliente";
import { PessoaFisica } from "./PessoaFisica";
const prompt = PromptSync();

let option = 0;
let isLogado: boolean = false;
const clientes: Cliente[] = [];

const c1 = new PessoaFisica('Rafaele', 'Minha rua, n. 120', 998982020, 'rafaele@gmail.com', '12345678', 19782354264);

clientes.push(c1);


console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
console.log('    |~~~ BEM VINDO AO GENBANK ~~~|');
console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|\n');

prompt('Pressione ENTER para ir ao menu ');
do{
    console.clear();
    if(!isLogado){
        menu(1);
        option = Number(prompt('>> '));
    
        switch(option){
            case 1:
                if(login(clientes)){
                    isLogado = true;
                }
                break;
            case 2:
                //TODO: CADASTRO PESSOA FISICA
                cadastro(1);
                break;
            case 3:
                //TODO: CADASTRO PESSOA JURIDICA
                cadastro(2);
                break;
            default:
                break;
        }
    }else{
        menu(2);
    }
    
}while(option!=4);

