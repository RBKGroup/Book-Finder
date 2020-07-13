import React from "react";
import SearchBooks from "./search.js";
import "./App.css";
// import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
       
        <SearchBooks />
        
      </div>
    );
  }
}
export default App;
