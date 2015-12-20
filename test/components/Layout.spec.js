import React from 'react';
import { shallow } from 'enzyme';
import { expect } from '../utils/expect';

import Layout from '../../client/javascripts/components/Layout.jsx';

describe('Component: <Layout />', () => {
  it('should contain to wrapper elements', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find('.layout')).to.have.length(1);
    expect(wrapper.find('.wrapper')).to.have.length(1);
  });

  it('should contain a header element', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find('Header')).to.have.length(1);
  });

  it('should contain a footer element', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find('Footer')).to.have.length(1);
  });

  it('children should be rendered', () => {
    const wrapper = shallow(<Layout><div className='subject'></div></Layout>);
    expect(wrapper.find('.subject')).to.have.length(1);
  });
});
