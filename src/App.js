import React, { Component } from 'react';
import TitleHeader from './TitleHeader';
import DisplayCounter from './DisplayCounter';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
               <TitleHeader /> 
        </div>
        <div>
                <DisplayCounter />
        </div>
      </div>
    );
  }
}

export default App;
