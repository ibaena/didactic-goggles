import React, { Component } from 'react';


// App component - represents the whole app
export default class Sidebar extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){
    $('.main-nav-list').find('.nav-list-item').find('.main-nav-link').on('click', () => {
      $('.featured-image').fadeToggle();
    });
  }

  getMenu() {
    return [
      { _id: 1, text: 'Menu' },
      { _id: 2, text: 'Menu' },
      { _id: 3, text: 'Menu' },
    ];
  }
  renderMenu() {
   return this.getMenu().map((item) => (
     <li className="nav-list-item" key={item._id}>
       <a href="#" className="main-nav-link">{item.text}</a>
     </li>
   ));
 }

  render() {
    return (
      <div className="sidebar-container">

      </div>
    );
  }
}
