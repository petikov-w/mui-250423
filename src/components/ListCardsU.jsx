import { useState, useEffect } from 'react';
import { Link as NavLink, useSearchParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {Stack, Pagination, PaginationItem} from '@mui/material';

import { CardsU } from './CardsU';

// const allowedPages = ['','','','',''];
const allowedPagesShowPagination = ['top','serial','mult'];

export const ListCardsU = (props) => { 
    const dispatch = useDispatch();

    // const filmsPremier = useSelector(state=>state.listFilmsPremier.films);
    // const filmsTop = useSelector(state=>state.listFilmsTop.films);
    // const filmsSerial = useSelector(state=>state.listFilmsSerial.films);
    // const filmsMult = useSelector(state=>state.listMultfilms.films);

    const films = useSelector(state=>state.listFilms.films);   
    const totalPages = useSelector(state=>state.pagination.pagesCount);
    const page1 = useSelector(state=>state.pagination.page);
    const isFetching = useSelector(state=>state.isFetching.isFetching);    

    const { typePage, path } = props;

    // ==========================================  !!??!!  ========================================
    const [searchParams] = useSearchParams();       
    const [page, setPage] = useState( parseInt(searchParams.get('page') || 1)); // текущая страница
    // ============================================================================================
    
    const handleChange = (event, p) => { dispatch({type:'SET_PAGE', payload: p}); };
    
    //let sf;
    // if (typePage === 'top') {
    //    sf = isFetching ? (<CardsU films={films} typePage={typePage}  />) : (<h3>Загрузка...</h3>);
    // //    sf = isFetching ? (<CardsU films={filmsTop} typePage={typePage}  />) : (<h3>Загрузка...</h3>);
    // }       
    
    // if (typePage === 'premier') {
    //    sf = isFetching ? (<CardsU films={films} typePage={typePage}  />) : (<h3>Загрузка...</h3>);
    // //    sf = isFetching ? (<CardsU films={filmsPremier} typePage={typePage}  />) : (<h3>Загрузка...</h3>);
    // }       

    // if (typePage === 'serial') {
    //    sf = isFetching ? (<CardsU films={films} typePage={typePage}  />) : (<h3>Загрузка...</h3>);  
    // //    sf = isFetching ? (<CardsU films={filmsSerial} typePage={typePage}  />) : (<h3>Загрузка...</h3>);  
    // }       
                         
    // if (typePage === 'mult') {
    //    sf = isFetching ? (<CardsU films={films} typePage={typePage}  />) : (<h3>Загрузка...</h3>);
    // //    sf = isFetching ? (<CardsU films={filmsMult} typePage={typePage}  />) : (<h3>Загрузка...</h3>);
    // }    

    const sf = isFetching ? (<CardsU films={films} typePage={typePage}  />) : (<h3>Загрузка...</h3>);

    return (
        <>
            {/* <Helmet>
                <title>Cinema Box - Главная</title>
            </Helmet> */}
            {sf}    

            { allowedPagesShowPagination.includes(typePage)
                   ? ( 
                        <Stack spacing={2}>
                            {/* <Pagination count={pagesCount}  */}
                            <Pagination count={totalPages} 
                                    color="pagination"                             
                                    page={page1}  
                                    // page={page}  
                                    // siblingCount={0}
                                    onChange={handleChange}
                                    sx={{marginY: 3,
                                        marginX: 'auto',
                                    }}
                                    renderItem={
                                        (item) =>(                                    
                                        <PaginationItem                                     
                                            component={NavLink}
                                            onChange={handleChange}
                                            to={`${path}${item.page}`}                                             
                                            {...item}
                                            />   
                                        )
                                    }
                        />                               
                        </Stack>
                     )
                   : ('')}   
        </>
           
    );
};
