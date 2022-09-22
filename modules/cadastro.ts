const prompt = require('prompt-sync')();

import { Cliente } from "../src/Cliente";

export function cadastro(tipoUsuario: number, clientes: Cliente[]): void{
    
    console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
    console.log('    |~~~~~~~~~ CADASTRO ~~~~~~~~~|');
    console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|\n');
    
    console.log('Digite seu nome:');
    const nome = prompt('>> ');

    if(tipoUsuario==1){
        console.log('Digite seu CPF:');
        const cpfText = prompt('>> ');
    }else{
        console.log('Digite seu CNPJ:');
        const cnpjText = prompt('>> ');
    }

    console.log('Digite seu e-mail:');
    const email = prompt('>> ');
    
    console.log('Digite seu celular: ');
    const celularText = prompt('>> ');

    console.log('Digite sua senha: ');
    const senha = prompt('>> ');
    

    
    console.log('|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
    console.log(`|~~~~~ MUITO OBRIGADO SR(A):${nome}~~~~~~|`);
    console.log('|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
    
    console.log()
    
    console.log('|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
    console.log('|~~ OBRIGADO POR SER CADASTRAR NA GENBANK! ~~|');
    console.log('|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
    
    console.log()
    
    console.log('|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
    console.log('|~~~~~~~ CONTINUE PARA A TELA DE LOGIN ~~~~~~|');
    console.log('|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
    
    
    }
  
