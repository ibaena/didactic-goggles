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
      $('.btn-nav').animate({width:'toggle'},300);
        setTimeout( () => {
          $('.nav-wrapper').toggle('slide',{direction:'left'}, 400);
        },500);
    });

    $('.nav-wrapper').on('mouseleave', () => {
      $('.nav-wrapper').toggle('slide',{direction:'left'}, 400);
      setTimeout( () => {
          $('.btn-nav').toggle('slide',{direction:'left'}, 300);
      },500);
      $(".bar").toggleClass("animated");
    });

    $(".btn-nav").on("click tap", function(){
      $(".bar").toggleClass("animated");
    });


  }
  render() {
    return (
      <nav className="nav-container">
        <a className="activate-menu" >
        <btn className="btn-nav">
          <div className="bar bar-top"></div>
          <div className="bar bar-mid"></div>
          <div className="bar bar-bot"></div>
        </btn>
        </a>
        <div className="nav-wrapper">

        </div>
      </nav>
    );
  }
}
