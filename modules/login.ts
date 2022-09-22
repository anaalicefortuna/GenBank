import { Cliente } from "../src/Cliente";

const prompt = require('prompt-sync')();
const readlineSync = require('readline-sync');

export function login(clientes: Cliente[]): Cliente{
    console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|    ');
    console.log('    |~~~~~~~~~~ LOGIN ~~~~~~~~~~~|   ');
    console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|\n    ');

    console.log('Digite -9 para voltar ao menu\n');

    console.log('E-mail: ');
    const email = prompt('>> ');
    
    if(email=='-9'){
        return null;
    }

    console.log('Senha: ');
    const senha = readlineSync.question('>> ', {
        hideEchoBack: true
    });

    if(senha=='-9'){
        return null;
    }

    /*clientes.forEach((cliente) => {
        if(email == cliente.email){
            if(senha == cliente.senha){
                //TODO
                //console.log(cliente);
                prompt('LOGIN COM SUCESSO');
                return cliente;
            }else{
                //TODO
                prompt('SENHA INCORRETA');
                return false;
            }
        }else{
            //TODO
            prompt('EMAIL NÃO CADASTRADO');
            return false;
        }
    });
    return null;*/
}