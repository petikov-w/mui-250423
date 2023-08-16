import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// import { ListCardsU } from '../components/ListCardsU';
import { Cards } from '../components/cards/Cards';

export const SerialPage = () => { 
    // Блок Redux 
    const dispatch = useDispatch();
    const location = useLocation();
    const page = useSelector(state=>state.pagination.page);
    const genre= useSelector(state=>state.filters.genre);
    const country= useSelector(state=>state.filters.country);    
    const loactionPage = parseInt(location.search?.split('=')[1]);

    useEffect(()=>{dispatch({type:'SET_PAGE', payload: loactionPage});}, []);

    useEffect(()=>{ 
        dispatch({type:'FILMS_SERIAL', payload: {country, genre}},);}, [page, country, genre]);        

    useEffect(()=>{
        if (loactionPage !== page)  
           {dispatch({type:'SET_PAGE', payload: loactionPage});}}, [location]);   
   

    return (
        <>                 
            <Cards />      
            {/* <ListCardsU />       */}
        </>
           
    );
};

