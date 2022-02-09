import React, { useState, useEffect, useContext, useRef } from 'react';
import '../styles/details.css';
import { useParams } from 'react-router-dom';
import { moviesContext } from '../context/MoviesContext';
import ReviewBox from '../components/ReviewBox';
import { MdAddComment } from 'react-icons/md';
import MovieBanner from '../components/MovieBanner';
import StarRate from '../components/StarRate';
import { v4 as uuidv4 } from 'uuid';

const Details = () => {
  const [isReviewing, setIsReviewing] = useState(false);
  const reviewRef = useRef(null);
  const [rating, setRating] = useState(0);

  const { id } = useParams();
  const { movies, reviews, addReview } = useContext(moviesContext);
  // obtener movie
  const movie = movies.filter(movie => movie.id === id)[0];
  const movieReviews = reviews.filter(rev => rev.movieID === id);
  // console.log(movieReviews);

  const saveReview = () => {
    // console.log(reviewRef.current.value);
    // console.log(rating)
    addReview({
      movieID: movie.id, 
      reviewID: uuidv4(),
      review: reviewRef.current.value,
      reviewRate: rating,
      likes: 0,
      responses:[] 
    });
    setIsReviewing(false);
  }

  const chooseRate =(rate) => {
    setRating(rate);
  }

  // console.log(movie);
  return (
    <section className='details'>
      <div className='details__info'>
        <MovieBanner movie={movie} />
      </div>
      <div className='details__setreviews'>
        <h1>Comentarios</h1>
        <hr />
        <button
          className='btn-addreview'
          onClick={() => setIsReviewing(!isReviewing)}
        >
          <MdAddComment size={25} /> agregar comentario
        </button>
      </div>
      <div className='details__reviews'>
        <div className='reviews'>
          {
            isReviewing && (
              <div className='set__review'>
                <textarea className='review_textarea' ref={reviewRef} />
                <div className='review__ratearea'>
                  <div className='review__rate'>
                    <span>Rate:</span>
                    <StarRate handleRate={chooseRate} />
                  </div>
                  <button onClick={saveReview}>aceptar</button>
                </div>
              </div>
            )
          }
          <div className='reviews__list'>
            {
              movieReviews.map((rev)=>{
                return( 
                  <ReviewBox key={rev.reviewID} reviewItem={rev} />
                )
              })
            }
          </div>
        </div>
        <div className='aside'>

        </div>
      </div>
    </section>
  )
};

export default Details;