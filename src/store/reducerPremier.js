const defaultState = {
    films: [],
};


export const reducerPremier = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_FILMS_PREMIER':
            return { ...state, films: action.payload };

        default:
            return state;
    }
};