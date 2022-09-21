import {Cliente} from "./Cliente";

class Transacao{
    public sacar: number;
    public transfPix: number;
    public transferencia: number;
    public quemRecebe: string;
    public quemPaga: string;

    constructor(sacar:number, transfPix:number, transferencia: number, quemRecebe:string,quemPaga: string){
        this.sacar = sacar;
        this.transfPix = transfPix;
        this.transferencia = transferencia;
        this.quemRecebe = quemRecebe;
        this.quemPaga = quemPaga;

        
        
    }
    
    public saque(saldo:number){
        this.
        console.log(`Saque de: ${sacar} realizado com sucesso! Saldo atual: ${saldo-sacar}`);

    }
}

export {Transacao}