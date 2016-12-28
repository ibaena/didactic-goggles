import React, { Component } from 'react';

import Nav from '../nav/Nav.jsx';
import MainBox from '../boxes/MainBox.jsx';

// App component - represents the whole app
export default class Border extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){

  }
  render() {
    return (
      <div className="border">
        <Nav />
        <MainBox />
      </div>
    );
  }
}
