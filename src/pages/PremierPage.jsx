// import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { ListCardsU } from '../components/ListCardsU';



export const PremierPage = (props) => { 
    const location = useLocation();


const dispatch = useDispatch();
//  const pathPage='/?page=';
     console.log('location-premier-01 :> ', location  );                
useEffect(()=>{ dispatch({type:'FILMS_PREMIER'});}, []);


    return (
        <>
            {/* <Helmet>
                <title>Cinema Box - Главная</title>
            </Helmet> */}                          
            {/* <ListCardsU typePage="premier"/>                 */}
            <ListCardsU />                
        </>
           
    );
};
