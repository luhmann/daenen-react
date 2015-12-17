import React from 'react';
import { shallow } from 'enzyme';
import { expect } from '../utils/expect';

import Content from '../../javascripts/components/Content';

describe('Component: <Content />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Content />);
  });

  it('should render a content-area', () => {
    expect(wrapper.find('.content')).to.have.length(1);
  });

  it('should render two developer components', () => {
    expect(wrapper.find('Developer')).to.have.length(2);
  });
});
