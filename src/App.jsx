import React from "react";
import './App.css';
import './listHeader.scss';

import {
  Switch,
  Routes,
  Route,
  NavLink,
  HashRouter as Router
} from "react-router-dom";

import SelectCategory from './components/Select/SelectCategory';
import SelectSort from './components/Select/SelectSort';
import ProductList from './components/ProductList/ProductList';

import Cart from './components/Cart/Cart';

import Order from './components/Order/Order';

class App extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App" >
        <Router>
          <div className="shopHeader" >
            <div>
              <div className="shopEmblem" />
              <h1 className="shopTitle"> Магазин товаров </h1>
            </div>
            <div>
              <ul className="listHeader">
                {/* <li key="ul_li_home">
                     <NavLink to="/" >
                      <span className="normal">Задание</span>
                      <span className="bold">Задание</span>
                     </NavLink>
                </li>*/}
                <li key="ul_li_products">
                  <NavLink to="/" >
                    <span className="normal">Товары</span>
                    <span className="bold">Товары</span>
                  </NavLink>
                </li>
                <li key="ul_li_cart">
                  <NavLink to="/list_note" >
                    <span className="normal">Корзина</span>
                    <span className="bold">Корзина</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="shopContent" >
            <Routes>
              <Route path="/" element={
                <div>
                  <div className="productsProperties" >
                    <div className="line">
                      <div>Категория: </div>
                      <SelectCategory />
                    </div>
                    <div className="line">
                      <div>Сортировать: </div>
                      <SelectSort />
                    </div>
                  </div>
                  <ProductList />
                </div>
              } />
              <Route path="/list_note" element={<Cart />} />
              <Route path="/order" element={<Order />} >
                <Route path=":step_id" element={<Order />} />
              </Route>
            </Routes>
          </div>

          <div className = "shopFooter" >

          </div>
        </Router>
      </div>
    );

  };

};

export default App;

// import { connect } from 'react-redux';

// const mapStateToProps = (store, param) => {
//   return {

//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {

//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
//   )(App);
