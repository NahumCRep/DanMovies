import React, {useContext, useState} from 'react';
import '../styles/responsebox.css';
import { FaUser, FaTrashAlt, FaRegHeart, FaHeart } from 'react-icons/fa';
import { moviesContext } from '../context/MoviesContext';
import { userContext } from '../context/UserContext';

const ResponseBox = ({rvwID, responseItem, handleRender}) => {
    const { removeResponse } = useContext(moviesContext);
    const {user} = useContext(userContext);
    console.log(responseItem);

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
                    <span>{responseItem.username}</span>
                </div>
                <div className='response__message'>
                    <p>{responseItem.message}</p>
                </div>
            </div>
            <div className='response__btns'>
                {
                    responseItem.useremail == user.email 
                    ? <button onClick={deleteResponse}><FaTrashAlt size={15} /></button>
                    : null
                }    
            </div>
        </div>
    )
};

export default ResponseBox;
