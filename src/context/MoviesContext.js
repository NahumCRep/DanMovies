import { createContext, useState, useReducer } from 'react';
import { MoviesReducer } from '../reducers/MoviesReducer';

export const moviesContext = createContext();

const mockup = [{
    id: "1",
    title: "La casa GUCCI",
    img: "https://es.web.img3.acsta.net/pictures/21/11/10/10/42/1405636.jpg",
    stars: 0,
    numberOfReviews: 0
}, {
    id: "2",
    title: "Dune",
    img: "https://damiengwalter.files.wordpress.com/2021/12/dune.jpg?w=640",
    stars: 0,
    numberOfReviews: 0
}, {
    id: "3",
    title: "Spiderman: No way home",
    img: "http://metaunisex.com/wp-content/uploads/2021/12/snwh_poster_bluemontage_4x5fb_1_.jpg",
    stars: 0,
    numberOfReviews: 0
},
{
    id: "4",
    title: "Encanto",
    img: "https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg",
    stars: 0,
    numberOfReviews: 0
}]



const MoviesContext = ({ children }) => {
    const initialReviews = []
    const [state, dispatch] = useReducer(MoviesReducer,initialReviews);
    const [movies, setMovies] = useState(mockup);
    // const [reviews, setReviews] = useState(state);

    // reducer functions
    const addReview = (reviewObject) => {
        dispatch({ type: 'addReview', payload: reviewObject });
    }

    const removeReview = (reviewID) => {
        dispatch({ type: 'removeReview', payload: reviewID });
    }

    const addResponse = (responseObject) => {
        dispatch({ type: 'addResponseToReview', payload: responseObject });
    }

    const removeResponse = (objectID) => {
        dispatch({type: 'removeResponseFromReview', payload: objectID});
    }

    return (
        <moviesContext.Provider value={{ 
            movies, setMovies, 
            reviews: state,
            addReview,
            removeReview,
            addResponse,
            removeResponse 
        }}>
            {children}
        </moviesContext.Provider>
    )
}

export default MoviesContext;


