import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/moviescategories.css';
import { BsArrowDownSquareFill, BsArrowUpSquareFill } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

const MoviesCategories = () => {
    const [categoriesList, setCategoriesList] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

    const getCategories = () => {
        const categoriasURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=3d9d528c10bd10aab1dcbcd5f1f8f9bf&language=en-US`;
        fetch(categoriasURL)
            .then((result) => result.json())
            .then((data) => {
               
                setCategoriesList(data);
                setLoading(false);
            })
    }

    useEffect(() => {
        getCategories();
    }, []);

    const location = useLocation();
    React.useEffect(() => {
    //    console.log(location.pathname);
       setIsCategoriesOpen(false);
    }, [location]);

    return (
        <div className='movies_categories-div'>
            <div className='movies_categories-head'>
                <h3>Categories</h3>
                <button className='categorie-btn-menu' onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}>
                    {
                        isCategoriesOpen
                            ? <BsArrowUpSquareFill color="#8E44AD" size={30} />
                            : <BsArrowDownSquareFill color="#8E44AD" size={30} />
                    }
                </button>
            </div>
            <div className={`menu_categories-div ${isCategoriesOpen ? 'menu_categories-open' : 'menu_categories-close'}`}>
                <ul className='categories__list'>
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
        </div>
    )
}

export default MoviesCategories