import React from 'react';
import './Buyer.scss';
import Input from '../Input/Input';

class Buyer extends React.Component {

  constructor(props) {
    super(props);

  }

  funcOnClick() {
    this.props.propductAddToCartAction(this.props.product_id);
  }

  render() {
    return(
      <div className="componentBuyer">
        <div className="lineBuyer">
          <span>Фамилия</span>
          <Input
            valid={/^[A-Za-zА-ЯЁа-яё]+$/}
            validText="Поле Фамилия должно содержать только буквы."
          />
        </div>
        <div className="lineBuyer">
          <span>Имя</span>
          <Input
            valid={/^[A-Za-zА-ЯЁа-яё]+$/}
            validText="Поле Имя должно содержать только буквы."
          />
        </div>
        <div className="lineBuyer">
          <span>Отчество</span>
          <Input
            valid={/^[A-Za-zА-ЯЁа-яё]+$/}
            validText="Поле Отчество должно содержать только буквы."
          />
        </div>
        <div className="lineBuyer">
          <span>Телефон</span>
          <Input
            valid={/^[\d\+][\d\(\)\ -]{4,14}\d$/}
            validText="Поле Телефон заполнено не верно."
          />
        </div>
        <div className="lineBuyer">
          <span>E-mail</span>
          <Input
            valid={/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i}
            validText="Поле E-mail заполнено не верно."
          />
        </div>
      </div>
    );
  }


};

export default Buyer;

// import { connect } from 'react-redux';

// const mapStateToProps = (store, param) => {
//   return {
//     dopClass: "add_button"
//   };
// };

// import { propductAddToCart } from '../../store/actions/index';

// const mapDispatchToProps = (dispatch) => {
//   return {
//     propductAddToCartAction: (_product_id)=>dispatch(propductAddToCart(_product_id)),
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
//   )(ButtonAddToCart);
