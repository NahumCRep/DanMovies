import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieCard from './MovieCard';
// import movies from './movies.json'
// import styles from './MovieGrid.module.css'
import styles from '../styles/moviesgrid.module.css';
import Spinner from './Spinner';

const MovieListGrid = ({ categorieID }) => {

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        setIsLoading(true);
        const searchUrl = `https://api.themoviedb.org/3/discover/movie?api_key=3d9d528c10bd10aab1dcbcd5f1f8f9bf&with_genres=${categorieID}`;
        fetch(searchUrl)
            .then((result) => result.json())
            .then((data) => {
                // console.log(data);
                setMovies(data.results)
                setIsLoading(false);
            })
    }, [categorieID])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <ul className={styles.movieGrid}>
            {
                isLoading
                    ? <Spinner />
                    : (
                        movies.map((movie) =>
                            <MovieCard key={movie.id} movie={movie} /> //Le pasamos el atributo movie con movie={movie}, ese atributo lo recibe MovieCard
                        )
                    )
            }
        </ul>
    )
}

export default MovieListGrid;