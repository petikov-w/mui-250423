// import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ListCardsU } from '../components/ListCardsU';

export const MultPage = () => { 

    // Блок Redux 
    const dispatch = useDispatch();
    const location = useLocation();
    const page = useSelector(state=>state.pagination.page);
    const country= useSelector(state=>state.filters.country);
    // ====================================================================    
   
    const pathPage='/mults?page=';

    useEffect(()=>{ 
            // console.log('location-mult-01 :> ', location,
            // '  location-search :>> ', parseInt(location.search?.split('=')[1] || 1) , ' page :>>> ', page );
            // eslint-disable-next-line react-hooks/exhaustive-deps
            dispatch({type:'FILMS_MULT', payload: {country}},);}, [page, country]);        

    useEffect(()=>{
           
            if (parseInt(location.search?.split('=') !== page)) {
                dispatch({type:'SET_PAGE', payload: parseInt(location.search?.split('=')[1] || 1)});
            //      console.log('location-mult-02 :> ', location,
            // '  location-search :>> ', parseInt(location.search?.split('=')[1] || 1) , ' page :>>> ', page );
            }
            
        }, [location]);           

    useEffect(()=>{
        return ()=>{
            dispatch({type:'SET_PAGE', payload: 1});
            console.log('+++0+++ :>> ')};
    }, []);         

return (
    <>
        {/* <Helmet>
            <title>Cinema Box - Главная</title>
        </Helmet> */}
        <ListCardsU  path={pathPage}/>      
    </>
           
    );
};

