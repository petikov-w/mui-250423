// import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ListCardsU } from '../components/ListCardsU';

export const MultPage = () => { 

    // Блок Redux 
    const dispatch = useDispatch();
    const page = useSelector(state=>state.pagination.page);
    const country= useSelector(state=>state.filters.country);
    // ====================================================================    

    const pathPage='/mults?page=';

    useEffect(()=>{ 
            // eslint-disable-next-line react-hooks/exhaustive-deps
            dispatch({type:'FILMS_MULT', payload: {page, country}},);}, [page, country]);        


return (
    <>
        {/* <Helmet>
            <title>Cinema Box - Главная</title>
        </Helmet> */}
        <ListCardsU  path={pathPage} typePage="mult"/>      
    </>
           
    );
};

