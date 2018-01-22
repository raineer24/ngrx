import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';

import { AppState } from './app.states';

import * as productReducer from './product.reducer';

import { environment } from '../../environments/environment';


export const reducers: ActionReducerMap<AppState> = {
    productState: productReducer.reducer
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    return function(state: AppState, action: any): AppState {
            console.log('state', state);
            console.log('state', action);
            return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
    ? [logger]
    : [];
