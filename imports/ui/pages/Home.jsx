import React, { Component } from 'react';

import LandingLeft from '../../ui/components/landingLeft/LandingLeft.jsx';
import LandingRight from '../../ui/components/landingRight/LandingRight.jsx';

// App component - represents the whole app
export const Home = () =>
  <div id="homePage">
    <LandingLeft />
    <LandingRight />
  </div>
