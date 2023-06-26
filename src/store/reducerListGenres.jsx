const defaultState = {
    genres: [],
 };


export const reducerListGenres = (state = defaultState, action) =>{
            switch(action.type) {
                case 'SET_LIST_GENRES':
                 return {...state, genres: action.payload};

                default:
                 return state;
            }
};