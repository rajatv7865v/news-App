import React, { useState, useEffect } from "react";
import axios from "axios";
import {useParams} from 'react-router-dom'
import './NewsDetail.css'


const NewsDetail = () => {
    const params=useParams().title;
    
    const [data, setData] = useState([]);
 

  

    useEffect(() => {
     const getapi=async()=>{
      let getResponse=await axios.get(
        " https://newsapi.org/v2/everything?q=tesla&from=2022-09-30&sortBy=publishedAt&apiKey=4be6485d8680485ab576eb5ea214679c"
        // "https://newsapi.org/v2/everything?q=tesla&from=2022-09-29&sortBy=publishedAt&apiKey=ee1b0385760345cfb7c60c76b19e826d"
      )
      getResponse=await getResponse.data
      // console.log("data ",getResponse)
      const filterData=getResponse.articles.find((item)=>{
        return item.title===params
      })
      setData(filterData)
    //   console.log("data ",filterData)

     }
     getapi();
       
        
    }, [params]);

    

  return (

    <div className="detail-main-container">
       <div className="detail-container">
            <img className="detail-image" src={data.urlToImage} alt="Mountain" />
            
            <div className="detail-author-container">
              
              <h1>{data.title}</h1>
             
              <h2>{data.description}</h2>
              <h3>{data.content}</h3>
              <h5><span>Author :</span> {data.author}</h5>
              
            </div>
       </div>
    </div>
  )
}

export default NewsDetail
