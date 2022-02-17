import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/slider.css';
import Button from './Button/Button';

const SliderBanner = ({ movieID, title, banner }) => {
  return (
    <div className='slider__banner-container'>
      <div className='slider__bg-gradient'>
        <div className="slider__title">
          <h1>{title}</h1>
          <Link to={`/details/${movieID}`} >
            <button className='slider__link'>
              Ver
            </button>
          </Link>
        </div>
      </div>
      <div className="slider__banner">
        <img src={banner} className="slider__img" alt="banner" />
      </div>
    </div>
  )
};

export default SliderBanner;
