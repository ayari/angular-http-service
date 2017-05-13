"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_1 = require("../models/item");
var collection_service_1 = require("../services/collection.service");
var ItemService = (function () {
    function ItemService(collectionService) {
        this.collectionService = collectionService;
    }
    ItemService.prototype.addItemToCollection = function (item) {
        this.collectionService.addItemToCollection(item);
    };
    ItemService.prototype.createNewItem = function () {
        return new item_1.Item({ reference: '', name: '', state: 0 });
    };
    return ItemService;
}());
ItemService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [collection_service_1.CollectionService])
], ItemService);
exports.ItemService = ItemService;
//# sourceMappingURL=item.service.js.map