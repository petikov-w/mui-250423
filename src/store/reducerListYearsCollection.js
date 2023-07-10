const defaultState = {
    collectionsYears: [],
};


export const reducerListYearsCollection = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_LIST_YEARS_COLLECTION':
            return { ...state, collectionsYears: action.payload };

        default:
            return state;
    }
};