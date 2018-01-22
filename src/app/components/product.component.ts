import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Product } from "../models/product";
import * as articleReducer from "../reducers/product.reducer";
import * as fromActions from "../actions/product.actions";
import { ProductState } from "../reducers/app.states";
import { Article, FAVORITE_ARTICLES } from "../models/product";


@Component({
    selector: 'app-product',
    templateUrl:'product.component.html'
})

export class ProductComponent {
    products: Observable<Product[]>
}