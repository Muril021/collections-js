"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddItem = void 0;
var PromptSync = require("prompt-sync");
var ShowAll_1 = require("./ShowAll");
var prompt = PromptSync();
function AddItem(inventory) {
    console.clear();
    (0, ShowAll_1.ShowAll)(inventory);
    console.log('Digite o item que você deseja adicionar: ');
    var item = prompt('--> ');
    inventory.push(item);
    console.clear();
    console.log("O item ".concat(item, " foi adicionado com sucesso!"));
}
exports.AddItem = AddItem;
