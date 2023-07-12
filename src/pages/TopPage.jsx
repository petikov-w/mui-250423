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

console.log('location :>> ', location);
const pathPage='/films?page=';

 useEffect(()=>{dispatch({type:'FILMS_TOP', payload: {page, collection}});}, [page, collection]);
               
    return (
        <>
            {/* <Helmet>
                <title>Cinema Box - Главная</title>
            </Helmet> */}      
            {/* <ListCardsU  path={pathPage} typePage="top"/>                       */}
            {/* <ListCardsU  path={pathPage} />                       */}
            <ListCardsU  path={pathPage} />                      
        </>
           
    );
};

