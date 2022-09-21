import {Cliente} from "./Cliente";
import { Conta } from "./Conta";

class Transacao{
    public valor: number;
    public tipoTransferencia: string;
    public dataTransferencia: Date;
    public contaDestino: Conta;
    public contaOrigem: Conta;

    constructor(valor: number, tipoTransferencia: string, contaDestino: Conta, contaOrigem: Conta){
        this.valor = valor;
        this.tipoTransferencia = tipoTransferencia;
        this.dataTransferencia = new Date();
        this.contaDestino = contaDestino;
        this.contaOrigem = contaOrigem;
 
    }
    
    public saque(valor:number){
        if(this.contaOrigem.saldo>valor){
            this.contaOrigem.saldo-=valor;
            console.log(`Saque de: ${valor} realizado com sucesso! Saldo atual: ${this.contaOrigem.saldo}`);
        }
    }

    public
}

export {Transacao}