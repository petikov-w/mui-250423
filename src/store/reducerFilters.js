const defaultState = {
    country: {},
    genre: {},
};


export const reducerFilters = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_COUNTRIE':
            return { ...state, country: action.payload };
        case 'DELETE_COUNTRIE':
            return { ...state, country: {} };
        case 'UPDATE_GENRE':
            return { ...state, genre: action.payload };
        case 'DELETE_GENRE':
            return { ...state, genre: {} };

        default:
            return state;
    }
};