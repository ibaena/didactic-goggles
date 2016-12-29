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
    $('.white-overlay').hide();
    $('.main-box').on('click', () => {
      $('.white-overlay').toggle('slide',{direction:'up'}, 800);
      $('#nav-icon').css({'color':'black'});
      $('.activate-menu').hide();
    });
    $('.dismiss-white').on('click', () => {
      $('.white-overlay').toggle('slide',{direction:'up'}, 800);
      $('#nav-icon').css({'color':'white'});
      $('.activate-menu').show();
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
