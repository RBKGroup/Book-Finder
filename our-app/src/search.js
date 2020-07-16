import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import Showone from "./showone";
import { text } from "body-parser";
class SearchBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      input: " ",
      title: [],
    };
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleKeyPress(event) {
    if (event.key === "Enter") this.handleSubmit();
  }
  handleSubmit(e) {
    e.preventDefault();
    const { input } = this.state;

    // Make a ajax call to get the json data as response.
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=` + this.state.input)
      .then((result) => {
        // console.log(result.data.items[0].volumeInfo.title)
        // console.log(result.data.items)
        const resultArray = result.data.items;
        this.setState({ title: resultArray });
        this.setState({ input:""})
      })
      .catch((err) => {
        console.log("Error------->", err);
      });
  }
  clearText(){this.setState({ input: "" })}

  render() {
    return (
      <div id="search">
        <h1 id="header">
          <span id="wh"> Book </span> <span id="finder">Finder</span> {" "}
        </h1>
        <div id="links">
          <Link to="/auth/Fav" class="right">
            <button class="zer"> Favorite </button>
          </Link>
          <Link to="/auth/read" class="right">
            <button class="zer"> Read </button>
          </Link>
        </div>

        <div class="buttonIn">
          <button
            
            id="butn"
            onClick={this.handleSubmit.bind(this)}
            class="loginbutton"
          >
            Search
          </button>
          <input
            class="logemailandpassword"
            id="inpt"
            type="search"
            name="input"
            onfocus="myFunction()"
            placeholder="Type, auther, book name, subject ..."
            value={this.state.input}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <hr id="khat"/>

        <Showone titles={this.state.title} />
      </div>
    );
  }
}

export default withRouter(SearchBooks);
