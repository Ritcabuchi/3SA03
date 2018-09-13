import React, { Component } from 'react';
// import logo from './logo.svg';
// import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
import './App.css';

const word = "hello";
class App extends Component {
  // constracter(props){
  //     super(props);
  //     this.state = {
  //       attemt: '',
  //     }
  // }
  render() {
    return (
      <div>
       {
       <WordCard value="hello"/>
       }
      </div>
    );
  }
}

 

export default App;
