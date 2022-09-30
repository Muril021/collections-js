import { AddItem } from "./Add";
import { Menu } from "./Menu";
import { RemoveItem } from "./Remove";
import { ShowAll } from "./ShowAll";
import { showMenu } from "./showMenu";
import { UpdateItem } from "./Update";

const inventory: string[] = []

let choice: Menu;

do{
    choice = showMenu();

    switch(choice){
        case Menu.add:
            AddItem(inventory);
        break;
        case Menu.remove:
            RemoveItem(inventory);
        break;
        case Menu.update:
            UpdateItem(inventory);
        break;
        case Menu.showAll:
            ShowAll(inventory);
        break;
        case Menu.exit:
            console.log('Programa finalizado!\n');
        break;
    }
}while(choice!=Menu.exit);