import React from 'react';
import axios from "axios"
import cors from 'cors' ;
import { Link, withRouter } from "react-router-dom";
class Falist extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
        fav :[]
    }
  }
  getadd(){
    axios.get("http://localhost:5000/favorite")
    .then((result) => {
       console.log(result.data);
       const fava = result.data;
       this.setState({fav:fava})
     })
     .catch((err) => {
       console.log("Error",err);
     });
  }

  render () {
    return ( <div id ='s'>
        <div>
        <button onClick = {this.getadd.bind(this)}> LIST Favoret </button><br></br>
        <Link to="/auth/Search"> HOME</Link>
          {this.state.fav.map((element,index)=>{ 
            return <div  key={index} style= {{border: "5px outset red"
            , textalign: "center"}} >
         <div style={{color: "red"}}>
               Title: {element.title} <br></br> </div>
               Authors: {element.author}<br></br>
              publishedDate:{element.dateOfPublication}<br></br>
            <img src={element.img} alt="new" /><br></br>               
            <button onClick = {()=>{
                 axios.delete("http://localhost:5000/removeOne")
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

export default withRouter(Falist);