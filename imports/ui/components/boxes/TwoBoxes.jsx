import React, { Component } from 'react';

import Nav from '../nav/Nav.jsx';

// App component - represents the whole app
export default class TwoBoxes extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){
  }
  render() {
    return (
        <div className="two-box-container">
          <div className="box-one">
            <span id="ny">h</span>
          </div>
          <div className="box-two">
            <span id="pa">l</span>
          </div>
        </div>

    );
  }
}
