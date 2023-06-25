const defaultState = {
    countrys: [],   
 };


export const reducerListCountrys = (state = defaultState, action) =>{
            switch(action.type) {
                case 'SET_LIST_COUNTRYS':
                 return {...state, countrys: action.payload};

                default:
                 return state;
            }
};