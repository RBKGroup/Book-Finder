import React from 'react';
import axios from "axios"
import cors from 'cors' 
class Showone extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
       const {titles}= this.props;
      return ( <div id ='s'>
           <div>
             {titles.map((element,index)=>{ 
               return <div  key={index} ><br></br>
            <div style={{color: "red"}}> 
             Title: {element.volumeInfo.title} <br></br> </div>
             <div> Authors: {element.volumeInfo.authors}<br></br></div>
             <div> publishedDate:{element.volumeInfo.publishedDate}<br></br></div>
             <div>  <img src={element.volumeInfo.imageLinks.smallThumbnail} alt="new" /><br></br></div>   
            <div><a href={element.accessInfo.webReaderLink}  rel="noopener noreferrer" target="_blank">
              READ IT ON LINE </a>
                   </div>     
           <div>  <button id="butn" onClick = {()=>{
                 console.log(element.volumeInfo)
                var a =element.volumeInfo.title;
                var b = element.volumeInfo.authors;
                var c = element.volumeInfo.publishedDate;
                var d =  element.volumeInfo.imageLinks.smallThumbnail;
                const data ={
                  title : a,
                  author: b,
                  dateOfPublication :c,
                  img : d
                
                }
                console.log(data)
                 axios.post("http://localhost:5000/book",data)
                .then((res) => {
                  console.log(res.data);
                })
                .catch((err) => {
                  console.log(err);
                });
             }}> LIKE </button><br></br> </div>
             <div>  <button id="butn" onClick = {()=>{
                 console.log(element.volumeInfo)
                var a =element.volumeInfo.title;
                var c = element.volumeInfo.publishedDate;
                var d =  element.volumeInfo.imageLinks.smallThumbnail;
                const data ={
                  title : a,
                  dateOfPublication :c,
                  img : d
                
                }
                console.log(data)
                 axios.post("http://localhost:5000/readbook",data)
                .then((res) => {
                  console.log(res.data);
                })
                .catch((err) => {
                  console.log(err);
                });
             }}> READ </button><br></br> </div>
               </div>
             })}
           </div>
           </div>
    )
  }

}
export default Showone;