import React from 'react';
import { shallow } from 'enzyme'
import { findByTestAttribute } from '../../../Utils/index';
import Header from './Header';

const setUp = (props = {}) => {
	const component = shallow(<Header {...props} />);
	return component;
}

describe('Header component', () => {

	let component;
	beforeEach(() => {
		component = setUp();
	});

	it('should render without errors', () => {
		// console.log(component.debug());
		const wrapper = findByTestAttribute(component, 'headerComponent');
		expect(wrapper.length).toBe(1); 
	});

	it('should render a logo', () => {
		const logo = findByTestAttribute(component, 'logoImg');
		expect(logo.length).toBe(1);
	});

});