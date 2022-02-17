import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import '../styles/starsrate.css';

const StarRate = ({handleRate}) => {
    const [stars, setStars] = useState(0);

    const setRate = (rValue) =>{
        setStars(rValue);
        handleRate(rValue);
    }

    return (
        <div className='starsrate__container'>
            {
                [...Array(5)].map((star,i) => {
                    const rateValue = i + 1;
                    return(
                        <label key={i} className='star__label'>
                            <input 
                                type="radio" 
                                name="rating" 
                                value={rateValue}
                                onClick={() => setRate(rateValue)} 
                            />
                            <FaStar color={rateValue <= stars ? '#F1C40F' : '#E5E7E9'} size={20} />
                        </label>
                    )
                })
            }
        </div>
    )
};

export default StarRate;
