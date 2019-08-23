import React from 'react';
import { shallow } from 'enzyme';
import HeadLine from './HeadLine';
import { findByTestAttribute } from '../../../Utils/index';

const setUp = (props = {}) => {
    const component = shallow(<HeadLine {...props} />);
    return component;
}

describe('HeadLine component', () => {
    describe('has props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                description: 'Some Description'
            };
            wrapper = setUp(props);
        });
        it('should render without errors', () => {
            const component = findByTestAttribute(wrapper, 'headLineComponent');
            expect(component.length).toBe(1);
        });
        it('should render an header title', () => {
            const h1 = findByTestAttribute(wrapper, 'headLineHeader');
            expect(h1.length).toBe(1);
        });
        it('should render a description', () => {
            const description = findByTestAttribute(wrapper, 'headLineDescription');
            expect(description.length).toBe(1);
        });
    });
    describe('has no props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });
        it('should not render', () => {
            const component = findByTestAttribute(wrapper, 'headLineComponent');
            expect(component.length).toBe(0);
        });
    });
});