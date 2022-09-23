import PromptSync = require("prompt-sync");
import { PessoaFisica } from "./PessoaFisica"

const prompt = PromptSync ();

function extrato (clientes: PessoaFisica[]) {

    clientes.forEach((cliente) =>{

        console.log(`Conta: ${cliente.conta}`);
        console.log(`Email: ${cliente.email}`);
        console.log(`Endereço: ${cliente.endereco}`);
        console.log(`Nome: ${cliente.nome}`);
        console.log(`Senha: ${cliente.senha}`);
        console.log(`Telefone: ${cliente.telefone}`);


    })
    prompt('');



}
export {extrato}