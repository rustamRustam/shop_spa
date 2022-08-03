import React from 'react';

import Select from './Select';

import typesSort from '../typesSort';

export function SelectSort(props) {
  const changeCurrentValue = (_current, _currentText, _self) => {
    props.setProductsSortAction(_current);
  };

  const typesSortes = typesSort;

  return (
    <Select
      current={props.current}
      values={typesSortes}
      nameValue={'name'}
      changeCurrentValue={changeCurrentValue}
    />
  );
};


import { connect } from 'react-redux';

const mapStateToProps = (store, param) => {
  return {
    current: store.sort,
  };
};

import { setProductsSort } from '../../store/actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    setProductsSortAction: (_typeSort)=>dispatch(setProductsSort(_typeSort)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(SelectSort);
