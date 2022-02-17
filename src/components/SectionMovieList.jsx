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
                    <li key={movie.id}><MovieCard key={movie.id} movie={movie}/></li>//Le pasamos el atributo movie con movie={movie}, ese atributo lo recibe MovieCard
                    /*<li key={movie.id}>{movie.title}</li>*/
                )}
            </ul>
        </section>
        
     );
}
 
export default SectionMovieList;