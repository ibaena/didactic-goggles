import React, { Component } from 'react';


// App component - represents the whole app
export default class Home extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){
  }
  render() {
    return (
      <div className="page-container" id="homePage">
          I'm the Home Layout!
      </div>
    );
  }
}
