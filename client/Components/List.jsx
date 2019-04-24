import React, { Component } from 'react';
import ListEntry from './ListEntry.jsx';

class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      string: "",
      array: []
    }
    this.handleString = this.handleString.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleListEntry = this.handleListEntry.bind(this);
  }

  handleString(event) {
    this.setState({
      string: event.target.value     
    });
  }

  handleSubmit(event) {
    event.preventDefault(); // prevents a page refresh
    this.setState({
      string: '',
      array: this.state.array.concat(this.state.string) // avoid modifying the state
    });
    document.getElementById('myForm').reset();
  }

  handleListEntry(listItem) {
    console.log(listItem);
  }

  render() {
    return(
      <div>
        <form id='myForm'>
          <input type='text' onChange={this.handleString}></input>
          <input type='submit' value='submit' onClick={this.handleSubmit}></input>
        </form>
        <h3>List:</h3>
        <ul>
          {this.state.array.map(item =>
            <ListEntry key={item} item={item} onClick={this.handleListEntry}/>    
          )}
        </ul>
      </div>
    );
  }
}

export default List;