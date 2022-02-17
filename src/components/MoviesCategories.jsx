import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/moviescategories.css';

const MoviesCategories = () => {
    const [categoriesList, setCategoriesList] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const getCategories = () => {
        const categoriasURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=3d9d528c10bd10aab1dcbcd5f1f8f9bf&language=en-US`;
        fetch(categoriasURL)
            .then((result) => result.json())
            .then((data) => {
                setCategoriesList(data);
                setLoading(false);
                // console.log(data);
            })
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div className='movies_categories-div'>
            <h3>Categories</h3>
            <ul>

                {
                    isLoading
                        ? <li>cargando..</li>
                        : (categoriesList.genres.map(genre => {
                                return (
                                    <li key={genre.id}><Link to={`/movies/categorie/${genre.id}`}>{genre.name}</Link></li>
                                )
                            })
                        )
                }

            </ul>
        </div>
    )
}

export default MoviesCategories