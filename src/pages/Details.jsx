import React, { useState, useEffect, useContext, useRef } from 'react';
import '../styles/details.css';
import styles from '../styles/moviedetails.module.css';
import { useParams } from 'react-router-dom';
import { moviesContext } from '../context/MoviesContext';
import { MdAddComment } from 'react-icons/md';
import StarRate from '../components/StarRate';
import { v4 as uuidv4 } from 'uuid';
import Spinner from '../components/Spinner';
import ReviewSection from '../components/ReviewSection';
import { userContext } from '../context/UserContext';

const Details = () => {
  const { id } = useParams();
  const [isReviewing, setIsReviewing] = useState(false);
  const [movieReviews, setMovieReviews] = useState([]);
  const reviewRef = useRef(null);
  const [rating, setRating] = useState(0);
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  const { reviews, addReview } = useContext(moviesContext);
  const {user} = useContext(userContext);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3d9d528c10bd10aab1dcbcd5f1f8f9bf`)
      .then((result) => result.json())
      .then((data) => {
        console.log(data)
        setIsLoading(false);
        setMovie(data)
        setMovieReviews(reviews)
        console.log(user);
      });
   
  }, [id]);

  if (!movie) {
    return null;
  }

  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  const saveReview = () => {
    addReview({
      username: user.name,
      useremail: user.email, 
      movieID: movie.id,
      reviewID: uuidv4(),
      review: reviewRef.current.value,
      reviewRate: rating,
      likes: 0,
      responses: []
    });
    setIsReviewing(false);
  }

  const chooseRate = (rate) => {
    setRating(rate);
  }

  return (
    <section className='details'>
      <div className='details__info'>
        {
          isLoading
            ? <Spinner />
            : (
              <div className={styles.container}>
                <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
                <div className={`${styles.col2} ${styles.movieDetails}`}>
                  <p className={`${styles.firstP}`}><strong>Title: </strong>{movie.title}</p>
                  <p><strong>Genres: </strong>{movie.genres.map(genre => genre.name).join(", ")}</p>
                  <p><strong>Description: </strong>{movie.overview}</p>
                  <p><strong>Release Year: </strong>{new Date(movie.release_date).getFullYear()}</p>
                  <p><strong>Rate: </strong>{movie.vote_average}</p>
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
          <ReviewSection movieid={movie.id} />
        </div>
        <div className='aside'>

        </div>
      </div>
    </section>
  )
};

export default Details;