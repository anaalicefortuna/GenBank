import { Cliente } from "./Cliente";
import { Transacao } from "./Transacao";

export class Conta{
    private _numConta: number;
    private _digito: number;
    private _agencia: number;
    private _saldo: number = 0;
    public transacoes: Transacao[] = [];

    constructor(){
        this.numConta = Number((Math.random()*(99999999-10000000)+10000000).toFixed(0));
        this.digito = Number((Math.random()*(9-1)+1).toFixed(0));
        this.agencia = Number((Math.random()*(999-100)+100).toFixed(0));;
    }

    public registrarTransacao(valor: number, tipoTransacao: string, contaDestino: Conta){
        const transacao = new Transacao(valor, tipoTransacao, this, contaDestino);
        this.transacoes.push(transacao);
    }

    public get numConta(): number {
        return this._numConta;
    }
    public set numConta(value: number) {
        this._numConta = value;
    }
    public get digito(): number {
        return this._digito;
    }
    public set digito(value: number) {
        this._digito = value;
    }
    public get agencia(): number {
        return this._agencia;
    }
    public set agencia(value: number) {
        this._agencia = value;
    }
    public get saldo(): number {
        return this._saldo;
    }
    public set saldo(value: number) {
        this._saldo = value;
    }
}