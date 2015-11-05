import React from 'react';

export default class Logo extends React.Component {
  render() {
    return (
        <img
            className="header--logo"
            src="images/logo.svg"
            width="364"
            height="114"
            title="Softwarehaus Dänen4 | Dänenstr. 4 | 10439 Berlin"
            alt="Softwarehaus Dänen4 | Dänenstr. 4 | 10439 Berlin"
        />
    );
  }
}
