import React from 'react';
import { render } from 'enzyme';
import { expect } from '../utils/expect';

import ElementWithLabel from '../../client/javascripts/components/ElementWithLabel.jsx';

describe('Component: <ElementWithLabel />', () => {
  it('renders an empty element', () => {
    const wrapper = render(<ElementWithLabel />);
    expect(wrapper.find('.text')).to.have.length(1);
    expect(wrapper.find('.text--label')).to.have.length(1);
  });

  it('renders a label if passed', () => {
    const wrapper = render(<ElementWithLabel label='Foo' />);
    expect(wrapper.find('.text--label').html()).to.equal('Foo:');
  });

  it('renders the children', () => {
    const wrapper = render(<ElementWithLabel label='Foo'><span className='child'>Bar</span></ElementWithLabel>);
    expect(wrapper.find('.text--label').html()).to.equal('Foo:');
    expect(wrapper.find('.child').html()).to.equal('Bar');
  });
});
