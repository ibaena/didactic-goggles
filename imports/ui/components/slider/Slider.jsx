import React, { Component } from 'react';



// App component - represents the whole app
export default class Slider extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){
    let slide1 = $('.slider-container').find('#1');
    let slide2 = $('.slider-container').find('#2');
    let slide3 = $('.slider-container').find('#3');
    let slide4 = $('.slider-container').find('#4');


    slide2.hide();
    slide3.hide();
    slide4.hide();

    $('.selector-list').find('.selector-list-item').on('click', function() {
          let compare = this.id;
          switch (compare) {
              case 'project-1':
                console.log('1');
                slide1.show();
                slide2.hide();
                slide3.hide();
                slide4.hide();
                  break;
              case 'project-2':
                console.log('2');
                slide2.show();
                slide1.hide();
                slide3.hide();
                slide4.hide();
                  break;
              case 'project-3':
                console.log('3');
                slide3.show();
                slide1.hide();
                slide2.hide();
                slide4.hide();
                  break;
              case 'project-4':
                console.log('4');
                slide4.show();
                slide1.hide();
                slide2.hide();
                slide3.hide();
                  break;
          }
      });

  }
  getProjects() {
    return [
      { _id: 1, name:'DownTown Tampa', project_src:'http://placehold.it/200x125' },
      { _id: 2, name:'Amloid', project_src:'http://placehold.it/200x225' },
      { _id: 3, name:'Feverall', project_src:'http://placehold.it/200x325' },
      { _id: 4, name:'Wine4Food', project_src:'http://placehold.it/200x425' },
    ];
  }

  renderProjects() {
    return this.getProjects().map((item) => (
      <div className="slider-wrapper" key={item._id} id={item._id}>
        <div className="project-image">
          <img src="http://placehold.it/350x350" className="fw-image" />
        </div>
        <div className="project-description">
          <h1 className="project-title">{item.name}</h1>
          <p className="project-info">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
          </p>
          <div className="role-wrapper">
            <h1 className="role-title">Roles</h1>
            <ul className="role-list">
              <li className="role-list-item">Year</li>
              <li className="role-list-item">Agency</li>
              <li className="role-list-item">Role</li>
            </ul>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="slider-container">
        {this.renderProjects()}
      </div>
    );
  }
}
