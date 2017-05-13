import { Component } from '@angular/core';
import { Item } from './models/item';
import { ItemService } from './services/item.service';
@Component({
    selector: 'item-form',
    templateUrl: 'app/item.form.html'
})
export class ItemForm {
    private item: Item;
    private itemService: ItemService;
    constructor(itemService: ItemService) {
        this.itemService = itemService;
        this.resetItem();
    }

    resetItem() {
        this.item = this.itemService.createNewItem();
    }

    createItem() {
        this.itemService.addItemToCollection(this.item);
        this.resetItem();
    }
}
