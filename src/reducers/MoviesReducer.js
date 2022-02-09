export const MoviesReducer = (state, action) => {

    const { type, payload } = action;
    let newState;

    switch (type) {
        case 'addReview':
            return [...state, payload]
        case 'removeReview':
            
            break;
        case 'addResponseToReview':
            break;
        case 'removeResponseFromReview':
            break;
    }

    return newState;
}