import React, { Component } from 'react';



// App component - represents the whole app
export default class Slider extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){
  }

  render() {
    return (
      <div className="slider-container">
          <div className="slider-wrapper">
            <div className="project-image">
              <img src="http://placehold.it/350x350" className="fw-image" />
            </div>
            <div className="project-description">
              <h1 className="project-title">Project</h1>
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
      </div>
    );
  }
}
