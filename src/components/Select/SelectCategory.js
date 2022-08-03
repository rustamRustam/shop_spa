import React from 'react';

import Select from './Select';

export function SelectCategory(props) {
  const changeCurrentValue = (_current, _currentText, _self) => {
    props.setFilterCategoryAction(_current);
  };

  return (
    <Select
      current={props.current}
      values={props.categories}
      nameValue={'title'}
      changeCurrentValue={changeCurrentValue}
    />
  );
};


import { connect } from 'react-redux';

const mapStateToProps = (store, param) => {
  console.log(store);
  return {
    current: store.category,
    categories: store.categories,
  };
};

import { setFilterCategory } from '../../store/actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    setFilterCategoryAction: (_category)=>dispatch(setFilterCategory(_category)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(SelectCategory);
