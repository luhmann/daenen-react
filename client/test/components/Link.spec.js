import React from 'react';
import { expect } from '../utils/expect';
import { buildAndSelectElementByTag } from '../utils/helper';

import Link from '../../javascripts/components/Link.jsx';

describe('Component: Link', () => {
  it('renders an empty link', () => {
    const subject = buildAndSelectElementByTag(<Link />, 'a');

    expect(subject.getAttribute('class')).to.equal('link');
    expect(subject.innerHTML).to.equal('');
  });

  it('renders the correct href when url parameter is passed', () => {
    const subject = buildAndSelectElementByTag(<Link url='http://www.example.org'></Link>, 'a');

    expect(subject.getAttribute('href')).to.equal('http://www.example.org');
  });

  it('renders the correct innerText', () => {
    const subject = buildAndSelectElementByTag(<Link>Foo Bar</Link>, 'a');

    expect(subject.innerHTML).to.equal('Foo Bar');
  });

  it('renders additional classes', () => {
    const subject = buildAndSelectElementByTag(<Link className='bar'></Link>, 'a');

    expect(subject.getAttribute('class')).to.equal('link bar');
  });

  it('renders a title-attribute', () => {
    const subject = buildAndSelectElementByTag(<Link title='bar'></Link>, 'a');

    expect(subject.getAttribute('title')).to.equal('bar');
  });

  it('should expand arbitray other props on the element', () => {
    const subject = buildAndSelectElementByTag(<Link data-fun='very nice'></Link>, 'a');
    expect(subject.getAttribute('data-fun')).to.equal('very nice');
  });
});
