import React, { useState} from 'react';
import './App.css';
import Moviecard from "./MovieCard"
import ReactStars from "react-rating-stars-component";

function App() {
  const [rating, setRating] = useState(0);
  const [word, setword] = useState("");
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="App">
    <input type="text" placeholder="Search.." size={20} onChange={v=>setword(v.target.value)}  >  
    </input>
    <button onClick={refreshPage}>See all</button>
    <div className="stars"><ReactStars count={5} onChange={(v)=>setRating(v)} size={60}
    activeColor="red"/></div>
      <Moviecard rating={rating} word={word}/>
    </div>
  );
}

export default App;
