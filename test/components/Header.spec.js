import React from 'react';
import { render } from 'enzyme';
import { expect } from '../utils/expect';

import Header from '../../client/javascripts/components/Header.jsx';

describe('Component: <Header />', () => {
  it('should contain a header element', () => {
    const wrapper = render(<Header />);
    expect(wrapper.find('.header')).to.have.length(1);
  });

  it('should contain a a logo', () => {
    const wrapper = render(<Header />);
    expect(wrapper.find('.header--logo')).to.have.length(1);
    expect(wrapper.find('a')).to.have.length(1);
  });
});
