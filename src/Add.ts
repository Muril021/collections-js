import PromptSync = require("prompt-sync");
import { ShowAll } from "./ShowAll";

const prompt = PromptSync();

function AddItem(inventory: string[]){
    console.clear();
    ShowAll(inventory);
    console.log('Digite o item que você deseja adicionar: ');
    const item = prompt('--> ');

    inventory.push(item);
    
    console.clear();
    console.log(`O item ${item} foi adicionado com sucesso!`);
}
export{AddItem};