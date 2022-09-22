import { Cliente } from "../src/Cliente";

const prompt = require('prompt-sync')();
const readlineSync = require('readline-sync');

export function login(clientes: Cliente[]): boolean{
    console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|    ');
    console.log('    |~~~~~~~~~~ LOGIN ~~~~~~~~~~~|   ');
    console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|\n    ');

    console.log('E-mail: ');
    const email = prompt('>> ');

    console.log('Senha: ');
    const senha = readlineSync.question('>> ', {
        hideEchoBack: true
    });

    clientes.forEach((cliente) => {
        if(email == cliente.email){
            if(senha == cliente.senha){
                //TODO: LOGIN COM SUCESSO
                prompt('A');
                return true;
            }else{
                //TODO: SENHA INCORRETA
                prompt('B');
                return false;
            }
        }else{
            //TODO: EMAIL NÃO CADASTRADO
            prompt('C');
            return false;
        }
    });

    return false;

}