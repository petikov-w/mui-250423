// import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { ListCardsU } from '../components/ListCardsU';

export const TopPage = (props) => { 
const dispatch = useDispatch();
const page = useSelector(state=>state.pagination.page);
// const pageCount = useSelector(state=>state.pagination.pageCount);


const pathPage='/films?page=';

 useEffect(()=>{dispatch({type:'FILMS_TOP', payload: {page}});}, [page]);
               
    return (
        <>
            {/* <Helmet>
                <title>Cinema Box - Главная</title>
            </Helmet> */}      
            <ListCardsU  path={pathPage} typePage="top"/>                      
        </>
           
    );
};

