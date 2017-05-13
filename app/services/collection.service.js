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
var config_1 = require("../config");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var CollectionService = (function () {
    function CollectionService(http) {
        this.update = new core_1.EventEmitter();
        this.http = http;
    }
    /**
     * get list of collection
     */
    CollectionService.prototype.getCollection = function () {
        var _this = this;
        return this.http.get(config_1.Config.URL_API.collection).map(function (response) {
            _this.collection = response.json();
            _this.updateCollection();
        }).subscribe();
    };
    /**
     * add collection
     */
    CollectionService.prototype.addItemToCollection = function (item) {
        var _this = this;
        this.http.post(config_1.Config.URL_API.collection, item).map(function (response) {
            _this.collection = response.json();
            _this.updateCollection();
        }).subscribe();
    };
    CollectionService.prototype.updateCollection = function () {
        this.update.emit(this.collection);
    };
    return CollectionService;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CollectionService.prototype, "update", void 0);
CollectionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CollectionService);
exports.CollectionService = CollectionService;
//# sourceMappingURL=collection.service.js.map