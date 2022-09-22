let isLogado: boolean = false;
import { cadastro } from "../modules/cadastro";
import { menu } from "../modules/menu";
import PromptSync = require("prompt-sync");

let option = 0;
const prompt = PromptSync();


console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
console.log('    |~~~ BEM VINDO AO GENBANK ~~~|');
console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|\n');

prompt('Pressione ENTER para ir ao menu ');
do{
    console.clear();
    menu();
    option = Number(prompt('>> '));

    switch(option){
        case 1:
            //TODO: LOGIN
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
}while(option!=4);
