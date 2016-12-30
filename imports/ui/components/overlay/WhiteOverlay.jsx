import React, { Component } from 'react';

import Slider from '../slider/Slider.jsx';
import Selector from '../slider/Selector.jsx'

// App component - represents the whole app
export default class WhiteOverlay extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){
    let slide1 = $('.slider-container').find('#1');
    let slide2 = $('.slider-container').find('#2');
    let slide3 = $('.slider-container').find('#3');
    let slide4 = $('.slider-container').find('#4');


    $('.white-overlay').hide();
    $('.main-box').on('click', () => {
      $('.white-overlay').toggle('slide',{direction:'up'}, 800);
      $('#nav-icon').css({'color':'black'});
      $('.activate-menu').hide();
      slide1.fadeOut(100);
      slide2.fadeOut(100);
      slide3.fadeOut(100);
      slide4.fadeOut(100);
    });
    $('.dismiss-white').on('click', () => {
      $('.white-overlay').toggle('slide',{direction:'up'}, 800);
      $('#nav-icon').css({'color':'white'});
      $('.activate-menu').show();
      slide1.fadeOut(100);
      slide2.fadeOut(100);
      slide3.fadeOut(100);
      slide4.fadeOut(100);
    });
  }
  render() {
    return (
      <div className="white-overlay">
        <div className="dismiss-white"><i className="material-icons">swap_vert</i></div>
        <Slider />
        <Selector />
      </div>
    );
  }
}
