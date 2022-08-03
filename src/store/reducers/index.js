import { combineReducers } from 'redux';

import products from '../data/products';
export function dataProducts(state = products, action) {
  switch (action.type) {
    case 'SET_FILTER_CATEGORY':
      if (action.category === 'c0') {
        return products;
      } else {
        return products.filter((_product)=>{
          return _product.category === action.category;
        });
      }
  }
  return state;
};

import categories from '../data/categorys';
export function dataCategories(state = categories) {
  return state;
};

export function filterCategory(state = "c0", action) {
  switch (action.type) {
    case 'SET_FILTER_CATEGORY':
      state = action.category;
      return state
    default:
      return state;
  }
};

export function productsSort(state = 0, action) {
  switch (action.type) {
    case 'SET_PRODUCTS_SORT':
      state = action.typeSort;
      return state
    default:
      return state;
  }
};

let defCart = {
  products: [],
  total: 0
};

function calcTotal(_products) {
  return _products.reduce((_summ, _product)=>{
    return (_summ + (_product.count * (+_product.price)));
  }, 0 );
}

import {getProductById} from '../data/products';

export function dataCart(state = defCart, action) {

  switch (action.type) {
    case 'ADD_TO_CART':
      const inc_count = state.products.some((_product)=>{
        if (_product.id === action.product_id) {
          ++_product.count;
          return true;
        }
        return false;
      });
      if(!inc_count) {
        const product = getProductById(action.product_id);
        if(product) {
          state.products.push(Object.assign(
            {},
            product,
            {count: 1}
          ));
        }
      }
      return Object.assign({}, state, {total: calcTotal(state.products)});
    case 'REM_FROM_CART':
      let rem_ind = -1;
      state.products.some((_product, _ind)=>{
        if (_product.id === action.product_id) {
          --_product.count;
          rem_ind = _ind;
          return true;
        }
        return false;
      });

      if (rem_ind >= 0 && state.products[rem_ind].count <= 0) {
        state.products.splice(rem_ind, 1);
      }

      return Object.assign({}, state, {total: calcTotal(state.products)});
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  category: filterCategory,
  sort: productsSort,
  products: dataProducts,
  categories: dataCategories,
  cart: dataCart,
});


// export const initialState = {
//   user: 'Unknown User',
// };

// export function rootReducer(state = initialState) {
//   return state;
// };

