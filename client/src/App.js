import React from 'react';
import './App.css';
import axios from 'axios';

const url = 'https://webapi-karim-user-posts.herokuapp.com/';
// const url = 'https://localhost:4000/';

class App extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    this.getRequestUsersHandler();
  }

  getRequestUsersHandler = () => {
    axios 
      .get(`${url}/api/users`)
        .then(response => {
          console.log(response);
          debugger
        })
        .catch(error => {
          debugger
        });
  }

  render() {
    return (
      <div className="App">
        Working react app
      </div>
    );
  }
}

export default App;
