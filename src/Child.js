import React from "react"
import {useParams,Link} from "react-router-dom";
import {Movies} from './data'
import ReactPlayer from "react-player"
import "./Child.css"
function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  let index = parseInt(id)
  return (
    <div  >
     <ReactPlayer className="vid"  width="80%" height="400px"
        url={Movies[index].trailer}
      />
      <p>{Movies[index].description}</p>
      <Link to="/" className="but"><button>Back</button></Link>
    </div>
  );
}
export default Child