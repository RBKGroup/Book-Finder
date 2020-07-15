import React from 'react';
import axios from "axios"
import cors from 'cors' ;
import { Link, withRouter } from "react-router-dom";
class Readlater extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
        read :[]
    }
  }
  readlater(){
    axios.get("http://localhost:5000/readlater")
    .then((result) => {
       console.log(result.data);
       const readlater = result.data;
       this.setState({read:readlater})

     })
     .catch((err) => {
       console.log("Error",err);
     });
  }

  render () {
      console.log(this.state.read)
    return ( <div>
        <div>
        <button onClick = {this.readlater.bind(this)}> Read later </button><br></br>
        <Link to="/auth/Search"> HOME</Link>
          {this.state.read.map((element,index)=>{ 
            return <div  key={index} style= {{border: "5px outset red"
            , textalign: "center"}} ><br></br>
         <div style={{color: "red"}}>
               Title: {element.title} <br></br> </div>
              publishedDate:{element.dateOfPublication}<br></br>
            <img src={element.img} alt="new" /><br></br>             
            <button onClick = {()=>{
                 axios.delete("http://localhost:5000/removeread")
                .then((res) => {
                  console.log("DELETED");
                })
                .catch((err) => {
                  console.log(err);
                });
             }}> Remove </button><br></br>
            </div>
          })}
        </div>
        </div>
 )
}

}

export default withRouter(Readlater);