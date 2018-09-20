import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ]
  };

  switchNameHandler = () => {
    // console.log('Was clicked')
    // this.state.persons[0].name = 'Maximillian';
    this.setState({
      persons: [
        { name: 'Maximillian', age: 28},
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age: 27}
      ]
    })
  };

  render() {
    return (
      <div className="App">
        <h1>HEllo REact</h1>
        <button onClick={this.switchNameHandler}>Switch button</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'HEllo REact'))
  }
}

export default App;
