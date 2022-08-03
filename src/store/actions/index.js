export function setFilterCategory(_category) {
  return {
    type: 'SET_FILTER_CATEGORY',
    category: _category,
  };
};


export function setProductsSort(_typeSort) {
  return {
    type: 'SET_PRODUCTS_SORT',
    typeSort: _typeSort,
  };
};


export function propductAddToCart(_propduct_id) {
  return {
    type: 'ADD_TO_CART',
    product_id: _propduct_id,
  };
};


export function propductRemFromCart(_propduct_id) {
  return {
    type: 'REM_FROM_CART',
    product_id: _propduct_id,
  };
};
