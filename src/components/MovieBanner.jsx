import React from 'react';
import '../styles/moviebanner.css';
import {Link} from 'react-router-dom';

const MovieBanner = ({movie}) => {
  return(
      <div className='movie__banner'>
          <div className='movie__image'>
              <img src={movie.img} alt={movie.title} />
          </div>
          <div className='movie__title'>
              <Link to={`/details/${movie.id}`}>{movie.title}</Link>
          </div>
      </div>
  )
};

export default MovieBanner;
