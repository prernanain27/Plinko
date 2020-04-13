import React, { Component } from 'react';
import Plinko from './components/Plinko';
import './App.css';

class App extends Component {
  render() {
    return (
     <div style={{display:'flex'}}>
    <Plinko/>
    <div style={{backgroundColor:'green',height:'100%',width:'40%'}}>{'This is settings'}</div>
     </div>
    );
  }
}

export default App;
