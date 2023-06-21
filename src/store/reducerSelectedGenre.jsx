const defaultState = {
    genre: {},
 };


export const reducerSelectedGenre = (state = defaultState, action) =>{
            switch(action.type) {
                case 'UPDATE_GENRE':
                 return {...state, genre: action.payload};

                default:
                 return state;
            }
};