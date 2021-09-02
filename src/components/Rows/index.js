import React, { useState, useEffect } from 'react';
import './Rows.css';
import axios from '../../axios';
/* import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer'; */

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    /* const [trailerUrl, setTrailerUrl] = useState(''); */

    const baseUrl = 'https://image.tmdb.org/t/p/original/';

    console.log(movies);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl])


    /* const opts = {
        //https://developers.google.com/youtube/player_parameters
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    }; 

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
            })
            .catch((error) => console.log(error));
        }
    } */

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map((movie) => (
                    (movie.poster_path && movie.title && movie.original_title && (
                        <img className={`row_poster`}
                        /* onClick={() => handleClick(movie)} */
                        key={movie.id}
                        src={`${baseUrl}${movie.poster_path}`}
                        alt={movie.name}
                    /> )) 
                ))}
            </div>
            {/* <Youtube videoId={trailerUrl} opts={opts}/> */}
        </div>
    )

}

export default Row;