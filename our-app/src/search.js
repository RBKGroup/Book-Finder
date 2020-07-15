import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import Showone from './showone';
class SearchBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      input : ' ',
      title : []
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
    const {input} = this.state;
    
// Make a ajax call to get the json data as response.
 axios.get(`https://www.googleapis.com/books/v1/volumes?q=`+ this.state.input)
      .then((result) => {
        // console.log(result.data.items[0].volumeInfo.title)
   // console.log(result.data.items)
  const resultArray = result.data.items;
  this.setState({title :resultArray});
      })
      .catch((err) => {
        console.log("Error------->",err);
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
          name="input"
          placeholder="Type, auther, book name, subject..."
          value={this.state.input}
          onChange={this.handleChange.bind(this)}
        />
        <Link to="/auth/Fav"> FAVORIT</Link>
        <Link to="/auth/read"> READ</Link>
         <Showone titles ={this.state.title}/> 
      </div>
    );
  }
}

export default withRouter(SearchBooks);