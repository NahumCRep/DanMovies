import React from 'react';
import '../styles/moviebanner.css';
import {Link} from 'react-router-dom';

const MovieBanner = ({id, title, banner}) => {
  return(
      <div className='movie__banner'>
          <div className='movie__image'>
              <img src={banner} alt={title} />
          </div>
          <div className='movie__title'>
              <Link to={`/details/${id}`}>{title}</Link>
          </div>
      </div>
  )
};

export default MovieBanner;
