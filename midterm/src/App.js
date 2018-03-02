import React, { Component } from 'react';
import CategoryList from './CategoryList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
        names: [
          {
            id:1,
            part: 'Home',
            active: false
          },
          {
            id:2,
            part: 'About',
            active:false
          },
          {
            id:3,
            part: 'Contact',
            active:false
          }
        ]

    };
  }

  handleActive(keyy,activee) {
    
    let key = this.state.names.keyy;
    console.log(key)

    //if(this.state)
  }
  render() {
    return (
      <div className="App">
        <CategoryList names={this.state.names} onActive={(key,active)=>this.handleActive(key,active)}/>
      </div>
    );
  }
}

export default App;
