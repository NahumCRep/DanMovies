import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';

import SectionMovieList from '../components/SectionMovieList';

import avengers from '../assets/imagenes/avengers.jpg';
import harry from '../assets/imagenes/harrypotter2.jpg';
import spiderman from '../assets/imagenes/spiderman.jpg';
import dune from '../assets/imagenes/dune.jpg';

import Spinner from '../components/Spinner';
/*
const moviesMockup = [
    {
        id: '1',
        title: 'Avengers EndGame',
        banner: avengers,
        poster_path:'/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'
    },
    {
        id: '2',
        title: 'Spiderman No Way Home',
        banner: spiderman,
        poster_path: '/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'
    },
    {
        id: '3',
        title: 'Harry Potter Reliquias del Muerte Parte 2',
        banner: harry,
        poster_path:'/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'
    },
    {
        id: '4',
        title: 'Dune',
        banner: dune,
        poster_path: '/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'
    },
]
*/
const Home = () => {
    function useQuery() {
        const { search } = useLocation();
      
        return React.useMemo(() => new URLSearchParams(search), [search]);
    }
    
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    const query = useQuery();
    const search = query.get("search")
    console.log(search);
    
    useEffect(()=>{
    setIsLoading(true);
    const searchUrl = "https://api.themoviedb.org/3/trending/movie/day?api_key=3d9d528c10bd10aab1dcbcd5f1f8f9bf";
        fetch(searchUrl)
          .then((result)=> result.json())
          .then((data)=>{
    
            setMovies(data.results)
            setIsLoading(false);
          })
        },[search])
    
        if(isLoading){
          return <Spinner/>
        }
  return(
      <div>
          <Header className="header__home"/> 
          <SectionMovieList title="Destacados" movies={movies}/> 
          <SectionMovieList title="Terror" movies={movies}/>    
      </div>
  )
};

export default Home;
