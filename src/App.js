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

  handleActive = (keyy,activee) => {
    let currentNames = this.state.names;
    currentNames.map(name => name.active = false)
    let neededName = currentNames.find(name => name.id === keyy)
    neededName.active = true;
    this.setState({
      names: currentNames
    })
  }

  render() {
    return (
      <div className="App">
        <CategoryList names={this.state.names} 
        onActive={this.handleActive}/>
      </div>
    );
  }
}

export default App;
