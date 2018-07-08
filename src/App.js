// Tutorial from Academeind
import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
state = {
  persons: [ 
    {name:'ABC', age:16},
    {name:'DEF', age:18},
    {name: 'XYZ' , age :20}

  ],
  otherState :'some other value'
}
switchNameHandler = (newName) => {
  // console.log('Was clicked !');
  this.setState( { 
    persons: [ 
      {name:newName, age:16},
      {name:'DEF', age:18},
      {name: 'XYZ',age:22}
  
    ]
  })
}
changeNameHandler = (event) => {
  this.setState( { 
    persons: [ 
      {name: 'ABC', age:16},
      {name: event.target.value, age:18},
      {name: 'XYZ',age:20}
  
    ]
  })
}  
render() { 
     const style  = {
       backgroundColor: 'white',
       font : 'inherit',
       border : '2px solid blue',
       padding : '8px',
       curson : 'pointer'
     };

    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p>This app is really working</p>
        <button  
        style = {style}
        onClick = {this.switchNameHandler.bind(this,'Class')}>Switch Name</button>
        <Person 
          
          name ={this.state.persons[0].name} 
          age = {this.state.persons[0].age}/>

        <Person 
          changed = {this.changeNameHandler}
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          click = {this.switchNameHandler.bind(this,'College')}>hello Eveey </Person>

        <Person 
          
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
