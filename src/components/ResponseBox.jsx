import React, {useContext, useState} from 'react';
import '../styles/responsebox.css';
import { FaUser, FaTrashAlt, FaRegHeart, FaHeart } from 'react-icons/fa';
import { moviesContext } from '../context/MoviesContext';

const ResponseBox = ({rvwID, responseItem, handleRender}) => {
    const { removeResponse } = useContext(moviesContext);
   

    const deleteResponse = () => {
        removeResponse({
            idReview: rvwID,
            idResponse: responseItem.responseID
        });
        handleRender();
    }

    return (
        <div className='responsebox'>
            <div className='responsebox__content'>
                <div className='reponsebox__user'>
                    <FaUser />
                    <span>{'ezequiel'}</span>
                </div>
                <div className='response__message'>
                    <p>{responseItem.message}</p>
                </div>
            </div>
            <div className='response__btns'>
                <button onClick={deleteResponse}>
                    <FaTrashAlt size={15} />
                </button>
            </div>
        </div>
    )
};

export default ResponseBox;
