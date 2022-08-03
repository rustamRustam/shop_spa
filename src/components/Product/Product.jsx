import React from 'react';
import './Product.scss';

import ProductData from './ProductData';
import ButtonAdd from '../Button/ButtonAddToCart';
import ButtonRemove from '../Button/ButtonRemFromCart';

export default function Product(props) {
  let remButton = null;
  if(props.count_in_cart) {
    remButton = <div className="blockRem">
        <ButtonRemove title="Из корзины" product_id={props.id} />
        <div className="countInCart">В корзине {props.count_in_cart} шт.</div>
      </div>
  }

  return (
    <div className="product">
      <ProductData {...props} />
      <div className="propductButton">
        <ButtonAdd title="В корзину" product_id={props.id} />
        {remButton}
      </div>
    </div>
  );
};
