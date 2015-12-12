import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag
} from 'react-addons-test-utils';
import { expect } from '../utils/expect';
import Link from '../../javascripts/components/Link.jsx';

describe('Link', () => {
  it('renders an empty link', () => {
    const subject = buildElement(<Link />);

    expect(subject.getAttribute('class')).to.equal('link');
    expect(subject.innerHTML).to.equal('');
  });

  it('renders the correct href when url parameter is passed', () => {
    const subject = buildElement(<Link url='http://www.example.org'></Link>);

    expect(subject.getAttribute('href')).to.equal('http://www.example.org');
  });

  it('renders the correct innerText', () => {
    const subject = buildElement(<Link>Foo Bar</Link>);

    expect(subject.innerHTML).to.equal('Foo Bar');
  });

  it('renders additional classes', () => {
    const subject = buildElement(<Link className='bar'></Link>);

    expect(subject.getAttribute('class')).to.equal('link bar');
  });

  it('renders a title-attribute', () => {
    const subject = buildElement(<Link title='bar'></Link>);

    expect(subject.getAttribute('title')).to.equal('bar');
  });

  function buildElement(renderString) {
    const renderedComponent = renderIntoDocument(
      renderString
    );
    return findRenderedDOMComponentWithTag(renderedComponent, 'a');
  }
});
