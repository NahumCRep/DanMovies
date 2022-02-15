import React, {useContext} from 'react';
import { moviesContext } from '../context/MoviesContext';
import MovieBanner from '../components/MovieBanner';
import '../styles/moviestemp.css';

const Movies = () => {
  const {movies} = useContext(moviesContext);
  return(
      <div className='grid-container'>
         {
           movies.map((movie) => {
             return(
                <MovieBanner key={movie.id} movie={movie} />
             )
           })
         }
      </div>
  )
};

export default Movies;
