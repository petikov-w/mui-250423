import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ListCardsU } from '../components/ListCardsU';

export const PremierPage = () => { 
    const dispatch = useDispatch();
    useEffect(()=>{ dispatch({type:'FILMS_PREMIER'});}, []);

    return (
        <>            
            <ListCardsU />                
        </>
           
    );
};
