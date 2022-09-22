"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cartao = void 0;
var Cartao = /** @class */ (function () {
    function Cartao(senha, isFisico, isCredito, isBlock) {
        this.senha = senha;
        this.isFisico = isFisico;
        var c1 = Number((Math.random() * (9999 - 1000) + 1000).toFixed(0));
        var c2 = Number((Math.random() * (9999 - 1000) + 1000).toFixed(0));
        var c3 = Number((Math.random() * (9999 - 1000) + 1000).toFixed(0));
        var c4 = Number((Math.random() * (9999 - 1000) + 1000).toFixed(0));
        this.numCart = "".concat(c1, "-").concat(c2, "-").concat(c3, "-").concat(c4);
        var d = new Date();
        this.dataVenc = "".concat(d.getUTCMonth() + 1, "/").concat(d.getUTCFullYear() + 5);
        this.cvv = Number((Math.random() * (999 - 100) + 100).toFixed(0));
        this.isCredito = isCredito;
        this.isBlock = isBlock;
    }
    Object.defineProperty(Cartao.prototype, "senha", {
        get: function () {
            return this._senha;
        },
        set: function (value) {
            this._senha = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cartao.prototype, "isFisico", {
        get: function () {
            return this._isFisico;
        },
        set: function (value) {
            this._isFisico = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cartao.prototype, "numCart", {
        get: function () {
            return this._numCart;
        },
        set: function (value) {
            this._numCart = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cartao.prototype, "dataVenc", {
        get: function () {
            return this._dataVenc;
        },
        set: function (value) {
            this._dataVenc = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cartao.prototype, "cvv", {
        get: function () {
            return this._cvv;
        },
        set: function (value) {
            this._cvv = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cartao.prototype, "isCredito", {
        get: function () {
            return this._isCredito;
        },
        set: function (value) {
            this._isCredito = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cartao.prototype, "isBlock", {
        get: function () {
            return this._isBlock;
        },
        set: function (value) {
            this._isBlock = value;
        },
        enumerable: false,
        configurable: true
    });
    return Cartao;
}());
exports.Cartao = Cartao;
