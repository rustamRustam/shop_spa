import React from 'react';
import Button from './Button';

class ButtonAddToCart extends Button {

  constructor(props) {
    super(props);

    this.state = {
      onClick: this.funcOnClick.bind(this)
    }

  }

  funcOnClick() {
    this.props.propductAddToCartAction(this.props.product_id);
  }

};

// export default ButtonAddToCart;

import { connect } from 'react-redux';

const mapStateToProps = (store, param) => {
  return {
    dopClass: "add_button"
  };
};

import { propductAddToCart } from '../../store/actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    propductAddToCartAction: (_product_id)=>dispatch(propductAddToCart(_product_id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(ButtonAddToCart);
