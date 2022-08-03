import React from 'react';
import './Product.scss';

import ProductData from './ProductData';

import ButtonRemove from '../Button/ButtonRemFromCart';

export default function ProductCart(props) {

  return (
    <div className="product">
      <ProductData {...props} />
      <div className="propductButton">
        <div className="blockRem">
          <ButtonRemove title="Из корзины" product_id={props.id} />
          <div className="countInCart">В корзине {props.count} шт.</div>
        </div>
      </div>
    </div>
  );
};
