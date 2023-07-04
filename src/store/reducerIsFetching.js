const defaultState = {
    isFetching: true,   
 };


export const reducerIsFetching = (state = defaultState, action) =>{
            switch(action.type) {
                case 'TOOGLE_ISFETCHING':
                    return {...state, isFetching: action.payload};
            
                default:
                 return state;
            }
};