import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';

import SectionMovieList from '../components/SectionMovieList';

import Spinner from '../components/Spinner';

const Home = () => {
    //const KEY = '3d9d528c10bd10aab1dcbcd5f1f8f9bf';
    const POPULAR = 'https://api.themoviedb.org/3/movie/popular?api_key=3d9d528c10bd10aab1dcbcd5f1f8f9bf';
    const TOP_RATED = 'https://api.themoviedb.org/3/movie/top_rated?api_key=3d9d528c10bd10aab1dcbcd5f1f8f9bf&language=en-US&page=1';
    const [moviesPopular, setMoviesPopular] = useState([])
    const [moviesTopRated, setMoviesTopRated] = useState([])
    const [isLoadingPopular, setIsLoadingPopular] = useState(true)
    const [isLoadingTopRated, setIsLoadingTopRated] = useState(true)
    
    useEffect(()=>{
        setIsLoadingPopular(true);
        fetch(POPULAR)
            .then((res) =>
                res.json()
            )
            .then((data) =>{
                console.log(data);
                setMoviesPopular(data.results);
                setIsLoadingPopular(false);
            })
            fetch(TOP_RATED)
            .then((res) =>
                res.json()
            )
            .then((data) =>{
                console.log(data);
                setMoviesTopRated(data.results);
                setIsLoadingTopRated(false);
            })
    },[]);

    if(isLoadingPopular || isLoadingTopRated){
        return <Spinner/>
    }
  return(
      <div>
          <Header className="header__home"/> 
          <SectionMovieList title="Destacados" movies={moviesPopular}/> 
          <SectionMovieList title="Mejor Ranking" movies={moviesTopRated}/>    
      </div>
  )
};

export default Home;
