import React from "react"
import {Movies} from './data'
import{FaStar} from 'react-icons/fa'


 const Moviecard=(props)=>{
   if(props.word !=""){
    const filter=Movies.filter(movie=>{
     return movie.name.toLowerCase().includes(props.word)
    })

  return(
   <div className="flex-container">
    {filter.map((movie,i)=>{
     return(
      <div key={i}>
       <img src={movie.image} alt=""/>
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
  //second return
  if(props.rating===0){
  return(
   <div className="flex-container">
    {Movies.map((movie,i)=>{
     return(
      <div key={i}>
       <img src={movie.image} alt=""/>
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
   //third return
   let filtred=Movies.filter((movie)=>{return movie.stars===props.rating})
   return(
   <div className="flex-container">
    {filtred.map((movie,i)=>{
      return(
      <div >
       <img src={movie.image} alt=""/>
       <h2>{movie.name}</h2>
       {[...Array(5)].map((v,i)=>{
        return <FaStar key={i} size={25} color={i<movie.stars?"yellow":"gray"}/>
       })}
      </div>)})}
   </div>
   )
   

   
}
export default Moviecard