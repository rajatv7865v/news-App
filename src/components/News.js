import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

export default function News() {
  const [data, setData] = useState([]);

  

  useEffect(() => {
   const getapi=async()=>{
    let getResponse=await axios.get(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=046d2e14e65b4d88acbaaa64c353139b"
    )
    getResponse=await getResponse.data
    // console.log("data ",getResponse)
    setData(getResponse.articles)
   }
   getapi();
     
      
  }, []);


  return (
    <>
   <div className="main-container">
      {data?.map((item,i) => {
      
        return (

          <div className="container"key={i}>
            <img className="image" src={item?.urlToImage} alt="Mountain" />
            
            <div className="author-container">
              
              <h1>{item.title}</h1>
              <h1 className="link"><Link to={`/newDetail/${item?.title}`}>Read more...</Link></h1>
            </div>
       </div>
        );
      })}
      </div>
    </>
  );
}
