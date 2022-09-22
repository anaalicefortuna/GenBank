"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Conta_1 = require("./Conta");
var Cliente = /** @class */ (function () {
    function Cliente(nome, endereco, telefone, email, senha) {
        this.cartoes = [];
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.email = email;
        this.senha = senha;
        this.conta = new Conta_1.Conta();
    }
    Object.defineProperty(Cliente.prototype, "endereco", {
        get: function () {
            return this._endereco;
        },
        set: function (value) {
            this._endereco = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "telefone", {
        get: function () {
            return this._telefone;
        },
        set: function (value) {
            this._telefone = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "senha", {
        get: function () {
            return this._senha;
        },
        set: function (value) {
            this._senha = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "conta", {
        get: function () {
            return this._conta;
        },
        set: function (value) {
            this._conta = value;
        },
        enumerable: false,
        configurable: true
    });
    return Cliente;
}());
exports.Cliente = Cliente;
