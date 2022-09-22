"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var Transacao_1 = require("./Transacao");
var Conta = /** @class */ (function () {
    function Conta() {
        this._saldo = 0;
        this.transacoes = [];
        this.numConta = Number((Math.random() * (99999999 - 10000000) + 10000000).toFixed(0));
        this.digito = Number((Math.random() * (9 - 1) + 1).toFixed(0));
        this.agencia = Number((Math.random() * (999 - 100) + 100).toFixed(0));
        ;
    }
    Conta.prototype.registrarTransacao = function (valor, tipoTransacao, contaDestino) {
        var transacao = new Transacao_1.Transacao(valor, tipoTransacao, this, contaDestino);
        this.transacoes.push(transacao);
    };
    Object.defineProperty(Conta.prototype, "numConta", {
        get: function () {
            return this._numConta;
        },
        set: function (value) {
            this._numConta = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "digito", {
        get: function () {
            return this._digito;
        },
        set: function (value) {
            this._digito = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "agencia", {
        get: function () {
            return this._agencia;
        },
        set: function (value) {
            this._agencia = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        set: function (value) {
            this._saldo = value;
        },
        enumerable: false,
        configurable: true
    });
    return Conta;
}());
exports.Conta = Conta;
