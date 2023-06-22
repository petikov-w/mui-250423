const defaultState = {
    genre: {},
 };


export const reducerListGenres = (state = defaultState, action) =>{
            switch(action.type) {
                case 'UPDATE_GENRE':
                 return {...state, genre: action.payload};

                default:
                 return state;
            }
};