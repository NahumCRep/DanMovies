import { useState, useContext, useRef } from 'react';
import '../styles/reviewbox.css';
import { FaUser, FaTrashAlt, FaRegHeart, FaHeart } from 'react-icons/fa';
import { MdQuestionAnswer, MdOutlineQuestionAnswer } from 'react-icons/md';
import ResponseBox from './ResponseBox';
import StarsRating from './StarsRating';
import { moviesContext } from '../context/MoviesContext';
import { v4 as uuidv4 } from 'uuid';

const ReviewBox = ({ reviewItem }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isResponse, setIsResponse] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const [reRender, setReRender] = useState(true);
  const { removeReview, addResponse } = useContext(moviesContext);
  const responseRef = useRef(null);

  const deleteReview = () => {
    removeReview(reviewItem.reviewID);
  }
  const setResponse = () => {
      addResponse({
        idReview: reviewItem.reviewID,
        response: {
          responseID: uuidv4(),
          message: responseRef.current.value
        }
      });
      setIsResponse(false);
  }

  const renderList = () => {
    setReRender(!reRender);
  }

  return (
    <div className='reviewbox'>
      <div className='reviewbx__user'>
        <span><FaUser />  {'nahum'}</span>
        <button onClick={deleteReview} ><FaTrashAlt size={20} /></button>
      </div>
      <div className='reviewbx__review'>
        <p>{reviewItem.review}</p>
      </div>
      <div className='reviewbx__footer'>
        <div className='review__footer_rate'>
          <span>Calificado: </span>
          <StarsRating rate={reviewItem.reviewRate} />
        </div>
        <div className='reviewbx__btns'>
          <button onClick={() => setIsLiked(!isLiked)}>
            {
              isLiked ? <FaHeart size={20} color="red" /> : <FaRegHeart size={20} />
            }
          </button>
          <button onClick={() => setIsResponse(!isResponse)}>
            {
              isResponse ? <MdOutlineQuestionAnswer size={23} /> : <MdQuestionAnswer size={23} />
            }
          </button>
        </div>
      </div>
      {
        isResponse && (
          <div className='set__response'>
            <textarea ref={responseRef} className='response__textarea' />
            <button onClick={setResponse} >aceptar</button>
          </div>
        )
      }
      <div className={`reviewbx__responses ${reviewItem.responses.length > 0 ? 'esponses-block' : 'responses-none'}`}>
        <button
          className='btn__responses'
          onClick={() => setIsListOpen(!isListOpen)}
        >
          <span>{isListOpen ? 'ocultar respuestas...' : 'ver respuestas...'}</span>
        </button>
        <div className={`response__list ${isListOpen ? 'res__list-open' : ''}`}>
          {
            reviewItem.responses.map((respons)=>{
              return(
                <ResponseBox key={respons.responseID} rvwID={reviewItem.reviewID} responseItem={respons} handleRender={renderList} /> 
              )
            })
          }
        </div>
      </div>
    </div>
  )
};

export default ReviewBox;
