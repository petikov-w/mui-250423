

const defaultState = {
    country: {},
    genre: {},
    top_collection: {},
    years_collection: {},
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
        case 'UPDATE_TOP_COLLECTION':
            return { ...state, top_collection: action.payload };
        case 'DELETE_TOP_COLLECTION':
            return { ...state, top_collection: {} };
        case 'UPDATE_YEARS_COLLECTION':
            return { ...state, years_collection: action.payload };
        case 'DELETE_YEARS_COLLECTION':
            return { ...state, years_collection: {} };


        default:
            return state;
    }
};