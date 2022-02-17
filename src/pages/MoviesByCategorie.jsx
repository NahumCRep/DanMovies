import React from 'react';
import { useParams } from 'react-router-dom';
import MovieGridLayout from '../components/MovieGridLayout';
import MovieListGrid from '../components/MovieListGrid';

const MoviesByCategorie = () => {
    const { id } = useParams();

    return (
        <MovieGridLayout>
            {/* <div>MoviesByCategorie {id}</div> */}
            <MovieListGrid categorieID={id} />
        </MovieGridLayout>   
    )
}

export default MoviesByCategorie