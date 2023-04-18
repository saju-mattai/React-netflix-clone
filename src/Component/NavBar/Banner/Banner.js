import React, { useState, useEffect } from 'react'
import { API_KEY, image_url, } from '../../../Constant/Constant'
// import { useEffect } from 'react'
import './Banner.css'
import axios from '../../../axios'

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response) => {
            // console.log(Response.data.results[0], '............');
            setMovie(Response.data.results[0])
        }).catch((err) => {
            console.log('eerror' + err);
        })
    }, [])
    return (

        <div
        style={{backgroundImage:`url(${movie ? image_url+movie.backdrop_path : ""})`}}
            className='banner'>
            <div className='content'>

                <h1 className='title'>{movie ? movie.title : ""}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>


                </div>
                <h1 className='discription'>{movie ? movie.overview : ""}</h1>

            </div>
            <div className="fade_bottom">

            </div>

        </div>
    )
}

export default Banner
