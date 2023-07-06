const defaultState = {
    theme: 'light',
    checkedTheme: null,
};


export const reducerSettings = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_THEME':
            return { ...state, theme: action.payload };
        case 'UPDATE_CHECKED_THEME':
            return { ...state, checkedTheme: action.payload };

        default:
            return state;
    }
};