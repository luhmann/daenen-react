import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag
} from 'react-addons-test-utils';
import expect from '../utils/expect';
import Link from '../../javascripts/components/Link.jsx';

describe('Link', () => {
  before('render and locate element', {
    const renderedComponent = renderIntoDocument(
      <Link />
    );
    const LinkComponent = findRenderedDOMComponentWithTag(renderedComponent, 'a');

    this.subject = LinkComponent.getDOMNode();
  });
  it('renders', () => {
    expect(this.subject.typeOf).to.equal('string');
  });
});
