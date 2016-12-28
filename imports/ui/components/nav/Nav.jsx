import React, { Component } from 'react';


// App component - represents the whole app
export default class Nav extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){
    $('.menu').hide();
    $('.activate-menu').on('click', () => {
      $('.menu').toggle("slide", { direction: "right" }, 500)
    });
    $('.btn--menu').on('click', () => {
        $('.not--x__piece--1, .not--x__piece--2, .not--x__piece--3, .not--x__piece--4').toggleClass('is--x');
      });
  }
  render() {
    return (
      <nav className="nav-container">
        <button type='button' className='btn btn--menu activate-menu'>
          <span className='x__piece'></span>
          <span className='not--x__piece not--x__piece--1'></span>
          <span className='x__piece'></span>
          <span className='not--x__piece not--x__piece--2'></span>
          <span className='x__piece'></span>
          <span className='not--x__piece not--x__piece--3'></span>
          <span className='x__piece'></span>
          <span className='not--x__piece not--x__piece--4'></span>
          <span className='x__piece'></span>
        </button>
          <div className="menu"></div>
      </nav>
    );
  }
}
