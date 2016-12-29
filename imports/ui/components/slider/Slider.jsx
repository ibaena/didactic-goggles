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

    slide1.hide();
    slide2.hide();
    slide3.hide();
    slide4.hide();

    slide1.find('.project-image').find('.fw-image').hide();
    slide1.find('.project-description').find('.role-wrapper').hide();
    slide1.find('.project-description').find('.project-title').hide();
    slide1.find('.project-description').find('.project-info').hide();

    slide2.find('.project-image').find('.fw-image').hide();
    slide2.find('.project-description').find('.role-wrapper').hide();
    slide2.find('.project-description').find('.project-title').hide();
    slide2.find('.project-description').find('.project-info').hide();

    slide3.find('.project-image').find('.fw-image').hide();
    slide3.find('.project-description').find('.role-wrapper').hide();
    slide3.find('.project-description').find('.project-title').hide();
    slide3.find('.project-description').find('.project-info').hide();

    slide4.find('.project-image').find('.fw-image').hide();
    slide4.find('.project-description').find('.role-wrapper').hide();
    slide4.find('.project-description').find('.project-title').hide();
    slide4.find('.project-description').find('.project-info').hide();

    $('.selector-list').find('.selector-list-item').on('click', function() {
          let compare = this.id;
          let slide1 = $('.slider-container').find('#1');
          let slide2 = $('.slider-container').find('#2');
          let slide3 = $('.slider-container').find('#3');
          let slide4 = $('.slider-container').find('#4');
          let count = 0;


          switch (compare) {
              case 'project-1':
              var i = 0;
                do {
                  slide2.find('.project-image').find('.fw-image').hide('slide',{direction:'left'},600);
                  slide2.find('.project-description').find('.role-wrapper').hide('slide',{direction:'right'},600);
                  slide2.find('.project-description').find('.project-title').hide('slide',{direction:'up'},600);
                  slide2.find('.project-description').find('.project-info').hide('slide',{direction:'down'},600);

                  slide3.find('.project-image').find('.fw-image').hide('slide',{direction:'left'},600);
                  slide3.find('.project-description').find('.role-wrapper').hide('slide',{direction:'right'},600);
                  slide3.find('.project-description').find('.project-title').hide('slide',{direction:'up'},600);
                  slide3.find('.project-description').find('.project-info').hide('slide',{direction:'down'},600);

                  slide4.find('.project-image').find('.fw-image').hide('slide',{direction:'left'},600);
                  slide4.find('.project-description').find('.role-wrapper').hide('slide',{direction:'right'},600);
                  slide4.find('.project-description').find('.project-title').hide('slide',{direction:'up'},600);
                  slide4.find('.project-description').find('.project-info').hide('slide',{direction:'down'},600);
                    i++;
                  }
                while (i < 1);

                setTimeout( () => {
                  slide1.show();

                  slide1.find('.project-image').find('.fw-image').toggle('slide',{direction:'left'},600);
                  slide1.find('.project-description').find('.role-wrapper').toggle('slide',{direction:'right'},600);
                  slide1.find('.project-description').find('.project-title').toggle('slide',{direction:'up'},600);
                  slide1.find('.project-description').find('.project-info').toggle('slide',{direction:'down'},600);

                  slide2.hide();
                  slide3.hide();
                  slide4.hide();
                },800)

                  break;
              case 'project-2':
                var i = 0;
                  do {
                    slide1.find('.project-image').find('.fw-image').hide('slide',{direction:'left'},600);
                    slide1.find('.project-description').find('.role-wrapper').hide('slide',{direction:'right'},600);
                    slide1.find('.project-description').find('.project-title').hide('slide',{direction:'up'},600);
                    slide1.find('.project-description').find('.project-info').hide('slide',{direction:'down'},600);

                    slide3.find('.project-image').find('.fw-image').hide('slide',{direction:'left'},600);
                    slide3.find('.project-description').find('.role-wrapper').hide('slide',{direction:'right'},600);
                    slide3.find('.project-description').find('.project-title').hide('slide',{direction:'up'},600);
                    slide3.find('.project-description').find('.project-info').hide('slide',{direction:'down'},600);

                    slide4.find('.project-image').find('.fw-image').hide('slide',{direction:'left'},600);
                    slide4.find('.project-description').find('.role-wrapper').hide('slide',{direction:'right'},600);
                    slide4.find('.project-description').find('.project-title').hide('slide',{direction:'up'},600);
                    slide4.find('.project-description').find('.project-info').hide('slide',{direction:'down'},600);
                      i++;
                    }
                  while (i < 1);

                setTimeout( () => {
                    slide2.show();

                    slide2.find('.project-image').find('.fw-image').toggle('slide',{direction:'left'},600);
                    slide2.find('.project-description').find('.role-wrapper').toggle('slide',{direction:'right'},600);
                    slide2.find('.project-description').find('.project-title').toggle('slide',{direction:'up'},600);
                    slide2.find('.project-description').find('.project-info').toggle('slide',{direction:'down'},600);

                    slide1.hide();
                    slide4.hide();
                    slide3.hide();
                },800)

                  break;
              case 'project-3':
              var i = 0;
                do {
                  slide1.find('.project-image').find('.fw-image').hide('slide',{direction:'left'},600);
                  slide1.find('.project-description').find('.role-wrapper').hide('slide',{direction:'right'},600);
                  slide1.find('.project-description').find('.project-title').hide('slide',{direction:'up'},600);
                  slide1.find('.project-description').find('.project-info').hide('slide',{direction:'down'},600);

                  slide2.find('.project-image').find('.fw-image').hide('slide',{direction:'left'},600);
                  slide2.find('.project-description').find('.role-wrapper').hide('slide',{direction:'right'},600);
                  slide2.find('.project-description').find('.project-title').hide('slide',{direction:'up'},600);
                  slide2.find('.project-description').find('.project-info').hide('slide',{direction:'down'},600);

                  slide4.find('.project-image').find('.fw-image').hide('slide',{direction:'left'},600);
                  slide4.find('.project-description').find('.role-wrapper').hide('slide',{direction:'right'},600);
                  slide4.find('.project-description').find('.project-title').hide('slide',{direction:'up'},600);
                  slide4.find('.project-description').find('.project-info').hide('slide',{direction:'down'},600);
                    i++;
                  }
                while (i < 1);

              setTimeout( () => {
                  slide3.show();

                  slide3.find('.project-image').find('.fw-image').toggle('slide',{direction:'left'},600);
                  slide3.find('.project-description').find('.role-wrapper').toggle('slide',{direction:'right'},600);
                  slide3.find('.project-description').find('.project-title').toggle('slide',{direction:'up'},600);
                  slide3.find('.project-description').find('.project-info').toggle('slide',{direction:'down'},600);

                  slide1.hide();
                  slide4.hide();
                  slide2.hide();
              },800)
                  break;
              case 'project-4':

              var i = 0;
              console.log(i);
                do {
                  slide1.find('.project-image').find('.fw-image').hide('slide',{direction:'left'},600);
                  slide1.find('.project-description').find('.role-wrapper').hide('slide',{direction:'right'},600);
                  slide1.find('.project-description').find('.project-title').hide('slide',{direction:'up'},600);
                  slide1.find('.project-description').find('.project-info').hide('slide',{direction:'down'},600);

                  slide3.find('.project-image').find('.fw-image').hide('slide',{direction:'left'},600);
                  slide3.find('.project-description').find('.role-wrapper').hide('slide',{direction:'right'},600);
                  slide3.find('.project-description').find('.project-title').hide('slide',{direction:'up'},600);
                  slide3.find('.project-description').find('.project-info').hide('slide',{direction:'down'},600);

                  slide2.find('.project-image').find('.fw-image').hide('slide',{direction:'left'},600);
                  slide2.find('.project-description').find('.role-wrapper').hide('slide',{direction:'right'},600);
                  slide2.find('.project-description').find('.project-title').hide('slide',{direction:'up'},600);
                  slide2.find('.project-description').find('.project-info').hide('slide',{direction:'down'},600);
                    i++;
                  }
                while (i < 1);

              setTimeout( () => {
                  slide4.show();

                  slide4.find('.project-image').find('.fw-image').toggle('slide',{direction:'left'},600);
                  slide4.find('.project-description').find('.role-wrapper').toggle('slide',{direction:'right'},600);
                  slide4.find('.project-description').find('.project-title').toggle('slide',{direction:'up'},600);
                  slide4.find('.project-description').find('.project-info').toggle('slide',{direction:'down'},600);

                  slide1.hide();
                  slide2.hide();
                  slide3.hide();
              },800)
                  break;
          }

      });

  }
  getProjects() {
    return [
      { _id: 1, name:'DownTown Tampa', project_src:'http://placehold.it/200x125', role:'Google API Developer', agency: 'Vision Creative Group', year:'2016', info:'Where to Start - With so many options for things to do in Tampa\'s Downtown, the challenge is not deciding where to go, it\'s deciding where to start.' },
      { _id: 2, name:'Amloid', project_src:'http://placehold.it/200x225', role:'Web Developer', agency: 'Vision Creative Group', year:'2016', info:'Amloid proudly brings 100 years of unwavering commitment to its founder’s vision: to create quality, affordable, and fun toys. Innovative design and exacting attention to detail continue to produce unique product lines that have delighted generations of children around the world.' },
      { _id: 3, name:'Feverall', project_src:'http://placehold.it/200x325', role:'Web Developer', agency: 'Vision Creative Group', year:'2016', info:'FeverAll® is a suppository form of acetaminophen, the common fever remedy known and trusted by pediatricians. Available in 3 strengths for infants or children of different ages, FeverAll® suppositories provide an effective dosing alternative for children who won’t or can’t take medication orally' },
      { _id: 4, name:'Wine4Food', project_src:'http://placehold.it/200x425', role:'Front End Developer', agency: 'Vision Creative Group', year:'2016', info:'Wine4Food is the number one destination for everything Wine & Food Related. Wine Tastings & Wine Dinner Party Ideas to Food & Wine Pairings and Recipes.' },
    ];
  }

  renderProjects() {
    return this.getProjects().map((item) => (
      <div className="slider-wrapper" key={item._id} id={item._id}>
      <hr id="single" />
        <div className="project-image">
          <img src={item.project_src} className="fw-image" />
        </div>
        <div className="project-description">
          <h1 className="project-title">{item.name}</h1>
          <p className="project-info">
            {item.info}
          </p>
          <div className="role-wrapper">
            <h1 className="role-title">Roles</h1>
            <ul className="role-list">
              <li className="role-list-item">Year<br />
              <p className="role-value">{item.year}</p>
              </li>
              <li className="role-list-item">Agency<br />
              <p className="role-value">{item.agency}</p>
              </li>
              <li className="role-list-item">Role<br />
              <p className="role-value">{item.role}</p>
              </li>
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
