const defaultState = {
    films: [],
};


export const reducerSerial = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_FILMS_SERIAL':
            return { ...state, films: action.payload };

        default:
            return state;
    }
};