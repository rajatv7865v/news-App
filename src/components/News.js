import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

export default function News() {
  const [data, setData] = useState([]);

  

  useEffect(() => {
   const getapi=async()=>{
    let getResponse=await axios.get(
      
     " https://newsapi.org/v2/everything?q=tesla&from=2022-09-30&sortBy=publishedAt&apiKey=4be6485d8680485ab576eb5ea214679c"
      // "https://newsapi.org/v2/everything?q=tesla&from=2022-09-29&sortBy=publishedAt&apiKey=ee1b0385760345cfb7c60c76b19e826d"
      
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
