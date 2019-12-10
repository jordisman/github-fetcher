import React from "react";
import $ from "jquery";
import Search from "./Search.jsx";
import RepoList from "./RepoList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }

  componentDidMount() {
    $.ajax({
      url: "http://localhost:3000/repos",
      method: "GET",
      success: data => {
        this.setState({ repos: data });
      },
      error: () => console.log("ajaxGET failed!")
    });
  }

  search(term) {
    console.log(`${term} was searched`);
    $.post("/repos", { username: term }, () => {
      console.log("term searched");
    }).then(() => {
      $.get("/repos", data => {
        this.setState({ repos: data });
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Github Fetcher</h1>
        <RepoList repos={this.state.repos} />
        <Search onSearch={this.search.bind(this)} />
      </div>
    );
  }
}

export default App;