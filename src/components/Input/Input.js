import React, {Component} from "react";
import "./Input.css";

class Input extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value || '',
            valid: this.props.valid || false
        }

        this.onChangeInput = this.onChangeInput.bind(this);
        this.onFocusOut = this.onFocusOut.bind(this);
    }

    onChangeInput(e) {
        let result = e.target.value;
        if(result.length > 100) {
            result = result.slice(0,100);
        }
        this.setState({value: result});
    }

    onFocusOut(e) {
        if (this.state.value.length <= 0) {
            this._containerInput.classList.toggle('showValidText', false);
        } else {
            if (this.state.valid) {
                const valid = this.state.valid.test(this.state.value);
                this._containerInput.classList.toggle('showValidText', !valid);
            }
        }
    }

    render() {
        const valid_div = (this.props.validText)?
            <div className="containerInputValidText"><span>{this.props.validText}</span></div>:
            null;
        return (
            <div className="containerInput " ref={(ref) => this._containerInput = ref}>
                <input
                    type="text"
                    className="containerInputInput"
                    value={this.state.value}
                    onChange={ (e) =>{ this.onChangeInput( e); } }
                    onBlur={ this.onFocusOut }
                />
                {valid_div}
            </div>
        );
    }
}

export default Input;
