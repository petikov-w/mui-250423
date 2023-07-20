import { useSelector } from 'react-redux';

import { Paginations } from './Paginations';
import { CardsU } from './CardsU';
import { PreLoader } from './PreLoader';

const allowedPagesShowPagination = ['top','serial','mult'];

export const ListCardsU = (props) => { 
   
    const isFetching = useSelector(state=>state.isFetching.isFetching);    
    const currentPage = useSelector(state=>state.settings.currentPage); 
    const { path } = props;
    
    return (
        <>
            {/* <Helmet>
                    <title>Cinema Box - Главная</title>
                </Helmet> */}
            {isFetching ? (<PreLoader />) : (<CardsU />)}              
            { allowedPagesShowPagination.includes(currentPage)
                   ? ( <Paginations path={path} /> ) : ('')}   
        </>
           
    );
};
