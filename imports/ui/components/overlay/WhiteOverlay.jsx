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
      $('.main-box').fadeOut(500);
      slide1.fadeOut(100);
      slide2.fadeOut(100);
      slide3.fadeOut(100);
      slide4.fadeOut(100);
      slide2.find('.project-image').find('.fw-image').hide('slide',{direction:'left'},600);
      slide2.find('.project-description').find('.role-wrapper').hide('slide',{direction:'right'},600);
      slide2.find('.project-description').find('.project-title').hide('slide',{direction:'up'},600);
      slide2.find('.project-description').find('.project-info').hide('slide',{direction:'down'},600);
      slide2.find('.project-description').find('.web-link').hide('slide',{direction:'left'},400);
      slide2.find('#single').fadeOut();
      slide2.find('#double').fadeOut();

      slide3.find('.project-image').find('.fw-image').hide('slide',{direction:'left'},600);
      slide3.find('.project-description').find('.role-wrapper').hide('slide',{direction:'right'},600);
      slide3.find('.project-description').find('.project-title').hide('slide',{direction:'up'},600);
      slide3.find('.project-description').find('.project-info').hide('slide',{direction:'down'},600);
      slide3.find('.project-description').find('.web-link').hide('slide',{direction:'left'},400);
      slide3.find('#single').fadeOut();
      slide3.find('#double').fadeOut();

      slide4.find('.project-image').find('.fw-image').hide('slide',{direction:'left'},600);
      slide4.find('.project-description').find('.role-wrapper').hide('slide',{direction:'right'},600);
      slide4.find('.project-description').find('.project-title').hide('slide',{direction:'up'},600);
      slide4.find('.project-description').find('.project-info').hide('slide',{direction:'down'},600);
      slide4.find('.project-description').find('.web-link').hide('slide',{direction:'left'},400);
      slide4.find('#single').fadeOut();
      slide4.find('#double').fadeOut();

      slide1.find('.project-image').find('.fw-image').hide('slide',{direction:'left'},600);
      slide1.find('.project-description').find('.role-wrapper').hide('slide',{direction:'right'},600);
      slide1.find('.project-description').find('.project-title').hide('slide',{direction:'up'},600);
      slide1.find('.project-description').find('.project-info').hide('slide',{direction:'down'},600);
      slide1.find('.project-description').find('.web-link').hide('slide',{direction:'left'},400);
      slide1.find('#single').fadeOut();
      slide1.find('#double').fadeOut();
    });
    $('.dismiss-white').on('click', () => {
      $('.white-overlay').toggle('slide',{direction:'up'}, 800);
      $('#nav-icon').css({'color':'white'});
      $('.activate-menu').show();
      slide1.fadeOut(100);
      slide2.fadeOut(100);
      slide3.fadeOut(100);
      slide4.fadeOut(100);
      slide2.find('.project-image').find('.fw-image').hide('slide',{direction:'left'},600);
      slide2.find('.project-description').find('.role-wrapper').hide('slide',{direction:'right'},600);
      slide2.find('.project-description').find('.project-title').hide('slide',{direction:'up'},600);
      slide2.find('.project-description').find('.project-info').hide('slide',{direction:'down'},600);
      slide2.find('.project-description').find('.web-link').hide('slide',{direction:'left'},400);
      slide2.find('#single').fadeOut();
      slide2.find('#double').fadeOut();

      slide3.find('.project-image').find('.fw-image').hide('slide',{direction:'left'},600);
      slide3.find('.project-description').find('.role-wrapper').hide('slide',{direction:'right'},600);
      slide3.find('.project-description').find('.project-title').hide('slide',{direction:'up'},600);
      slide3.find('.project-description').find('.project-info').hide('slide',{direction:'down'},600);
      slide3.find('.project-description').find('.web-link').hide('slide',{direction:'left'},400);
      slide3.find('#single').fadeOut();
      slide3.find('#double').fadeOut();

      slide4.find('.project-image').find('.fw-image').hide('slide',{direction:'left'},600);
      slide4.find('.project-description').find('.role-wrapper').hide('slide',{direction:'right'},600);
      slide4.find('.project-description').find('.project-title').hide('slide',{direction:'up'},600);
      slide4.find('.project-description').find('.project-info').hide('slide',{direction:'down'},600);
      slide4.find('.project-description').find('.web-link').hide('slide',{direction:'left'},400);
      slide4.find('#single').fadeOut();
      slide4.find('#double').fadeOut();

      slide1.find('.project-image').find('.fw-image').hide('slide',{direction:'left'},600);
      slide1.find('.project-description').find('.role-wrapper').hide('slide',{direction:'right'},600);
      slide1.find('.project-description').find('.project-title').hide('slide',{direction:'up'},600);
      slide1.find('.project-description').find('.project-info').hide('slide',{direction:'down'},600);
      slide1.find('.project-description').find('.web-link').hide('slide',{direction:'left'},400);
      slide1.find('#single').fadeOut();
      slide1.find('#double').fadeOut();

        $('.white-overlay').removeClass('trans-blue').addClass('trans-white');
        $('.main-box').fadeIn();
    });
  }
  render() {
    return (
      <div className="white-overlay trans-white">
        <div className="dismiss-white hvr-shutter-in-vertical"><i className="material-icons">swap_vert</i></div>
        <Slider />
        <Selector />
      </div>
    );
  }
}
