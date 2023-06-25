const defaultState = {
    genres: [],
 };


export const reducerListGenres = (state = defaultState, action) =>{
            switch(action.type) {
                case 'GET_LIST_GENRES':
                 return {...state, genres: action.payload};

                default:
                 return state;
            }
};