import { Component } from '@angular/core';
import { Item } from './models/item';
import { Config } from './config';
import { CollectionService } from './services/collection.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: [
        'app/app.component.css'
    ]
})
export class AppComponent {
    private title: string;
    private version: string;
    private collection: Item[];
    constructor( collectionService: CollectionService) {
        this.title = Config.APP_TITLE;
        this.version = Config.APP_VERSION;

         collectionService.update.subscribe((collection : Item[])=>{
             this.collection=collection;

         });
         //collectionService.update.unsubscribe
         collectionService.getCollection();
        ;
    }

   
}
