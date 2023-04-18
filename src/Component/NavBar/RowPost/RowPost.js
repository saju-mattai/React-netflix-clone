import React, { useEffect, useState } from 'react'
import YouTube  from 'react-youtube'
import axios from '../../../axios'
import { image_url,API_KEY } from '../../../Constant/Constant'
import './RowPost.css'

function RowPost(props) {
    const [movies, setmovies] = useState([])
    const [UrlId, setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then((Response) => {
            console.log(Response.data, ',,,,,,,,,,,,');
            setmovies(Response.data.results)
        })
    }, [])
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie =(id)=>{
        console.log(id);
        axios
        .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((Response)=>{
            if(Response.data.results.length !== 0){
                setUrlId(Response.data.results[0])
            }else{
                console.log('Array Empty');
            }
        }).catch((err) => {
            console.log(err);
        })
      }
  
    
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {
                    movies.map((obj) =>
                        <img onClick={()=>handleMovie(obj.id)}className={props.isSmall ? 'smallposter' :'poster'} src={`${image_url+obj.backdrop_path}`}  />
                    )
                }


            </div>
            {
            UrlId &&    <YouTube opts={opts} videoId={UrlId.key} />
            }
        </div>
    )
}

export default RowPost
