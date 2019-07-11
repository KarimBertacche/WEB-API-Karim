import React from 'react';
import './App.css';
import axios from 'axios';

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
      .get(`${url}/api/users`)
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
        {
          this.state.users 
          ? this.state.users.map(user => {
              return <p>{user.name}</p>
            })
          : null
        }
      </div>
    );
  }
}

export default App;
