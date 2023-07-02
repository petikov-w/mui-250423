import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// import { Helmet } from 'react-helmet';
import { ListCardsU } from '../components/ListCardsU';



export const PremierPage = (props) => { 

const dispatch = useDispatch();
//  const query = process.env.REACT_APP_API_PREMIERS;   
//  const pathPage='/?page=';
                
useEffect(()=>{ dispatch({type:'FILMS_PREMIER'});}, []);


    return (
        <>
            {/* <Helmet>
                <title>Cinema Box - Главная</title>
            </Helmet> */}          
                
            <ListCardsU typePage="premier"/>                
        </>
           
    );
};
