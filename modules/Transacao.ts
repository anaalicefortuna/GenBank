import { Conta } from "./Conta";

export class Transacao{
    public valor: number;
    public tipoTransacao: string;
    public dataTransacao: Date;

    constructor(valor: number, tipoTransacao: string){
        this.valor = valor;
        this.tipoTransacao = tipoTransacao;
        this.dataTransacao = new Date();
    }
}
