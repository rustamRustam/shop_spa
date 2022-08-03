import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';

import products from './data/products';
import categories from './data/categorys';

const persistedState = ()=>{
    let result = {};
    if(localStorage.hasOwnProperty('shop_spa')) {
        const _data = localStorage.getItem('shop_spa');
        if (_data && _data != 'undefined') {
            result = JSON.parse(_data);
            // result.products = products;
            // result.categories = categories;
        }
    }

    return result;
}

export const store = createStore(
    rootReducer,
    persistedState(),
    applyMiddleware(thunk),
);

store.subscribe(() => {
  localStorage.setItem('shop_spa', JSON.stringify(store.getState()))
});

window.onstorage = event => {
    // тут обработать изменения в другом окне
};
