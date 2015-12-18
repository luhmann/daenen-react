import React from 'react';
import { render } from 'enzyme';
import { expect } from '../utils/expect';

import Layout from '../../javascripts/components/Layout.jsx';

describe('Component: <Layout />', () => {
  it('should contain a header element', () => {
    const wrapper = render(<Layout />);
    expect(wrapper.find('.header')).to.have.length(1);
  });

  it('should contain a link to impress', () => {
    const wrapper = render(<Layout />);
    expect(wrapper.find('.header--logo')).to.have.length(1);
  });
});
