import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import Scroll from './Scroll';
import errorBoundary from './errorBoundary'

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchText: ''
    }
  }

  onSearchChange = (event) => {
    let searchText = event.target.value;
    this.setState({ searchText: searchText });
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json();
    })
    .then(users => this.setState({robots:users}))
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchText.toLowerCase());
    });
    if(this.state.robots.length === 0){
      return (
        <h1>Loading...</h1>
      )
    } else {
      return (
        <div>
          <div className='tc'>
            <h1>Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
          </div>
          <div>
            <Scroll>
              <errorBoundary>
                <CardList robots={filteredRobots} />

              </errorBoundary>
            </Scroll>
          </div>
        </div>
      );
    }
  }
}

export default App;