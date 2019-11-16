import React from 'react';
import './App.css';
import Clock from './Clock';
import ToDoList from './ToDoList';
import Rating from './Rating';


export class App extends React.Component {

  render() {
    console.log(Clock);
    return(

      <div className="App">
        <Clock location='CA'></Clock>
        <hr></hr>
        <ToDoList></ToDoList>
        <hr></hr>
        <Rating></Rating>
      </div>
    );
  }
}


