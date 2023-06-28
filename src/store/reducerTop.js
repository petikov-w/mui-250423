const defaultState = {
    films: [],
};


export const reducerTop = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_FILMS_TOP':
            return { ...state, films: action.payload };

        default:
            return state;
    }
};