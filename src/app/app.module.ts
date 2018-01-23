import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from "@ngrx/store";
import { ProductComponent } from "./components/product.component";

import { AppComponent } from './app.component';

import { reducers, metaReducers } from './reducers/reducers';

import { StoreDevtoolsModule } from "@ngrx/store-devtools";


@NgModule({
  declarations: [AppComponent, ProductComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
