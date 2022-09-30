import PromptSync = require("prompt-sync");
import { ShowAll } from "./ShowAll";

const prompt = PromptSync();

function RemoveItem(inventory: string[]){
    ShowAll(inventory);
    console.log('Digite o item que você deseja remover: ');
    const removeItem = prompt('--> ');

    let count: number = 0;
    let sucess = false;

    inventory.forEach(item => {
        if(item == removeItem){
            inventory.splice(count, 1);
            console.clear();
            console.log(`O item ${removeItem} foi removido com sucesso!\n`);
            sucess = true;
        }
    })
    if(!sucess){
        console.clear();
        console.log(`O item ${removeItem} não foi encontrado no estoque!\n`);
    }
    
}
export{RemoveItem};