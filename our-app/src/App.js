import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './ApiGoogle';



function App() {
  return (
    <div className="App">
      <Search/>
     
      <div id="result">
	</div>
      
    </div>
  );
}

export default App;