import { Link as NavLink, useLocation} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {Stack, Pagination, PaginationItem} from '@mui/material';

export const Paginations = () => { 

    const dispatch = useDispatch();
    const location = useLocation();
    const totalPages = useSelector(state=>state.pagination.pagesCount);
    const isFetching = useSelector(state=>state.isFetching.isFetching); 
    const currentPath = useSelector(state=>state.settings.currentPath); 

    return (
        <>
        {isFetching ? ('') : ( 
        <Stack spacing={2}>
            <Pagination count={totalPages} 
                    color="pagination"                             
                    page={parseInt(location.search?.split('=')[1] || 1)}  
                    // siblingCount={0}                                   
                    onChange={(event, p) => {dispatch({type:'SET_PAGE', payload: p}); }}
                    sx={{marginY: 3, marginX: 'auto' }}
                    renderItem={
                        (item) =>(           
                        <PaginationItem                                     
                            component={NavLink}            
                            to={`${currentPath}${item.page}`}                                             
                            {...item}
                            />   
                        )
                    }
            />                               
            </Stack>
            )}            
        </>
         );
    };