import React from 'react';
import { expect } from '../utils/expect';
import { isElement } from 'react-addons-test-utils';
import { buildAndSelectElementByTag } from '../utils/helper';

import MailtoLink from '../../javascripts/components/MailtoLink.jsx';

describe('Component: MailtoLink', () => {
  it('should render an empty element with no properties passed', () => {
    const subject = buildAndSelectElementByTag(<MailtoLink />, 'span');

    expect(subject.querySelectorAll('.link').length).to.equal(1);
    expect(subject.querySelector('a').getAttribute('class')).to.equal('link');
  });
});
