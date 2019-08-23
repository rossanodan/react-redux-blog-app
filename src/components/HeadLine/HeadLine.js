import React from 'react';

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

export default HeadLine;