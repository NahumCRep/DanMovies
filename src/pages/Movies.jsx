import React, {useContext} from 'react';
import { moviesContext } from '../context/MoviesContext';
import MovieBanner from '../components/MovieBanner';

const Movies = () => {
  const {movies} = useContext(moviesContext);
  return(
      <div>
         {
           movies.map((movie) => {
             return(
                <MovieBanner key={movie.id} id={movie.id} title={movie.title} banner={movie.img} />
             )
           })
         }
      </div>
  )
};

export default Movies;
