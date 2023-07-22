// import { useLocation } from 'react-router-dom';

// eslint-disable-next-line react-hooks/rules-of-hooks

const defaultState = {

    page: 1,
    pagesCount: 0,
    locations: '',
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
        case 'SET_PAGE_LOCATION':
            return { ...state, locations: action.payload };

        default:
            return state;
    }
};