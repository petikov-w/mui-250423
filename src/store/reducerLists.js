const defaultState = {
    countrys: [],
    genres: [],
    collectionsTop: [],
    collectionsYears: [],
};


export const reducerLists = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_LIST_COUNTRYS':
            return { ...state, countrys: action.payload };
        case 'SET_LIST_GENRES':
            return { ...state, genres: action.payload };
        case 'SET_LIST_TOP_COLLECTION':
            return { ...state, collectionsTop: action.payload };
        case 'SET_LIST_YEARS_COLLECTION':
            return { ...state, collectionsYears: action.payload };

        default:
            return state;
    }
};