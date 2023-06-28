const defaultState = {
    page: 1,
    pagesCount: 0,
    currentPageLabel: '',
};


export const reducerPagination = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_PAGE':
            return { ...state, page: action.payload };
        case 'SET_PAGES_COUNT':
            return { ...state, pagesCount: action.payload };
        case 'SET_PAGE_LABEL':
            return { ...state, currentPageLabel: action.payload };    

        default:
            return state;
    }
};