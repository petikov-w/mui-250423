// import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { ListCardsU } from '../components/ListCardsU';

export const TopPage = (props) => { 
const dispatch = useDispatch();
const page = useSelector(state=>state.pagination.page);
// const pageCount = useSelector(state=>state.pagination.pageCount);


const query = process.env.REACT_APP_API_TOP_PAGE;   
const pathPage='/films?page=';
const pageLabel='top';


  const location = useLocation();
  


 useEffect(()=>{ 
                // console.log('page--top---> ', page );
                // console.log('page--count---> ', pageCount );
                dispatch({type:'FILMS_TOP', payload: {page}});}, [page]);

                
   
    return (
        <>
            {/* <Helmet>
                <title>Cinema Box - Главная</title>
            </Helmet> */}      
            {/* <ListCardsU query={query} path={pathPage} typePage={pageLabel}/>                       */}
            <ListCardsU query={query} path={pathPage} typePage="top"/>                      
        </>
           
    );
};

