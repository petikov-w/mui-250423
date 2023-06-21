const defaultState = {
    countrie: {},
 };


export const reducerSelectedCountrie = (state = defaultState, action) =>{
            switch(action.type) {
                case 'UPDATE_COUNTRIE':
                 return {...state, countrie: action.payload};

                default:
                 return state;
            }
};