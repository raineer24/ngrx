import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from '../actions/product.actions';
import { MEAT_PRODUCTS, SPECIALTY_PRODUCTS } from '../models/product';
import { ProductState } from './app.states';

export const initialState: ProductState = { products: []};

export function reducer(state = initialState, action: fromActions.All): ProductState {
    switch(action.type) {
        case fromActions.MEAT: {
            return {products: MEAT_PRODUCTS};
        }
        case fromActions.SPECIALTY: {
            return { products: SPECIALTY_PRODUCTS};
        }
        case fromActions.MY_PRODUCTS: {
            return { products: action.payload};
        }
        default: {
            return state;
        }
    }
}

export const getProductState = createFeatureSelector<ProductState>('productState');

export const getProducts = createSelector (
    getProductState,
    (state: ProductState) => state.products
);