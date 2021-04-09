import './App.css';
import axios from 'axios'
import styled from 'styled-components'
import React from 'react';

const URL = 'https://api.github.com/users/';

class App extends React.Component{
  constructor(){
    super();
    this.state ={
      user: {}
    }
  }

  render(){
    return(
      <div>
        
      </div>
    )
  }

}
export default App;
