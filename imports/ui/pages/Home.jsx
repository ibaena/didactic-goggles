import React, { Component } from 'react';

import Video from '../../ui/components/video/Video.jsx';
import Border from '../../ui/components/border/Border.jsx';
import Sidebar from '../../ui/components/sidebar/Sidebar.jsx';

// App component - represents the whole app
export const Home = () =>
  <div id="homePage">
    <Video />
    <Border />
  </div>
