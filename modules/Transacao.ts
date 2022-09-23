import { Conta } from "./Conta";

export class Transacao{
    public valor: number;
    public tipoTransacao: string;
    public dataTransacao: string;

    constructor(valor: number, tipoTransacao: string){
        this.valor = valor;
        this.tipoTransacao = tipoTransacao;
        const dt = new Date();
        const date = `${dt.getUTCDate()}/${dt.getUTCMonth()}/${dt.getUTCFullYear()}`;
        this.dataTransacao = date;
    }
}
