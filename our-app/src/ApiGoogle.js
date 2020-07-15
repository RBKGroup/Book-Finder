import React from 'react';
import $ from 'jquery';
import axios from "axios";
import Showone from './showone';
class Search extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
     input : ' ',
     title : []
}
 
  }
 handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  handleKeyPress(event) {
    if (event.key === "Enter") this.handleSubmit();
  }
  handleSubmit(e) {
    e.preventDefault();
    const {input} = this.state;
    const key = "key=AIzaSyA7KTeBBYcME8OsLLCy738PkZxZLPSCIAs";
   // console.log(API)
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
         
  render () {
    return (
      <div>
  
         <label>Book:</label><br/>
    <input type="text" id="name" name="input" value ={this.state.input} onChange={this.handleChange.bind(this)} onKeyPress={this.handleKeyPress} /><br/>
     <button onClick = {this.handleSubmit.bind(this)}>Search</button>
  
     <Showone titles ={this.state.title}/> 

     
    </div>
    )
  }

}
export default Search;