"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isLogado = false;
var menu_1 = require("../modules/menu");
var PromptSync = require("prompt-sync");
var option = 0;
var prompt = PromptSync();
console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|    ');
console.log('    |~~~ BEM VINDO AO GENBANK ~~~|   ');
console.log('    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|\n\n    ');
prompt('Pressione ENTER para ir ao menu');
do {
    (0, menu_1.menu)();
    option = Number(prompt('>> '));
    console.clear();
    switch (option) {
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        default:
            break;
    }
} while (option != 4);
