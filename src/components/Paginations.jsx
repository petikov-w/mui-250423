import { Link as NavLink, useLocation} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {Stack, Pagination, PaginationItem} from '@mui/material';

export const Paginations = (props) => { 

    const { path } = props;
    const dispatch = useDispatch();
    const location = useLocation();
    const totalPages = useSelector(state=>state.pagination.pagesCount);
    const isFetching = useSelector(state=>state.isFetching.isFetching); 

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
                            to={`${path}${item.page}`}                                             
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