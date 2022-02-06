import React, {useState, useEffect} from 'react';
import '../styles/details.css';
import ReviewBox from '../components/ReviewBox';
import {MdAddComment} from 'react-icons/md';

const Details = () => {
  return(
      <section className='details'>
          <div className='details__info'>
         
          </div>
          <div className='details__setreviews'>
            <h1>Comentarios</h1>
            <hr />
            <button className='btn-addreview'><MdAddComment size={25} /> agregar comentario</button>
          </div>
          <div className='details__reviews'>
              <div className='reviews'>
                  <ReviewBox />
              </div>
              <div className='aside'>

              </div>
          </div>
      </section>
  )
};

export default Details;