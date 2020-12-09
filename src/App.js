import './App.css';
import ListItem from './components/ListItem';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoItemArray: ['Buy a standup desk', 'Get a job', 'Redo resume, again'],
      newItem: ''
    };
  }

  newItemChange(event) {
    this.setState({ newItem: event.target.value });
  }

  addItem(event) {
    event.preventDefault();
    let newArray = this.state.toDoItemArray;
    newArray.push(this.state.newItem);
    console.log(newArray);
    this.setState({ toDoItemArray: newArray });
  }

  clearList(event) {
    console.log('Clearing list!');
    this.setState({ toDoItemArray: [] });
  }

  render() {
    let listItems = this.state.toDoItemArray.map((toDo, index) => {
      return <ListItem doThis={toDo} key={index} />;
    });
    return (
      <div className="App-header">
        <header>
          My List
          <form>
            <input
              type="text"
              placeholder="Type an item here"
              onChange={(event) => this.newItemChange(event)}
              value={this.state.newItem}
            />
            <button onClick={(event) => this.addItem(event)}>Add It!</button>
          </form>
          <div>
            <ul>{listItems}</ul>
            <button onClick={(e) => this.clearList(e)}>
              Finished the list!
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
