import React from "react"
import{FaStar} from 'react-icons/fa'
import {Link } from "react-router-dom";
const Moviecard=(props)=>{
   let filter=[];
   if(props.word !=""){
    filter=props.Movies.filter(movie=>{
     return movie.name.toLowerCase().includes(props.word)
    })}
    else if(props.rating===0){
      filter=props.Movies;
    }else { 
      filter=props.Movies.filter((movie)=>{return movie.stars===props.rating})}

  return(
   <div className="flex-container">
    {filter.map((movie,i)=>{
     return(
      <div key={i}>
        <Link to={"/"+String(i)}><img src={movie.image} alt=""/></Link> 
       <h2>{movie.name}</h2>
       {[...Array(5)].map((v,i)=>{
        return <FaStar key={i} size={25} color={i<movie.stars?"yellow":"gray"}/>
       })
       }
      </div>
     )
   })
   }
   </div>
   )}
  
export default Moviecard