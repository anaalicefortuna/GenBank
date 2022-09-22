import { Conta } from "./Conta";

class Transacao{
    public valor: number;
    public tipoTransacao: string;
    public dataTransacao: Date;
    public contaDestino: Conta;
    public contaOrigem: Conta;

    constructor(valor: number, tipoTransacao: string, contaDestino: Conta, contaOrigem: Conta){
        this.valor = valor;
        this.tipoTransacao = tipoTransacao;
        this.dataTransacao = new Date();
        this.contaDestino = contaDestino;
        this.contaOrigem = contaOrigem;
    }
}

export {Transacao}