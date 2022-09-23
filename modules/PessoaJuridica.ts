import { Cliente } from "./Cliente";
import { Conta } from "./Conta";

export class PessoaJuridica extends Cliente{
    private cnpj: number;

    constructor(nome: string, endereco: string, telefone: number, email: string, senha: string, cnpj: number){
        super(nome, endereco, telefone, email, senha);
        this.cnpj = cnpj;
    }
}