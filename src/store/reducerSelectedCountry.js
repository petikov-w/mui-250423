const defaultState = {
    country: {},   
 };


export const reducerSelectedCountry = (state = defaultState, action) =>{
            switch(action.type) {
                case 'UPDATE_COUNTRIE':
                    return {...state, country: action.payload};
                case 'DELETE_COUNTRIE':
                    return {...state, country: {}}; 

                default:
                 return state;
            }
};