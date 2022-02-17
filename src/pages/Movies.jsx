import React from 'react';
import MoviesGrid from '../components/MoviesGrid';
import Search from '../components/Search';
import MoviesCategories from '../components/MoviesCategories';
import '../styles/moviestemp.css';

import MovieGridLayout from '../components/MovieGridLayout';

const Movies = () => {
  return (
    <MovieGridLayout>
      <MoviesGrid />
    </MovieGridLayout>
    // <div className="pages__movies">
    //   <div className='page__moives-movies'>
    //     <Search />
    //     <MoviesGrid />
    //   </div>
    //   <div className='page__movies-categories'>
    //       <MoviesCategories />
    //   </div>
    // </div>

  )
};

export default Movies;
