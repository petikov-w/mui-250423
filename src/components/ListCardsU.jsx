import { useState, useEffect } from 'react';
import { Link as NavLink, useSearchParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {Stack, Pagination, PaginationItem} from '@mui/material';

import { CardsU } from './CardsU';

// const allowedPages = ['','','','',''];
const allowedPagesShowPagination = ['top','serial','mult'];

export const ListCardsU = (props) => { 
    const dispatch = useDispatch();

    // const films = useSelector(state=>state.listFilms.films);   
    const totalPages = useSelector(state=>state.pagination.pagesCount);
    const page1 = useSelector(state=>state.pagination.page);
    const isFetching = useSelector(state=>state.isFetching.isFetching);    
    const currentPage = useSelector(state=>state.settings.currentPage); 
    const { path } = props;
    // const { typePage, path } = props;

    // ==========================================  !!??!!  ========================================
    const [searchParams] = useSearchParams();       
    const [page, setPage] = useState( parseInt(searchParams.get('page') || 1)); // текущая страница
    // ============================================================================================
    
    // const handleChange = (event, p) => { dispatch({type:'SET_PAGE', payload: p}); };
    
    return (
        <>
            {/* <Helmet>
                <title>Cinema Box - Главная</title>
            </Helmet> */}
            {isFetching ? (<CardsU />) : (<h3>Загрузка...</h3>)}    
            {/* {isFetching ? (<CardsU typePage={typePage}  />) : (<h3>Загрузка...</h3>)}     */}

            {/* { allowedPagesShowPagination.includes(typePage) */}
            { allowedPagesShowPagination.includes(currentPage)
                   ? ( 
                        <Stack spacing={2}>
                            {/* <Pagination count={pagesCount}  */}
                            <Pagination count={totalPages} 
                                    color="pagination"                             
                                    page={page1}  
                                    // siblingCount={0}
                                    onChange={(event, p) => { dispatch({type:'SET_PAGE', payload: p}); }}
                                    // onChange={handleChange}
                                    sx={{marginY: 3,
                                        marginX: 'auto',
                                    }}
                                    renderItem={
                                        (item) =>(                                    
                                        <PaginationItem                                     
                                            component={NavLink}
                                            // onChange={handleChange}
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
