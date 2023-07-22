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
    const loactionPage = parseInt(location.search?.split('=')[1]);

    useEffect(()=>{dispatch({type:'SET_PAGE', payload: loactionPage});}, []);

    useEffect(()=>{dispatch({type:'FILMS_MULT', payload: {country}},);}, [page, country]);        

    useEffect(()=>{   
        if (loactionPage !== page ) 
           {dispatch({type:'SET_PAGE', payload: loactionPage});}}, [location]);     
    
return (
    <>      
        <ListCardsU />      
    </>
           
    );
};

