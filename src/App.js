import React, { useState} from 'react';
import './App.css';
import Moviecard from "./MovieCard"
import ReactStars from "react-rating-stars-component";
import {Movies} from './data'
import AddMovie from "./AddMovie"
function App() {
  const [rating, setRating] = useState(0);
  const [word, setword] = useState("");
  const [movies, setMovies] = useState(Movies);
  const AddNewMovie=(x)=>{
    setMovies([...movies, x])
  }
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    
    <div className="App">
    <AddMovie AddNewMovie={AddNewMovie}></AddMovie>
    <input type="text" placeholder="Search.." size={20} onChange={v=>setword(v.target.value)}  >  
    </input>
    <button onClick={refreshPage}>See all</button>
    <div className="stars"><ReactStars count={5} onChange={(v)=>setRating(v)} size={60}
    activeColor="red"/></div>
      <Moviecard rating={rating} word={word} Movies={movies} />
    </div>
  );
}

export default App;
