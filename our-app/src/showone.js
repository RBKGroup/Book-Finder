import React from 'react';
import axios from "axios"

class Showone extends React.Component {
  constructor(props) {
    super(props);

  }
  render () {
       const {titles}= this.props;
      return ( <div>
           <div>
             {titles.map((element,index)=>{ 
               return <div  key={index} style= {{border: "5px outset red"
               , textalign: "center"}}><br></br>
            <div style={{color: "red"}}>  Title: {element.volumeInfo.title} <br></br> </div>
              Authors: {element.volumeInfo.authors}<br></br>
              publishedDate:{element.volumeInfo.publishedDate}<br></br>
               <img src={element.volumeInfo.imageLinks.smallThumbnail} alt="new" /><br></br>               
             <button onClick = {()=>{
                 this.setState({favorites:element.volumeInfo})
                 console.log(element.volumeInfo)
                var a =element.volumeInfo.title;
                var b = element.volumeInfo.authors;
                var c = element.volumeInfo.publishedDate;
                var d =  element.volumeInfo.imageLinks.smallThumbnail;
                console.log(b)
                 axios.post("/books", {
                 a,b,c,d
                })
                .then((res) => {
                  console.log(res.data);
                })
                .catch((err) => {
                  console.log(err);
                });
             }}> ADD To Fav </button><br></br>
               </div>
             })}
           </div>
           </div>
    )
  }

}
export default Showone;