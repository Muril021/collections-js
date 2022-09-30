"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateItem = void 0;
var PromptSync = require("prompt-sync");
var ShowAll_1 = require("./ShowAll");
var prompt = PromptSync();
function UpdateItem(inventory) {
    (0, ShowAll_1.ShowAll)(inventory);
    console.log('Digite o item que você deseja atualizar: ');
    var updateItem = prompt('--> ');
    var count = 0;
    var sucess = false;
    inventory.forEach(function (item) {
        if (item == updateItem) {
            console.log('Digite o nome do novo item: ');
            var newItem = prompt('--> ');
            inventory.splice(count, 1, newItem);
            console.clear();
            console.log("O item ".concat(updateItem, " foi atualizado e agora passa a ser ").concat(newItem, "!\n"));
            sucess = true;
        }
        count++;
    });
    if (!sucess) {
        console.clear();
        console.log("O item ".concat(updateItem, " n\u00E3o foi encontrado na lista para ser atualizado!\n"));
    }
}
exports.UpdateItem = UpdateItem;
