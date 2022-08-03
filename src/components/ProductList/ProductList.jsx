import React from 'react';
import './ProductList.scss';

import Product from '../Product/Product';

import { funcsSort } from '../typesSort'

export function ProductList(props) {

  const products = props.products.slice();
  if (props.sort) {
    products.sort(funcsSort[props.sort]);
  }

  return (
    <div className="componentProductList" >
    {
      products.map((_product)=>{
        let _categoryTitle = false;
        props.categories.some( _category =>{
          if (_category.id === _product.category) {
            _categoryTitle = _category.title;
            return true;
          }
          return false;
        });

        let count_in_cart = 0;
        props.cart_products.some( _cart_product =>{
          if (_cart_product.id === _product.id) {
            count_in_cart = _cart_product.count;
            return true;
          }
          return false;
        });

        return <Product
          key={_product.id}
          categoryTitle={_categoryTitle}
          count_in_cart={count_in_cart}
          {..._product}
        />
      })
    }

    </div>
  );
};


import { connect } from 'react-redux';

const mapStateToProps = (store, param) => {
  return {
    products: store.products,
    categories: store.categories,
    sort: store.sort,
    cart_products: store.cart.products,
    total: store.cart.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(ProductList);
