import React from 'react';
import Button from './Button';
import './ButtonRemFromCart.css';

class ButtonRemFromCart extends Button {

  constructor(props) {
    super(props);

    this.state = {
      onClick: this.funcOnClick.bind(this)
    }

  }

  funcOnClick() {
    this.props.propductRemFromCartAction(this.props.product_id);
  }

};

// export default ButtonAddToCart;

import { connect } from 'react-redux';

const mapStateToProps = (store, param) => {
  return {
    dopClass: "remove_button"
  };
};

import { propductRemFromCart } from '../../store/actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    propductRemFromCartAction: (_product_id)=>dispatch(propductRemFromCart(_product_id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(ButtonRemFromCart);
