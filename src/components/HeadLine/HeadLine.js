import React from 'react';
import PropTypes from 'prop-types';

class HeadLine extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		const { header, description } = this.props;
		if (!header) {
			return null;
		}
		return (
			<div data-test="headLineComponent">
				<h1 data-test="headLineHeader">{header}</h1>
				<p data-test="headLineDescription">{description}</p>
			</div>
		);
	}
}

HeadLine.propTypes = {
	header: PropTypes.string,
	description: PropTypes.string,
	tempArray: PropTypes.arrayOf(PropTypes.shape({
		firstName: PropTypes.string,
		lastName: PropTypes.string,
		email: PropTypes.string,
		age: PropTypes.number,
		onlineStatus: PropTypes.bool
	}))
};

export default HeadLine;