const defaultState = {
    film: {},
    isSinglePage: false,
};


export const reducerSingle = (state = defaultState, action) => {
    switch (action.type) {
        case 'FILM_SINGLE':
            return { ...state, film: action.payload };
        case 'TOOGLE_SINGLE_PAGE':
            return { ...state, isSinglePage: action.payload };

        default:
            return state;
    }
}; 