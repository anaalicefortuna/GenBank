import { Cliente } from "./Cliente";

export class Cartao {
    private _senha: number;
    private _isFisico : boolean;
    private _numCart: number;
    private _dataVenc: number;
    private _cvv: number;
    private _isCredito: boolean;
    private _isBlock: boolean;

    constructor (isFisico: boolean, isCredito: boolean, isBlock: boolean){
            this.senha = Number((Math.random()*(4-1)+1).toFixed(0));
            this.isFisico = isFisico;
            this.numCart = Number((Math.random()*(16-1)+1).toFixed(0));
            this.dataVenc = Number((Math.random()*(4-1)+1).toFixed(0));
            this.cvv = Number((Math.random()*(3-1)+1).toFixed(0));
            this.isCredito = isCredito;
            this.isBlock = isBlock;
    }
    
}
