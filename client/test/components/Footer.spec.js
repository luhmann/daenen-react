import React from 'react';
import { render } from 'enzyme';
import { expect } from '../utils/expect';

import Footer from '../../javascripts/components/Footer.jsx';

describe('Component: <Footer />', () => {
  it('should contain a footer element', () => {
    const wrapper = render(<Footer />);
    expect(wrapper.find('.footer')).to.have.length(1);
  });

  it('should contain a link to impress', () => {
    const wrapper = render(<Footer />);
    expect(wrapper.find('a').text()).to.contain('Impressum');
  });
});
