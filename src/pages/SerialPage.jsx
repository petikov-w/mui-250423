// import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ListCardsU } from '../components/ListCardsU';

export const SerialPage = () => { 

    const dispatch = useDispatch();
    const page = useSelector(state=>state.pagination.page);
    const query = process.env.REACT_APP_API_SERIALS;
    const pathPage='/serials?page=';   

    useEffect(()=>{ 
        // console.log('page---> ', page );
        dispatch({type:'FILMS_SERIAL', payload: {page}});}, [page]);
    
    return (
        <>
            {/* <Helmet>
                <title>Cinema Box - Главная</title>
            </Helmet> */}
             
            <ListCardsU query={query} path={pathPage} typePage="serial"/>      
        </>
           
    );
};

