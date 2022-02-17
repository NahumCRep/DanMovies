import React from 'react';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import '../styles/paginationbuttons.css';

const PaginationButtons = ({numberPage, numberTotalPages, nextPageFunction, prevPageFunction}) => {
  return (
    <div className='pagination__div'>
        <button 
            className='pagination_prev pagination_btn'
            onClick={prevPageFunction}
        >
            <FaArrowLeft size={15} />
            prev
        </button>
        <span className='pagination_page'>{numberPage} / {numberTotalPages}</span>
        <button 
            className='pagination_next pagination_btn'
            onClick={nextPageFunction}
        >
            next
            <FaArrowRight size={15} />
        </button>
    </div>
  )
}

export default PaginationButtons;