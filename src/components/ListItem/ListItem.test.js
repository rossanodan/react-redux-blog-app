import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute, checkProps } from '../../../Utils/index';
import ListItem from './ListItem';

describe('ListItem component', () => {
  describe('checking PropTypes', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        title: 'Example Button Title',
        description: 'Example Button Description',
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe('Component Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: 'Example ListItem Title',
        description: 'Example ListItem Description',
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    it('should render without error', () => {
      const listItem = findByTestAttribute(wrapper, 'listItemComponent');
      expect(listItem.length).toBe(1);
    });
    it('should render a title', () => {
      const title = findByTestAttribute(wrapper, 'listItemTitle');
      expect(title.length).toBe(1);
    });
    it('should render a description', () => {
      const description = findByTestAttribute(wrapper, 'listItemDescription');
      expect(description.length).toBe(1);
    });
  });
  describe('should not render', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        description: 'Example ListItem Description',
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    it('component is not rendered', () => {
      const component = findByTestAttribute(wrapper, 'listItemComponent');
      expect(component.length).toBe(0);
    });
  });
});