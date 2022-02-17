import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieCard from './MovieCard';
// import movies from './movies.json'
// import styles from './MovieGrid.module.css'
import styles from '../styles/moviesgrid.module.css';
import Spinner from './Spinner';
import PaginationButtons from './PaginationButtons';

const MovieListGrid = ({ categorieID }) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        setIsLoading(true);
        const searchUrl = `https://api.themoviedb.org/3/discover/movie?api_key=3d9d528c10bd10aab1dcbcd5f1f8f9bf&with_genres=${categorieID}&page=${page}`;
        fetch(searchUrl)
            .then((result) => result.json())
            .then((data) => {
                console.log(data);
                setPage(data.page);
                setTotalPages(data.total_pages);
                setMovies(data.results);
                setIsLoading(false);
            })
    }, [categorieID, page]);

    const nextPage = () => {
        if (page && page < totalPages) {
            setPage(page + 1);
        }
    }

    const prevPage = () => {
        if (page && page !== 1) {
            setPage(page - 1);
        }
    }


    // if (isLoading) {
    //     return <Spinner />
    // }

    return (
        <div>
            {
                isLoading
                    ? <Spinner />
                    : (
                        <ul className={styles.movieGrid}>
                            {
                                movies.map((movie) =>
                                    <MovieCard key={movie.id} movie={movie} /> //Le pasamos el atributo movie con movie={movie}, ese atributo lo recibe MovieCard
                                )
                            }
                        </ul>
                    )
            }
            <PaginationButtons
                numberPage={page}
                numberTotalPages={totalPages}
                nextPageFunction={nextPage}
                prevPageFunction={prevPage}
            />
        </div>
    )
}

export default MovieListGrid;