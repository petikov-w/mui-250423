const defaultState = {
    film: {},
};


export const reducerSingle = (state = defaultState, action) => {
    switch (action.type) {
        case 'FILM_SINGLE':
            return { ...state, film: action.payload };

        default:
            return state;
    }
};