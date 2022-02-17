import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieCard from './MovieCard';
// import movies from './movies.json'
// import styles from './MovieGrid.module.css'
import styles from '../styles/moviesgrid.module.css';
import Spinner from './Spinner';

export default function MoviesGrid({}) {
  // const API_KEY = `api_key=3d9d528c10bd10aab1dcbcd5f1f8f9bf`;
  // const BASE_URL = `https://api.themoviedb.org/3`
  // const API_URL= BASE_URL + `/discover/movie?sort_by=popularity.desc&` + API_KEY;
  // let movies = [];

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
    const searchUrl = search ? `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=3d9d528c10bd10aab1dcbcd5f1f8f9bf&language=en-US&page=1&include_adult=false` + search : "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3d9d528c10bd10aab1dcbcd5f1f8f9bf";
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

  return <ul className={styles.movieGrid}>
      {movies.map((movie)=>
      <MovieCard key={movie.id} movie={movie}/> //Le pasamos el atributo movie con movie={movie}, ese atributo lo recibe MovieCard
      )}
  </ul>;
}