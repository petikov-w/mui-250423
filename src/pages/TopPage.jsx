// import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { ListCardsU } from '../components/ListCardsU';

export const TopPage = (props) => { 
const dispatch = useDispatch();
const location = useLocation();
const page = useSelector(state=>state.pagination.page);
// const currentPage = useSelector(state=>state.settings.currentPage); 
const collection = useSelector(state=>state.filters.top_collection);
// const pageCount = useSelector(state=>state.pagination.pageCount);

console.log('location-top :> ', location,
'  location-search :>> ', parseInt(location.search?.split('=')[1] || 1) , ' page :>>> ', page );

const pathPage='/films?page=';

 useEffect(()=>{
    // dispatch({type:'SET_PAGE', payload: parseInt(location.search?.split('=')[1] || 1)});
    console.log('location-top-01 :> ', location,
'  location-search :>> ', parseInt(location.search?.split('=')[1] || 1) , ' page :>>> ', page );
   
    dispatch(
    //     {type:'FILMS_TOP', payload: {fgu, collection}},
        {type:'FILMS_TOP', payload: {collection}}
        
        )
        ;}, [page, collection]);

 useEffect(()=>{   
    if (parseInt(location.search?.split('=') !== page)) {
         dispatch({type:'SET_PAGE', payload: parseInt(location.search?.split('=')[1] || 1)});
          console.log('location-top-02 :> ', location,
'  location-search :>> ', parseInt(location.search?.split('=')[1] || 1) , ' page :>>> ', page );
    }
    }, [location]);
               
    useEffect(()=>{
        return ()=>{
            dispatch({type:'SET_PAGE', payload: 1});
            console.log('+++1+++ :>> ')};
    }, []);       
    
    return (
        <>
            {/* <Helmet>
                <title>Cinema Box - Главная</title>
            </Helmet> */}      
            <ListCardsU  path={pathPage} />                      
        </>
           
    );
};

