import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {imageUrl,API_KEY,baseUrl} from '../../Constants/Constants'
import YouTube from 'react-youtube';
import './Rowpost.css';

function Rowpost(props) {
  const [movies,setMovies] = useState([]);
  const [urlid,setUrlId] = useState('');
  useEffect (()=>{
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results)
    }).catch(err=>{
      alert('network error');
    })
  },[props.url])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id)=>{
    console.log(id)
       axios.get(`${baseUrl}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        if(response.data.results[0] !== 0){
          setUrlId(response.data.results[0])
        }else{
         console.log("Network Error");
        }
       })
  }
  
  return (
    <div className='row'>
        <h1 className="tittle">{props.title}</h1>
        <div className="posters">
       {movies.map((obj)=>
        <img onClick={()=>handleMovie(obj.id)} className={props.isSmall? "smallposter" :"poster"} src={`${imageUrl+obj.backdrop_path}`} alt=''></img>
       )} 
       </div>
       {urlid && <YouTube videoId={urlid.key} opts={opts}/>}
    </div>
  )
}

export default Rowpost
