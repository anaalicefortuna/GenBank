const prompt = require('prompt-sync')();

import { Cliente } from "./Cliente";
import { PessoaFisica } from "./PessoaFisica";
import { PessoaJuridica } from "./PessoaJuridica";

export function cadastro(tipoUsuario: number, clientes: Cliente[]): void{
    let cadastrado: boolean = false;
    do{
        console.clear();
        let cpf: number = 0;
        let cnpj: number = 0;
    
        console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
        console.log('    |~~~~~~~~~ CADASTRO ~~~~~~~~~|');
        console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|\n');

        console.log('Digite -9 para voltar ao menu\n');
        
        console.log('Digite seu nome:');
        const nome = prompt('>> ');

        if(nome==='-9'){
            break;
        }

        
        if(tipoUsuario==1){
            console.log('\nDigite seu CPF:');
            const cpfText = prompt('>> ');
            
            if(cpfText=='-9'){
                break;
            }else{
                const isNum: boolean = /^\d+$/.test(cpfText);
                if(isNum){
                    cpf = Number(cpfText);
                }else{
                    prompt('Seu CPF deve conter apenas números. ');
                    continue;
                }
            }
        }else{
            console.log('\nDigite seu CNPJ:');
            const cnpjText = prompt('>> ');
            cnpj = Number(cnpjText);

            if(cnpjText=='-9'){
                break;
            }else{
                const isNum: boolean = /^\d+$/.test(cnpjText);
                if(isNum){
                    cpf = Number(cnpjText);
                }else{
                    prompt('O CNPJ deve conter apenas números. ');
                    continue;
                }
            }
        }

        console.log('\nDigite seu endereco: ');
        const endereco = prompt('>> ');

        if(endereco==='-9'){
            break;
        }

        console.log('\nDigite seu celular: ');
        const celularText = prompt('>> ');
        const celular = Number(celularText);

        if(celularText==='-9'){
            break;
        }

        console.log('\nDigite seu e-mail:');
        const email = prompt('>> ');

        if(email==='-9'){
            break;
        }else{
            if(!email.includes('@')){
                prompt('E-mail inválido. ');
                continue;
            }
        }
        
        console.log('\nDigite sua senha: ');
        const senha = prompt('>> ');

        if(senha==='-9'){
            break;
        }

        if(tipoUsuario==1){
            const c = new PessoaFisica(nome, endereco, celular, email, senha, cpf);
            clientes.push(c);
        }else{
            const c = new PessoaJuridica(nome, endereco, celular, email, senha, cnpj);
            clientes.push(c);
        }

        cadastrado = true;
        


        
        console.log(`\nCadastro realizado com sucesso! Seja bem vinde ao GenBank!`);
        prompt('\nPressione ENTER para continuar');
        
    }while(!cadastrado);
}
  
