import { Conta } from "./Conta";

export abstract class Cliente{
    public nome: string;
    private _endereco: string;
    private _telefone: number;
    private _email: string;
    private _senha: string;
    private _conta: Conta;

    constructor(nome: string, endereco: string, telefone: number, email: string, senha: string){
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.email = email;
        this.senha = senha;
    }

    public abrirConta(tipoConta: string){
        this.conta = new Conta('Corrente', this);
    }

    public get endereco(): string {
        return this._endereco;
    }
    public set endereco(value: string) {
        this._endereco = value;
    }
    public get telefone(): number {
        return this._telefone;
    }
    public set telefone(value: number) {
        this._telefone = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get senha(): string {
        return this._senha;
    }
    public set senha(value: string) {
        this._senha = value;
    }
    public get conta(): Conta {
        return this._conta;
    }
    public set conta(value: Conta) {
        this._conta = value;
    }
}