import { Component, Injectable } from '@angular/core';
import { Item } from '../models/item';
import { Config } from '../config';
import { CollectionService } from '../services/collection.service';
@Injectable()
export class ItemService {

    private collectionService: CollectionService
    constructor(collectionService: CollectionService) {

        this.collectionService = collectionService;
    }


    addItemToCollection(item: Item):void {
        this.collectionService.addItemToCollection(item);
    }
    createNewItem(): Item {
        return new Item({ reference: '', name: '', state: 0 });
    }

}