import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ManagerComponent } from './manager/manager.component';
import { SliderComponent } from './slider/slider.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, ProductAddComponent, ManagerComponent, SliderComponent, ProductComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
