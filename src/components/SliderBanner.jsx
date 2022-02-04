import React from 'react';
import '../styles/slider.css';

const SliderBanner = (props) => {
  return(
    <div className='slider__banner-container'>
        <div className='slider__bg-gradient'>
            <div className="slider__title">
                    <h1>{props.title}</h1>
                    <button>Ver</button>
            </div>
        </div>
        <div className="slider__banner">
            <img src={props.banner} className="slider__img" alt="banner" />
        </div>
    </div>
  )
};

export default SliderBanner;
