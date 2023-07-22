const defaultState = {
    theme: 'light',
    checkedTheme: null,
    currentPage: 'premier',
    currentPath: '',
};


export const reducerSettings = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_THEME':
            return { ...state, theme: action.payload };
        case 'UPDATE_CHECKED_THEME':
            return { ...state, checkedTheme: action.payload };
        case 'UPDATE_CURRENT_PAGE':
            return { ...state, currentPage: action.payload };
        case 'UPDATE_CURRENT_PATH':
            return { ...state, currentPath: action.payload };


        default:
            return state;
    }
};