import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieCard from './MovieCard';
import styles from '../styles/moviesgrid.module.css';
import Spinner from './Spinner';
import PaginationButtons from './PaginationButtons';

export default function MoviesGrid({ }) {

  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0)

  const query = useQuery();
  const search = query.get("search")
  console.log(search);

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search ? `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=3d9d528c10bd10aab1dcbcd5f1f8f9bf&language=en-US&page=${page}&include_adult=false` + search : `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3d9d528c10bd10aab1dcbcd5f1f8f9bf&page=${page}`;
    fetch(searchUrl)
      .then((result) => result.json())
      .then((data) => {
        setPage(data.page);
        setTotalPages(data.total_pages);
        setMovies(data.results)
        setIsLoading(false);
      })
  }, [search, page])

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

  return (
    <div>
      {
        isLoading
          ? <Spinner />
          : (
            <ul className={styles.movieGrid}>
              {movies.map((movie) =>
                <MovieCard key={movie.id} movie={movie} /> //Le pasamos el atributo movie con movie={movie}, ese atributo lo recibe MovieCard
              )}
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