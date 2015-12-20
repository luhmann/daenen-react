import React from 'react';
import { shallow } from 'enzyme';
import { expect } from '../utils/expect';
import munge from 'munge';

import Developer from '../../client/javascripts/components/Developer';

describe('Component: <Developer />', () => {
  let wrapper;
  const dummyData = {
    id: 'test',
    name: 'Test Dummy',
    jobTitle: 'Test-Roboter',
    email: 'dummy@example.org',
    skype: 'dummydummydummy',
    externalLinks: [
      {
        label: 'News',
        links: [
            {
              url: 'http://www.spiegel.de',
              text: 'Spiegel',
            },
        ],
      },
      {
        label: 'Search Engines',
        links: [
          {
            url: 'http://google.com',
            text: 'Google',
          },
        ],
      },
    ],
    qualification: [],
    projects: [],
    technologies: [],
  };

  beforeEach(() => {
    wrapper = shallow(<Developer data={dummyData}/>);
  });

  it('should render a name and job title', () => {
    expect(wrapper.find('.developer--name').text()).to.equal(dummyData.name);
    expect(wrapper.find('.developer--job-title').text()).to.equal(dummyData.jobTitle);
  });

  it('should render contact info if set', () => {
    // cause phone is not set in the dummy data
    expect(wrapper.html()).not.to.contain('Phone:');
    expect(wrapper.html()).to.contain('E-Mail:');
    expect(wrapper.html()).to.contain(dummyData.skype);
  });

  it('should render external links', () => {
    expect(wrapper.html()).to.contain('News');
    expect(wrapper.html()).to.contain('Search Engines');
  });
});
