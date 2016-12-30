import React, { Component } from 'react';

// App component - represents the whole app
export default class Vertical extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){
  }
  render() {
    return (
        <div className="vertical-container">
          <ul className="vertical-list">
            <li className="vertical-list-item">Ivan Baena</li>
            <li className="vertical-list-item">Web Developer</li>
            <li className="vertical-list-item">PA --> NJ --> NYC</li>
          </ul>
        </div>

    );
  }
}
