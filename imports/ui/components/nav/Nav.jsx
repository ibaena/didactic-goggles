import React, { Component } from 'react';


// App component - represents the whole app
export default class Nav extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){
    $('.nav-wrapper').hide();
    $('.activate-menu').on('click', () => {
      $('.activate-menu').animate({width:'toggle'},300);
        setTimeout( () => {
          $('.nav-wrapper').toggle('slide',{direction:'left'}, 400);
        },500);
    });

    $('.nav-wrapper').on('mouseleave', () => {
      $('.nav-wrapper').toggle('slide',{direction:'left'}, 400);
      setTimeout( () => {
          $('.activate-menu').toggle('slide',{direction:'left'}, 300);
      },500);
    });

  }
  render() {
    return (
      <nav className="nav-container">
        <a className="activate-menu" ><i className="material-icons" id="nav-icon">widgets</i></a>
        <div className="nav-wrapper">

        </div>
      </nav>
    );
  }
}
