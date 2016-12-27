import React, { Component } from 'react';

import Nav from '../../ui/components/nav/Nav.jsx';

// App component - represents the whole app
export const App = ({content}) => (
    <div id="main-container">
        <Nav />
        {content}
    </div>
)
