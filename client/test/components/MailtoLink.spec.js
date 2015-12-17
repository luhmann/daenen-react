import React from 'react';
import { expect } from '../utils/expect';
import { render } from 'enzyme';

import MailtoLink from '../../javascripts/components/MailtoLink.jsx';

describe('Component: MailtoLink', () => {
  it('should render an empty element with no properties passed', () => {
    const subject = render(<MailtoLink />);

    expect(subject.find('.link')).to.have.length(1);
    expect(subject.find('a').attr('class')).to.equal('link');
  });

  it('should render additional classes if passed', () => {
    const subject = render(<MailtoLink className='foo bar'/>);
    expect(subject.find('a').attr('class')).to.equal('link foo bar');
  });

  it('should render a passed email as mailto-href', () => {
    let address = 'harry@example.com';
    const subject = render(<MailtoLink email={address} />);
    const link = subject.find('a');

    expect(link.attr('href')).to.equal(`mailto:${address}`);
  });

  it('should render a passed email as innerText', () => {
    let address = 'harry@example.com';
    const subject = render(<MailtoLink email={address} />);
    const link = subject.find('a');

    expect(link.text()).to.equal(address);
  });
});
