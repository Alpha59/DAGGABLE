import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CustomApplication from './CustomApplication';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <div className="App">
                <CustomApplication />
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
