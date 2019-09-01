import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  submitEvent = () => {
    if (this.props.emitEvent) {
      this.props.emitEvent();
    }
  }
  render () {
    const { buttonText } = this.props;
    return (
      <button onClick={this.submitEvent} data-test="buttonComponent" className="Button">{buttonText}</button>
    );
  }
}

Button.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
};

export default Button;