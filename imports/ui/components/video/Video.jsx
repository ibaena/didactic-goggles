import React, { Component } from 'react';


// App component - represents the whole app
export default class Video extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){

  }
  render() {
    return (
      <div id="video-container">
        <video id="fullscreen-video"  loop autoPlay>
          <source src="videos/particles.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }
}
