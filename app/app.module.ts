import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {ItemService} from './services/item.service';
import {CollectionService} from './services/collection.service';

import { TitleModule }   from './title/title.module';

import { AppComponent }  from './app.component';
import {Item as ItemComponent} from './item';
import {ItemForm} from './item.form';
import {ItemPipe} from './pipes/item.filter';
import {HttpModule} from '@angular/http';
@NgModule({
  imports: [HttpModule,BrowserModule, FormsModule, TitleModule],
  declarations: [AppComponent, ItemComponent, ItemForm, ItemPipe],
  bootstrap: [AppComponent],
  providers :[ItemService,CollectionService]
})
export class AppModule { }
