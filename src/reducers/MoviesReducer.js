export const MoviesReducer = (state, action) => {

    const { type, payload } = action;
    let newState;

    switch (type) {
        case 'addReview':
            return [...state, payload]
        case 'removeReview':
            newState = state.filter(revw => revw.reviewID !== payload);
            return newState;
        case 'addResponseToReview':
            state.forEach(revw => {
                if(revw.reviewID === payload.idReview){
                    revw.responses.push(payload.response);
                } 
            });
            return state;
        case 'removeResponseFromReview':
            state.forEach(revw => {
                if(revw.reviewID === payload.idReview){
                    let newResponses = revw.responses.filter(resp => resp.responseID !== payload.idResponse);
                    revw.responses = newResponses;
                } 
            });
            return state;
    }

    // return newState;
}