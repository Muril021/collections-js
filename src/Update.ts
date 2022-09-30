import PromptSync = require("prompt-sync");
import { ShowAll } from "./ShowAll";

const prompt = PromptSync();

function UpdateItem(inventory: string[]){
    ShowAll(inventory);
    console.log('Digite o item que você deseja atualizar: ');
    const updateItem = prompt('--> ');
    
    let count: number = 0;
    let sucess = false;

    inventory.forEach(item => {
        if(item == updateItem){
            console.log('Digite o nome do novo item: ');
            const newItem = prompt('--> ');
            inventory.splice(count, 1, newItem);
            console.clear();
            console.log(`O item ${updateItem} foi atualizado e agora passa a ser ${newItem}!\n`);
            sucess = true;
        }
        count++;
    })
    if(!sucess){
        console.clear();
        console.log(`O item ${updateItem} não foi encontrado na lista para ser atualizado!\n`);
    }
}
export{UpdateItem};