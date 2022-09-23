import { Cliente } from "./Cliente";

const prompt = require('prompt-sync')();
const readlineSync = require('readline-sync');

export function login(clientes: Cliente[]): Cliente{
    let sair: boolean = false;
    do{
        console.clear();
        console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|    ');
        console.log('    |~~~~~~~~~~ LOGIN ~~~~~~~~~~~|   ');
        console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|\n    ');
    
        console.log('Digite -9 para voltar ao menu\n');
    
        console.log('E-mail: ');
        const email = prompt('>> ');
        
        if(email==='-9'){
            break;
        }
    
        console.log('Senha: ');
        const senha = readlineSync.question('>> ', {
            hideEchoBack: true
        });
    
        if(senha==='-9'){
            break;
        }
    
        const c = clientes.find(element => element.email.toLowerCase == email.toLowerCase);

        if(c != null){
            if(c.senha == senha){
                return c;
            }else{
                prompt('Senha incorreta. Pressione ENTER para tentar novamente. ');
            }
        }else{
            prompt('E-mail inválido. Pressione ENTER para tentar novamente. ');
        }
    }while(!sair);
    
}