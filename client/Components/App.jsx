import React from 'react';
import List from './List.jsx'

// var App = (props) => (
//   <div>Hello from {props.first} {props.last}</div>
// );

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: 'React',
      lastName: ''
    };
    this.handleFirstChange = this.handleFirstChange.bind(this);
    this.handleLastChange = this.handleLastChange.bind(this);
  }

  handleFirstChange(e) { 
    this.setState({firstName: e.target.value});
  }

  handleLastChange(e) { 
    this.setState({lastName: e.target.value});
  }

  render() {
    const isKathleen = this.state.firstName === 'Kathleen' && this.state.lastName === 'Hogan';
    let renderedList;
    if(isKathleen) {
      renderedList =  <List />
    } else {
      renderedList = <p>List hidden because you're not Kathleen, you loser.</p>
    }
    return(
      <div>
        <div>
          First:<input type="text" onChange={this.handleFirstChange}></input>
        </div>
        <div>
          Last:<input type="text" onChange={this.handleLastChange}></input>
        </div>
        <div>Hello from {this.state.firstName} {this.state.lastName}!</div>        
        <div>
          {renderedList}
        </div>
      </div>
    );
  }

}

export default App;