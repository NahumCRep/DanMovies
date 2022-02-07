import React, { useState, useEffect } from 'react';
import '../styles/details.css';
import ReviewBox from '../components/ReviewBox';
import { MdAddComment } from 'react-icons/md';

const Details = () => {
  const [isReviewing, setIsReviewing] = useState(false);
  return (
    <section className='details'>
      <div className='details__info'>

      </div>
      <div className='details__setreviews'>
        <h1>Comentarios</h1>
        <hr />
        <button
          className='btn-addreview'
          onClick={() => setIsReviewing(!isReviewing)}
        ><MdAddComment size={25} /> agregar comentario</button>
      </div>
      <div className='details__reviews'>
        <div className='reviews'>
          {
            isReviewing && <div className='set__review'>
              <textarea className='review_textarea' />
              <button>aceptar</button>
            </div>
          }
          <div className='reviews__list'>
            <ReviewBox />
            <ReviewBox />
          </div>
        </div>
        <div className='aside'>

        </div>
      </div>
    </section>
  )
};

export default Details;