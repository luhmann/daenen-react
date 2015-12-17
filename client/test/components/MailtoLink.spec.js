import React from 'react';
import { expect } from '../utils/expect';
import { isElement } from 'react-addons-test-utils';
import { buildAndSelectElementByTag, buildAndSelectElementByClass } from '../utils/helper';

import MailtoLink from '../../javascripts/components/MailtoLink.jsx';

describe('Component: MailtoLink', () => {
  it('should render an empty element with no properties passed', () => {
    const subject = buildAndSelectElementByTag(<MailtoLink />, 'span');

    expect(subject.querySelectorAll('.link').length).to.equal(1);
    expect(subject.querySelector('a').getAttribute('class')).to.equal('link');
  });

  it('should render additional classes if passed', () => {
    const subject = buildAndSelectElementByClass(<MailtoLink className='foo bar'/>, 'link');
    console.log(subject.outerHTML, global.document.documentElement.outerHTML);
    expect(subject.getAttribute('class')).to.equal('link foo bar');
  });

  it('should render and munge a passed email as href', () => {
    let adress = 'harry@example.com';
    const subject = buildAndSelectElementByTag(<MailtoLink email={adress} />, 'a');

    expect(subject.getAttribute('href')).to.match(/mailto:.+/);
  });
});
