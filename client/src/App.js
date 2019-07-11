import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import axios from 'axios';

import Users from './components/Users';

const url = 'https://webapi-karim-user-posts.herokuapp.com';
// const url = 'http://localhost:4000';

class App extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    this.getRequestUsersHandler();
  }

  getRequestUsersHandler = () => {
    axios 
      .get(`${url}/`)
        .then(response => {
          this.setState({ users: response.data });
        })
        .catch(error => {
          debugger
        });
  }

  render() {
    return (
      <div className="App">
        <Route path="/" render={() => <Users users={this.state.users}/>} />
      </div>
    );
  }
}

export default App;
