import { Cliente } from "./Cliente";
import { Conta } from "./Conta";

export class PessoaFisica extends Cliente{
    private cpf: number;

    constructor(nome: string, endereco: string, telefone: number, email: string, senha: string, cpf: number){
        super(nome, endereco, telefone, email, senha);
        this.cpf = cpf;
    }
}