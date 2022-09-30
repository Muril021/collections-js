"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Add_1 = require("./Add");
var Menu_1 = require("./Menu");
var Remove_1 = require("./Remove");
var ShowAll_1 = require("./ShowAll");
var showMenu_1 = require("./showMenu");
var Update_1 = require("./Update");
var inventory = [];
var choice;
do {
    choice = (0, showMenu_1.showMenu)();
    switch (choice) {
        case Menu_1.Menu.add:
            (0, Add_1.AddItem)(inventory);
            break;
        case Menu_1.Menu.remove:
            (0, Remove_1.RemoveItem)(inventory);
            break;
        case Menu_1.Menu.update:
            (0, Update_1.UpdateItem)(inventory);
            break;
        case Menu_1.Menu.showAll:
            (0, ShowAll_1.ShowAll)(inventory);
            break;
        case Menu_1.Menu.exit:
            console.log('Programa finalizado!\n');
            break;
    }
} while (choice != Menu_1.Menu.exit);
