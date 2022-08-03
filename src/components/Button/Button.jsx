import React from 'react';
import './Button.scss';

export default class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const props = this.props;
    return (
      <div className="divButton">
        <button className={props.dopClass} onClick={this.state.onClick} >{props.title}</button>
      </div>
    );
  }
};
