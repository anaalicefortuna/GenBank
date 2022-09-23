
import { NOMEM } from 'dns';
import PromptSync = require('prompt-sync');
import { threadId } from 'worker_threads';
const prompt = PromptSync();

import { Cliente } from './Cliente';

export function dadosPessoais (cliente: Cliente){
  
  console.clear();
  console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|    ');
  console.log('    |~~~~~~ DADOS PESSOAIS ~~~~~~|   ');
  console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|\n\n    ');

  console.log('=====================================');
  console.log(`NOME: ${cliente.nome}           `);
  console.log(`ENDERECO: ${cliente.telefone}         `);
  console.log(`EMAIL: ${cliente.email} `);
  console.log(`NUMERO DA CONTA: ${cliente.conta.numConta}-${cliente.conta.digito}`);
  console.log(`SALDO: R$${cliente.conta.saldo.toFixed(2)}`);
  console.log('=====================================');

  prompt('Pressione ENTER para voltar ao menu');

}
 







    







