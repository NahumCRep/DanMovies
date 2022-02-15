import React, { useState, useEffect, useContext, useRef } from 'react';
import '../styles/details.css';
import styles from '../styles/moviedetails.module.css';
import { useParams } from 'react-router-dom';
import { moviesContext } from '../context/MoviesContext';
import ReviewBox from '../components/ReviewBox';
import { MdAddComment } from 'react-icons/md';
// import MovieBanner from '../components/MovieBanner';
import StarRate from '../components/StarRate';
import { v4 as uuidv4 } from 'uuid';
import Spinner from '../components/Spinner';

const Details = () => {
  const { id } = useParams();
  const [isReviewing, setIsReviewing] = useState(false);
  const reviewRef = useRef(null);
  const [rating, setRating] = useState(0);
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    console.log(id)
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3d9d528c10bd10aab1dcbcd5f1f8f9bf`)
      .then((result) => result.json())
      .then((data) => {
        console.log(data)
        setIsLoading(false);
        setMovie(data)

      });
  }, [id]);

  if(!movie){
    return null;
  }

  // if (isLoading) {
  //   return <Spinner />
  // }


  // if (!movie) {
  //   return null;
  // }

  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  // utilizando mockup
  // const { id } = useParams();
  // const { movies, reviews, addReview } = useContext(moviesContext);
  // obtener movie
  // const movief = movies.filter(movie => movie.id === id)[0];
  // const movieReviews = reviews.filter(rev => rev.movieID === id);
  // console.log(movieReviews);

  const saveReview = () => {
    // addReview({
    //   movieID: movief.id,
    //   reviewID: uuidv4(),
    //   review: reviewRef.current.value,
    //   reviewRate: rating,
    //   likes: 0,
    //   responses: []
    // });
    // setIsReviewing(false);
  }

  const chooseRate = (rate) => {
    setRating(rate);
  }

  // console.log(movie);
  return (
    <section className='details'>
      <div className='details__info'>


        {/* <MovieBanner movie={movie} /> */}

        {
          isLoading
            ? <Spinner />
            : (
              <div className={styles.container}>
                <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
                <div className={`${styles.col} ${styles.movieDetails}`}>
                  <p className={`${styles.firstP}`}><strong>Title: </strong>{movie.title}</p>
                  <p><strong>Genres: </strong>{movie.genres.map(genre => genre.name).join(", ")}</p>
                  <p><strong>Description: </strong>{movie.overview}</p>
                </div>
              </div>
            )
        }
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
              // movieReviews.map((rev) => {
              //   return (
              //     <ReviewBox key={rev.reviewID} reviewItem={rev} />
              //   )
              // })
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