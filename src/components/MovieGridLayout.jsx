import React from 'react';
import MoviesGrid from '../components/MoviesGrid';
import Search from '../components/Search';
import MoviesCategories from '../components/MoviesCategories';
import '../styles/moviestemp.css';

const MovieGridLayout = ({children}) => {
    return (
        <div className="pages__movies">
            <div className='page__moives-movies'>
                <Search />
                {children}
                {/* <MoviesGrid /> */}
            </div>
            <div className='page__movies-categories'>
                <MoviesCategories />
            </div>

        </div>
    )
}

export default MovieGridLayout