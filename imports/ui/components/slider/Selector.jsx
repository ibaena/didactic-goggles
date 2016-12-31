import React, { Component } from 'react';


// App component - represents the whole app
export default class Selector extends Component {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){

  }

  getImages() {
    return [
      { _id: 1, name:'DownTown Tampa', project_src:'http://placehold.it/200x125' },
      { _id: 2, name:'Amloid', project_src:'http://placehold.it/200x225' },
      { _id: 3, name:'Feverall', project_src:'http://placehold.it/200x325' },
      { _id: 4, name:'Wine4Food', project_src:'http://placehold.it/200x425' },
    ];
  }

  renderImages() {
    return this.getImages().map((item) => (
      <li className="selector-list-item" id={'project-'+item._id} key={item._id} ref={'project-'+item._id}><img src={item.project_src} className="selector-image" id={'proj-img-'+item._id} /></li>
    ));
  }

  render() {
    return (
      <div className="selector-container">
        <ul className="selector-list" id="test">
          {this.renderImages()}
        </ul>
      </div>
    );
  }
}
