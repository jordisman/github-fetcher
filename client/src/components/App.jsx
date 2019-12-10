import React from 'react';
import Axios from 'axios';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    Axios.get('http://localhost:3000/repos')
    .then(res => {
      console.log(res);
      this.setState({repos: res.data});
    })
    .catch(err => {
      console.log('Error:', err);
    });
  }

  render() {
    return (
      <div>
        Wow, hello! Try again, now.
      </div>
    )
  }
}

export default App;