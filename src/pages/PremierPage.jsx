import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// import { ListCardsU } from '../components/ListCardsU';
import { Cards } from '../components/cards/Cards';

export const PremierPage = () => { 
    const dispatch = useDispatch();
    useEffect(()=>{ console.log('Открыл страницу примьер');
        dispatch({type:'FILMS_PREMIER'});}, []);


    useEffect(() => {
        return () => {
            console.log('Покинул страницу примьер');
        }; }, []);

    return (
        <>            
            <Cards />                
            {/* <ListCardsU />                 */}
        </>
           
    );
};
