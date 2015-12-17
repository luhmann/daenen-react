import React from 'react';
import { expect } from '../utils/expect';
import { render } from 'enzyme';

import Link from '../../javascripts/components/Link.jsx';

describe('Component: Link', () => {
  it('renders an empty link', () => {
    const wrapper = render(<Link />);

    expect(wrapper.find('a').hasClass('link')).to.be.true;
    expect(wrapper.find('a').html()).to.equal('');
  });

  it('renders the correct href when url parameter is passed', () => {
    const wrapper = render(<Link url='http://www.example.org'></Link>);

    expect(wrapper.find('a').attr('href')).to.equal('http://www.example.org');
  });

  it('renders the correct innerText', () => {
    const wrapper = render(<Link>Foo Bar</Link>);

    expect(wrapper.find('a').text()).to.equal('Foo Bar');
  });

  it('renders additional classes', () => {
    const wrapper = render(<Link className='bar'></Link>);

    expect(wrapper.find('a').attr('class')).to.equal('link bar');
  });

  it('renders a title-attribute', () => {
    const wrapper = render(<Link title='bar'></Link>);

    expect(wrapper.find('a').attr('title')).to.equal('bar');
  });

  it('should expand arbitray other props on the element', () => {
    const wrapper = render(<Link data-fun='very nice'></Link>);
    expect(wrapper.find('a').attr('data-fun')).to.equal('very nice');
  });
});
