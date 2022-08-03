import React from 'react';
import './Cart.scss';

import ProductCart from '../Product/ProductCart';
import { NavLink } from "react-router-dom";
import Button from '../Button/Button';

export function Cart(props) {

  if (props.cart.products.length) {
    return (
      <div className="cartData">
        {
          props.cart.products.map((_product)=>{
            let _categoryTitle = false;
            props.categories.some( _category =>{
              if (_category.id === _product.category) {
                _categoryTitle = _category.title;
                return true;
              }
              return false;
            });

            return <ProductCart
              key={_product.id}
              categoryTitle={_categoryTitle}
              {..._product}
            />
          })
        }
        <div className="cartTotal">
          <span>Итого: </span><span className="total">{props.cart.total}</span><span>₽</span>
        </div>

        <NavLink to="/order" >
          <Button title="Оформить" dopClass="place-order-button" />
        </NavLink>

      </div>
    );
  } else {
    return (
      <div className="cartData empty">
        <div className="cartEmpty">
          В корзине нет ни одного товара.
        </div>
        <NavLink to="/" >
          <Button title="К товарам" dopClass="to-products-button" />
        </NavLink>
      </div>
    );
  }
};

import { connect } from 'react-redux';

const mapStateToProps = (store, param) => {
  return {
    categories: store.categories,
    cart: store.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Cart);
