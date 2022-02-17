import React, {useContext} from 'react';
import { moviesContext } from '../context/MoviesContext';
import ReviewBox from '../components/ReviewBox';
import '../styles/details.css';

const ReviewSection = ({movieid}) => {
    const { reviews } = useContext(moviesContext);
    const reviewsfilter = reviews.filter(rev => rev.movieID === movieid);
    console.log(reviewsfilter);

    return(
        <div className='reviews__list'>
            {
              reviewsfilter.map((rev) => {
                return (
                  <ReviewBox key={rev.reviewID} reviewItem={rev} />
                )
              })
            }
          </div>
    )
}

export default ReviewSection;