import React, { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

const StarsRating = ({ rate }) => {
    const [stars, setStars] = useState([]);
    // let stars=[];
    
    useEffect(()=>{
        let arrayStar = []
        for(let i = 1; i <= 5; i++ ){
            i <= rate 
            ? arrayStar.push(<FaStar key={i} className='star__active' size={20} />)
            : arrayStar.push(<FaStar key={i} size={20} color='#E5E7E9' />) 
        }
        setStars(arrayStar);
    },[rate]);

    return (
        <div>
            {stars}
        </div>
    )
};

export default StarsRating;
