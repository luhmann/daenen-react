import React from 'react';
import { shallow, mount, describeWithDOM } from 'enzyme';
import { expect } from '../utils/expect';
import ProjectList from '../../javascripts/components/ProjectList.jsx';

describe('Component: <ProjectList />', () => {
  let mockData = {
    projects: [
      {
        client: 'ePost Development GmbH',
        description: 'Full-Stack-Development for mail-portal using AngularJS, Webpack, Scala & Play',
        link: 'http://www.epost.de',
      },
      {
        client: 'MyVideo / ProSiebenSat1 Digital',
        description: 'Frontend & Mobile Development for the MyVideo online video platform',
        link: 'http://www.myvideo.de',
      },
      {
        client: 'Evinum',
        description: 'Development of an information retrieval and management system for wine data in Python',
        link: 'http://www.evinum.de',
      },
      {
        client: 'tape.tv & SPIEGELOnline',
        description: 'Facebook-App-Development with OpenGraph-API',
        link: null,
      },
      {
        client: 'Home24',
        description: 'Shop-Development with Zend Framework',
        link: 'http://www.home24.de',
      },
      {
        client: 'Globus Deutschland',
        description: 'Module-Development in yii/PHP5',
        link: 'http://www.globus.de',
      },
    ],
  },
  wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProjectList projects={mockData.projects} dev='foo'/>);
  });

  it('should initalize in the correct state', () => {
    expect(wrapper.state('hideAdditionalItems')).to.be.true;
    expect(wrapper.state('moreButtonText')).to.equal('More Projects');
  });

  it('should render four Projects', () => {
    expect(wrapper.find('Project')).to.have.length(4);
  });

  it('should render a more-button', () => {
    expect(wrapper.find('MoreButton')).to.have.length(1);
  });

  describe('clicking the more button', () => {
    beforeEach(() => {
      wrapper = mount(<ProjectList projects={mockData.projects} dev='foo'/>);
    });

    it('should show more projects', () => {
      wrapper.find('.more').simulate('click');
      expect(wrapper.find('.project--client')).to.have.length(6);
    });

    it('should change the text on the more button', () => {
      let moreButton = wrapper.find('.more');
      moreButton.simulate('click');
      expect(moreButton.text()).to.equal('Less Projects');
    });
  });
});
