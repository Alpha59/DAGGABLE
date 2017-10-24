import React from 'react';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import ToolbarExamplesSimple from './ToolbarExamplesSimple';
import ChannelList from './ChannelList';
import logo from './logo.svg';

const CustomApplication = () => (
    <div>
        <ToolbarExamplesSimple />
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload... or... dont. or... do!
        </p>
        <MyAwesomeReactComponent />
    </div>
);

export default CustomApplication;
