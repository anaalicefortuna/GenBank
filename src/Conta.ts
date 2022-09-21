import { Cliente } from "./Cliente";
import { Transacao } from "./Transacao";

export class Conta{
    private _tipoConta: string;
    private _numConta: number;
    private _digito: number;
    private _agencia: number;
    private _titular: Cliente;
    private _saldo: number;
    public transacoes: Transacao[] = [];

    constructor(tipoConta: string, titular: Cliente){
        this.tipoConta = tipoConta;
        this.numConta = Number((Math.random()*(99999999-10000000)+10000000).toFixed(0));
        this.digito = Number((Math.random()*(9-1)+1).toFixed(0));
        this.agencia = Number((Math.random()*(999-100)+100).toFixed(0));;
        this.titular = titular;
        this.saldo = 0;
    }

    public get tipoConta(): string {
        return this._tipoConta;
    }
    public set tipoConta(value: string) {
        this._tipoConta = value;
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
    public get titular(): Cliente {
        return this._titular;
    }
    public set titular(value: Cliente) {
        this._titular = value;
    }
    public get saldo(): number {
        return this._saldo;
    }
    public set saldo(value: number) {
        this._saldo = value;
    }
}