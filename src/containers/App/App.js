import React, { Component } from 'react';

import SearchField from '../SearchField'

import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='App-field'>
          <SearchField />
        </div>
      </div>
    );
  }
}

export default App;
