"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transacao = void 0;
var Transacao = /** @class */ (function () {
    function Transacao(valor, tipoTransacao, contaDestino, contaOrigem) {
        this.valor = valor;
        this.tipoTransacao = tipoTransacao;
        this.dataTransacao = new Date();
        this.contaDestino = contaDestino;
        this.contaOrigem = contaOrigem;
    }
    return Transacao;
}());
exports.Transacao = Transacao;
