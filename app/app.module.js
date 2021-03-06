"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var item_service_1 = require("./services/item.service");
var collection_service_1 = require("./services/collection.service");
var title_module_1 = require("./title/title.module");
var app_component_1 = require("./app.component");
var item_1 = require("./item");
var item_form_1 = require("./item.form");
var item_filter_1 = require("./pipes/item.filter");
var http_1 = require("@angular/http");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [http_1.HttpModule, platform_browser_1.BrowserModule, forms_1.FormsModule, title_module_1.TitleModule],
        declarations: [app_component_1.AppComponent, item_1.Item, item_form_1.ItemForm, item_filter_1.ItemPipe],
        bootstrap: [app_component_1.AppComponent],
        providers: [item_service_1.ItemService, collection_service_1.CollectionService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map