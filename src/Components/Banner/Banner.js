
import { useEffect, useState } from 'react';
import {API_KEY,imageUrl} from '../../Constants/Constants'
import './Banner.css';
import axios from '../../axios';

function Banner() {
  const [movie,setMovie] = useState({})
  useEffect(() =>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      setMovie(response.data.results[12])
    })
  }, [])
  return (

    <div className='banner' style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:''})`}}>
        <div className='content'>
            <div className='tittle'>{movie ? movie.title : ""}</div>
              <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
              </div>
            <h1 className='description'>{movie ? movie.overview : ""} </h1>
        </div>
        <div className="fade_bottom"></div>
      
    </div>
  )
}

export default Banner
