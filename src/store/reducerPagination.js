const defaultState = {
    page: 1,
    pagesCount: 0,
};


export const reducerPagination = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_PAGE':
            return { ...state, page: action.payload };
        case 'SET_PAGES_COUNT':
            return { ...state, pagesCount: action.payload };

        default:
            return state;
    }
};