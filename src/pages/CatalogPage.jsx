import { useState, useEffect } from 'react';
import { Link as NavLink, useSearchParams} from 'react-router-dom';

import {Stack, Container, Pagination, PaginationItem, Typography} from '@mui/material';

import {Cards} from '../components/Cards';
import {api_query} from '../components/Api';

 
export const CatalogPage = (props) => {     

    const [searchParams] = useSearchParams();
    const [films, setFilms] = useState([]); 
    const [page, setPage] = useState( parseInt(searchParams.get('page') || 1)); // текущая страница
    const [pagesCount, setPagesCount ] = useState(0); // общее количество страниц
   
    const handleChange = (event, p) => { setPage(p); };

   
   useEffect(()=>{api_query(page).then((data) => {setFilms(data.films);
                                                  setPagesCount(data.pagesCount); 
                                                  });}, []);

   useEffect(()=>{api_query(page).then((data) => {setFilms(data.films);
                                                  setPagesCount(data.pagesCount);                                                         
                                                  });}, [page]);
                                                 

    return (
        <>
        {/* <Container maxWidth="lg"> */}
            {/* <Helmet>
                <title>Cinema Box - Каталог</title>
            </Helmet> */}
            <Stack spacing={2}>
                    <Pagination count={pagesCount} 
                            color="pagination"                             
                            page={page}  
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
                                     to={`/films?page=${item.page}`}
                                     {...item}
                                     />   
                                )
                            }
                />                               
            </Stack>
            {films.length ? (<Cards films={films} />) 
                                    : (<h3>Загрузка...</h3>)}    
            {/* </Container> */}

        </>
           
    );
};

