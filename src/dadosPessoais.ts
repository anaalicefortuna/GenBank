
import { NOMEM } from 'dns';
import PromptSync = require('prompt-sync');
import { threadId } from 'worker_threads';
const prompt = PromptSync();

import { Cliente } from './Cliente';
import { Conta } from './Conta';
import { PessoaFisica } from './PessoaFisica';

export function dadosPessoais (cliente: Cliente){

  cliente.nome
  cliente.endereco
  cliente.telefone
  cliente.email
  cliente.conta
console.log('=====================================')
console.log(`  ||    NOME: ${cliente.nome}           ||`)
console.log(`  ||ENDERECO: ${cliente.telefone}         ||`)
console.log(`  ||   EMAIL: ${cliente.email} ||`)
console.log(`  ||NUMERO DA CONTA: ${cliente.conta}  ||`)
console.log('=====================================')



}
const c1 = new PessoaFisica ('rafaele','Minha rua, n. 120', 998982020, 
'rafaele@gmail.com', '12345678', 19782354264);
dadosPessoais(c1);

 







    







