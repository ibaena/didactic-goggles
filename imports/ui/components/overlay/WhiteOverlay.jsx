import React, { Component } from 'react';

import Nav from '../nav/Nav.jsx';

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
    });
    $('.dismiss-white').on('click', () => {
      $('.white-overlay').toggle('slide',{direction:'up'}, 800);
      $('#nav-icon').css({'color':'white'});
    });
  }
  render() {
    return (
      <div className="white-overlay">
        <div className="dismiss-white"><i className="material-icons">swap_vert</i></div>
      </div>
    );
  }
}
