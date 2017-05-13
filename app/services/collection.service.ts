import { Component, Injectable, EventEmitter, Output } from '@angular/core';
import { Item } from '../models/item';
import { Config } from '../config';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class CollectionService {

    public collection: Item[];
    private http: Http;
    @Output() update: EventEmitter<Item[]> = new EventEmitter();
    constructor(http: Http) {
        this.http = http;
    }

    /**
     * get list of collection
     */
    getCollection(): any {
        return this.http.get(Config.URL_API.collection).map(response => {
            this.collection = response.json();
            this.updateCollection();
        }).subscribe();

    }
    /**
     * add collection 
     */
    addItemToCollection(item: Item): any {
        this.http.post(Config.URL_API.collection,item).map(response=>{
          this.collection=response.json();
          this.updateCollection();
        }).subscribe();

    }
    updateCollection() {
        this.update.emit(this.collection);
    }


}