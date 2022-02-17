import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

import '../styles/SectionMovieList.css'
const SectionMovieList = (prop) => {
    const [movies, setMovies] = useState(prop.movies)
    return ( 
        <section className='section__movieList'>
            <h2>{prop.title}</h2>
            <ul className='movieList__list'>
                {movies.map((movie)=>
                    <MovieCard key={movie.id} movie={movie}/>//Le pasamos el atributo movie con movie={movie}, ese atributo lo recibe MovieCard
                )}
            </ul>
        </section>
        
     );
}
 
export default SectionMovieList;