const listTop = [  {id: ' TOP_250_BEST_FILMS', top: 'Топ лучших фильмов'}, 
                   {id: 'TOP_100_POPULAR_FILMS', top: 'Топ популярных фильмов'} , 
                   {id: 'TOP_AWAIT_FILMS', top: 'Топ ожидаемых фильмов'}  ];

const defaultState = {
    country: {},
    genre: {},
    listTop: {listTop},
};



export const reducerFilters = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_COUNTRIE':
            return { ...state, country: action.payload };
        case 'DELETE_COUNTRIE':
            return { ...state, country: {} };
        case 'UPDATE_GENRE':
            return { ...state, genre: action.payload };
        case 'DELETE_GENRE':
            return { ...state, genre: {} };

        default:
            return state;
    }
};