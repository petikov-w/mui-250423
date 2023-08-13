import { useSelector } from 'react-redux';

import { Paginations } from './Paginations';
// import { CardsU } from './CardsU';
import { CardsU2 } from './CardsU2';
import { PreLoader } from './PreLoader';

const allowedPagesShowPagination = ['top','serial','mult'];

export const ListCardsU = () => { 
   
    const isFetching = useSelector(state=>state.isFetching.isFetching);    
    const currentPage = useSelector(state=>state.settings.currentPage); 
    
    return (
        <>
            {isFetching ? (<PreLoader />) : (<CardsU2 />)}              
            { allowedPagesShowPagination.includes(currentPage)
                   ? ( <Paginations /> ) : ('')}   
        </>
           
    );
};
