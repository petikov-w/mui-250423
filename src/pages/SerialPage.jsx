// import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ListCardsU } from '../components/ListCardsU';

export const SerialPage = () => { 
    // Блок Redux 
    const dispatch = useDispatch();
    const page = useSelector(state=>state.pagination.page);
    const genre= useSelector(state=>state.filters.genre);
    const country= useSelector(state=>state.filters.country);
    // ====================================================================

    const pathPage='/serials?page=';   
   
    useEffect(()=>{ 
        // eslint-disable-next-line react-hooks/exhaustive-deps
        dispatch({type:'FILMS_SERIAL', payload: {page, country, genre}},);}, [page, country, genre]);        

       
    return (
        <>
            {/* <Helmet>
                <title>Cinema Box - Главная</title>
            </Helmet> */}           
            <ListCardsU path={pathPage} />      
        </>
           
    );
};

