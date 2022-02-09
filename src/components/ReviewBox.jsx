import { useState } from 'react';
import '../styles/reviewbox.css';
import { FaUser, FaTrashAlt, FaRegHeart, FaHeart } from 'react-icons/fa';
import { MdQuestionAnswer, MdOutlineQuestionAnswer } from 'react-icons/md';
import ResponseBox from './ResponseBox';
import StarsRating from './StarsRating';

const ReviewBox = ({reviewItem}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isResponse, setIsResponse] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);

  return (
    <div className='reviewbox'>
      <div className='reviewbx__user'>
        <span><FaUser />  {'nahum'}</span>
        <button><FaTrashAlt size={20} /></button>
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
        isResponse && <div className='set__response'>
          <textarea className='response__textarea' />
          <button>aceptar</button>
        </div>
      }
      <div className='reviewbx__responses'>
        <button
          className='btn__responses'
          onClick={() => setIsListOpen(!isListOpen)}
        >
          <span>{isListOpen ? 'ocultar respuestas...' : 'ver respuestas...'}</span>
        </button>
        <div className={`response__list ${isListOpen ? 'res__list-open' : ''}`}>
          <ResponseBox />
          <ResponseBox />
        </div>
      </div>
    </div>
  )
};

export default ReviewBox;
