const defaultState = {
    collectionsTop: [],
};


export const reducerListTopCollection = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_LIST_TOP_COLLECTION':
            return { ...state, collectionsTop: action.payload };

        default:
            return state;
    }
};