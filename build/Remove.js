"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveItem = void 0;
var PromptSync = require("prompt-sync");
var ShowAll_1 = require("./ShowAll");
var prompt = PromptSync();
function RemoveItem(inventory) {
    (0, ShowAll_1.ShowAll)(inventory);
    console.log('Digite o item que você deseja remover: ');
    var removeItem = prompt('--> ');
    var count = 0;
    var sucess = false;
    inventory.forEach(function (item) {
        if (item == removeItem) {
            inventory.splice(count, 1);
            console.clear();
            console.log("O item ".concat(removeItem, " foi removido com sucesso!\n"));
            sucess = true;
        }
    });
    if (!sucess) {
        console.clear();
        console.log("O item ".concat(removeItem, " n\u00E3o foi encontrado no estoque!\n"));
    }
}
exports.RemoveItem = RemoveItem;
