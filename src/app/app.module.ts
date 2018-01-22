import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from "@ngrx/store";
import { ProductComponent } from "./components/product.component";

import { AppComponent } from './app.component';
import { Components } from './components.product/components.product.component';
import { ComponentsComponent } from './components/components.component';


@NgModule({
  declarations: [AppComponent, ProductComponent, Components.ProductComponent, ComponentsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
