import React, { useEffect } from 'react';
import './Order.scss';

import { useParams, NavLink } from "react-router-dom";

import Button from '../Button/Button';
import Buyer from './Buyer';
import CardFram from './CardFram';
import Address from './Address';

const min_step = 1;
const max_step = 3;
const titleSteps = [
  "",
  "Покупатель",
  "Карта",
  "Адресс",
];


export function Order(props) {

  let { step_id } =  useParams();
  if (!step_id) {
    step_id = min_step;
  } else {
    step_id = +step_id;
  }

  // Нужна проверка на min max

  function renderUnde(_step_id){
    if(_step_id > min_step){
      return (
        <NavLink to= {"" + (+_step_id - 1)} >
          <Button title={"<< "+titleSteps[_step_id - 1]} dopClass="step-button" />
        </NavLink>
      );
    }
  }

  function renderNext(_step_id){
    if(_step_id < max_step){
      return (
        <NavLink to= {"" + (+_step_id + 1) } >
          <Button title={titleSteps[_step_id + 1] + " >>"} dopClass="step-button" />
        </NavLink>
      );
    }
  }

  let orderContent = null;
  switch(step_id) {
    case 1: orderContent = <Buyer />; break;
    case 2: orderContent = <CardFram />; break;
    case 3: orderContent = <Address />; break;
  };


  // useEffect(()=>{
  //   console.log('Ura');
  //   return ()=>{
  //     console.log('Dva Ura');
  //   }
  // });

  return (
    <div className="orderData">
      <div className="orderTitle"><h3>Оформление заказа</h3></div>
      <div className="orderProcess">
      {
        (()=>{
          let result = [];
          for( let _step=min_step; _step<=max_step; ++_step) {
            const _cl = (_step < step_id)?"full":( (_step === step_id)?"current":"" );
            result.push( <div key={_step} className={"orderProcessStep " + _cl} >{titleSteps[_step]}</div> );
          }
          return result;
        })()
      }
      </div>

      <div className="orderContent">
        {orderContent}
      </div>


      <div className="orderSteps">
        <div className="orderStep Unde">
          {renderUnde(step_id) }
        </div>
        <div className="orderStep Next">
          {renderNext(step_id)}
        </div>
      </div>
    </div>
  );
}

import { connect } from 'react-redux';

const mapStateToProps = (store, param) => {
  return {
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
  )(Order);