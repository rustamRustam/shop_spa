import React from 'react';
import './ProductData.scss';

export default function ProductInfo(props) {
  const divStyle = {
    backgroundImage: "url(" + props.img + ")",
  };

  return (
    <div className="productData">
      <div className="productImg" style={ divStyle } />
      <div className="productData">
        <div className="productTitle"><h1>{props.title}</h1></div>
        <div className="productCategoryTitle">Категория: <h3>{props.categoryTitle}</h3></div>
        <div className="productPrice"><span>Цена: </span><span>{props.price}</span><span>₽</span></div>
        <div className="productInfo">{props.info}</div>
      </div>
    </div>
  );
};
