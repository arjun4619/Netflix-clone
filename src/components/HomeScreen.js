import React from 'react';
import './HomeScreen.css';
//Components
import Nav from './Navbar';
import Banner from './Banner';
import Rows from './Rows';
//API requests
import requests from '../Requests';

function HomeScreen() {
    return (
        <div className='Homescreen'>
            <Nav />

            <Banner />
            
            <Rows title='Trending Now' fetchUrl={requests.fetchTrending} />
            <Rows title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals}/>
            <Rows title='Top Rated' fetchUrl={requests.fetchTopRated} />
            <Rows title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
            <Rows title='Action Movies' fetchUrl={requests.fetchActionMovies} />
            <Rows title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
            <Rows title='Sci-fi Movies' fetchUrl={requests.fetchDocumentaries} />
        </div>
    )
}

export default HomeScreen;