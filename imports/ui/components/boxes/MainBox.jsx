import React, { Component } from 'react';

import Nav from '../nav/Nav.jsx';

// App component - represents the whole app
export default class MainBox extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){
    $('.main-box-overlay').hide();
    /*$('.main-box').on('mouseenter', () => {
      $('.main-box-overlay').show('slide', {direction: 'left'}, 400);

    });
    $('.main-box').on('mouseleave', () => {
      $('.main-box-overlay').hide('slide', {direction: 'left'}, 400);
    });*/
  }
  render() {
    return (
        <div className="main-box">
            <p className="main-box-text">Ivan Baena</p>
            <p className="main-box-text-bot">Web Developer</p>
            <div className="main-box-overlay">
              <p className="main-box-text">Ivan Baena</p>
              <p className="main-box-text-bot">Web Developer</p>
            </div>
        </div>

    );
  }
}
