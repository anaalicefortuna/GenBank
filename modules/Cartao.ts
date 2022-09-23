import { Cliente } from "./Cliente";

export class Cartao {
    private _senha: number;
    private _isFisico: boolean;
    private _numCart: string;
    private _dataVenc: string;
    private _cvv: number;
    private _isCredito: boolean;
    private _isBlock: boolean;

    constructor (senha: number, isFisico: boolean, isCredito: boolean, isBlock: boolean){
            this.senha = senha;
            this.isFisico = isFisico;
            
            const c1 = Number((Math.random()*(9999-1000)+1000).toFixed(0));
            const c2 = Number((Math.random()*(9999-1000)+1000).toFixed(0));
            const c3 = Number((Math.random()*(9999-1000)+1000).toFixed(0));
            const c4 = Number((Math.random()*(9999-1000)+1000).toFixed(0));
            this.numCart = `${c1}-${c2}-${c3}-${c4}`;

            const d = new Date();
            this.dataVenc = `${d.getUTCMonth()+1}/${d.getUTCFullYear()+5}`;

            this.cvv = Number((Math.random()*(999-100)+100).toFixed(0));
            this.isCredito = isCredito;
            this.isBlock = isBlock;
    }

    
    public get senha(): number {
        return this._senha;
    }
    public set senha(value: number) {
        this._senha = value;
    }
    public get isFisico(): boolean {
        return this._isFisico;
    }
    public set isFisico(value: boolean) {
        this._isFisico = value;
    }
    public get numCart(): string {
        return this._numCart;
    }
    public set numCart(value: string) {
        this._numCart = value;
    }
    public get dataVenc(): string {
        return this._dataVenc;
    }
    public set dataVenc(value: string) {
        this._dataVenc = value;
    }
    public get cvv(): number {
        return this._cvv;
    }
    public set cvv(value: number) {
        this._cvv = value;
    }
    public get isCredito(): boolean {
        return this._isCredito;
    }
    public set isCredito(value: boolean) {
        this._isCredito = value;
    }
    public get isBlock(): boolean {
        return this._isBlock;
    }
    public set isBlock(value: boolean) {
        this._isBlock = value;
    }
    
}
