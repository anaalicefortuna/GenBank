import { Cliente } from "../src/Cliente";

const prompt = require('prompt-sync')();
const readlineSync = require('readline-sync');

export function login(clientes: Cliente[]): Cliente{
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
                //console.log(cliente);
                prompt('LOGIN COM SUCESSO');
                return cliente;
            }else{
                //TODO: SENHA INCORRETA
                prompt('SENHA INCORRETA');
                return false;
            }
        }else{
            //TODO: EMAIL NÃO CADASTRADO
            prompt('EMAIL NÃO CADASTRADO');
            return false;
        }
    });
    return null;
}