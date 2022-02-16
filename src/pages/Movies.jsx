import React, { useContext } from 'react';
import { moviesContext } from '../context/MoviesContext';
// import MovieBanner from '../components/MovieBanner';
import MoviesGrid from '../components/MoviesGrid';
import Search from '../components/Search';
import '../styles/moviestemp.css';

const Movies = () => {
  const { movies } = useContext(moviesContext);
  return (
    // <div className='grid-container'>
    //    {
    //      movies.map((movie) => {
    //        return(
    //           <MovieBanner key={movie.id} movie={movie} />
    //        )
    //      })
    //    }
    // </div>
    <div className="pages__movies">
      <Search />
      <MoviesGrid />;
    </div>
  )
};

export default Movies;
