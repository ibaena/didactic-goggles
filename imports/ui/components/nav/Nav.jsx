import React, { Component } from 'react';


// App component - represents the whole app
export default class Nav extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){

  }

  render() {
    return (
      <nav className="nav-container">
          <div className="blue-bg"></div>
          <div className="red-bg"></div>
      </nav>
    );
  }
}
