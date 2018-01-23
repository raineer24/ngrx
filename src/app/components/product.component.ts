import { Store } from "@ngrx/store";
import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import * as productReducer from "../reducers/product.reducer";
import * as fromActions from "../actions/product.actions";
import { ProductState } from "../reducers/app.states";
import { Product, FAVORITE_PRODUCTS } from "../models/product";
import { constructDependencies } from "@angular/core/src/di/reflective_provider";


@Component({
    selector: 'app-product',
    templateUrl:'product.component.html'
})

export class ProductComponent {
    products: Observable<Product[]>

    constructor(private store: Store<ProductState>) {
        this.products = store.select(productReducer.getProducts);
    }
    showMeatProducts(){
      this.store.dispatch(new fromActions.MeatProductsAction());
    }
    showSpecialtyProducts() {
      this.store.dispatch(new fromActions.SpecialtyProductsAction());
    }
    showFavoriteProducts(){
      this.store.dispatch(new fromActions.FavoriteProductsAction(FAVORITE_PRODUCTS));
    }
}