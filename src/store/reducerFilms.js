const defaultState = {
    films: [],
};


export const reducerFilms = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_FILMS':
            return { ...state, films: action.payload };

        default:
            return state;
    }
};