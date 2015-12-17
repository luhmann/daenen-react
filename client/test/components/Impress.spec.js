import React from 'react';
import { render } from 'enzyme';
import { expect } from '../utils/expect';

import Impress from '../../javascripts/components/Impress.jsx';

describe('Component: <Impress />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<Impress />);
  });

  it('should contain the word "Impressum"', () => {
    expect(wrapper.html()).to.contain('Impressum');
  });

  it('should contain a valid adress', () => {
    expect(wrapper.text()).to.contain('Softwarehaus Dänen4');
    expect(wrapper.text()).to.contain('Petersen, Dietrich (GbR)');
    expect(wrapper.text()).to.contain('Sonntagstraße 4');
    expect(wrapper.text()).to.contain('10245 Berlin');
  });

  it('should contain contact data', () => {
    expect(wrapper.text()).to.contain('030 29044581');
    expect(wrapper.text()).to.contain('jfd@daenen4.de');
  });

  it('should contain the legally required data', () => {
    expect(wrapper.text()).to.contain('Vertretungsberechtigte Gesellschafter:Jan Florian Dietrich, Henning Petersen');
    expect(wrapper.text()).to.contain('Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz');
    expect(wrapper.text()).to.contain('252170892');
  });
});
