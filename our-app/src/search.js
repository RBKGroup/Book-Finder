import React from "react";

import axios from "axios";

class SearchBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    console.log(e);
    e.innerHTML = "";
    e.preventDefault();
    var { serch } = this.state;
    axios
      .get("http://localhost:3000/", this.state)
      .then((res) => {
        console.log("data send from server", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div id="search">
        <h1 id="header">Book Finder</h1>

        <button id="butn" onClick={this.handleSubmit.bind(this)}>
          Search
        </button>
        <input
          id="inpt"
          type="search"
          name="search"
          placeholder="Type, auther, book name, subject..."
          value={this.state.search}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}
export default SearchBooks;
