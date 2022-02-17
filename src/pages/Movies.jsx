import React from 'react';
import MoviesGrid from '../components/MoviesGrid';

import MovieGridLayout from '../components/MovieGridLayout';

const Movies = () => {
  return (
    <MovieGridLayout>
      <MoviesGrid />
    </MovieGridLayout>
  )
};

export default Movies;
