import { Action } from '@ngrx/store';
import { Product } from '../models/product';

                            
export const MEAT = 'Meat';

export const SPECIALTY = 'Specialty'

export const MY_PRODUCTS = 'FAVORITE_PRODUCTS';

export class MeatProductsAction implements Action {
    readonly type = MEAT;
}

export class SpecialtyProductsAction implements Action {
    readonly type = SPECIALTY
}


export class FavoriteProductsAction implements Action {
    readonly type = MY_PRODUCTS;

    constructor(public payload: Product[]) {}
}

export type All = MeatProductsAction | SpecialtyProductsAction | FavoriteProductsAction;