// import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { ListCardsU } from '../components/ListCardsU';

export const TopPage = (props) => { 
const dispatch = useDispatch();
const page = useSelector(state=>state=>state.pagination.page);
const query = process.env.REACT_APP_API_TOP_PAGE;   
const pathPage='/films?page=';
const pageLabel='top';


  const location = useLocation();
  

//  useEffect(()=>{ 
//                 dispatch({type:'FILMS_TOP'});
//                  dispatch({type:'SET_PAGE_LABEL ', payload: 1});
//                  dispatch({type:'SET_PAGE', payload: 1});
//                 console.log('--->>> ',location);
//                 }, []);

 useEffect(()=>{ dispatch({type:'FILMS_TOP'});}, [page]);

                
   
    return (
        <>
            {/* <Helmet>
                <title>Cinema Box - Главная</title>
            </Helmet> */}      
            <ListCardsU  path={pathPage} typePage={pageLabel}/>                      
        </>
           
    );
};

