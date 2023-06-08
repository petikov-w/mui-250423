import { useState, useEffect } from 'react';
import { Link as NavLink, useSearchParams} from 'react-router-dom';

import {Stack, Pagination, PaginationItem} from '@mui/material';

import { CardsU } from './CardsU';
// import {api_query} from '../components/Api';

export const ListCardsU = (props) => { 

    const [searchParams] = useSearchParams();
    const [films, setFilms] = useState([]); 
    const [page, setPage] = useState( parseInt(searchParams.get('page') || 1)); // текущая страница
    const [pagesCount, setPagesCount ] = useState(0); // общее количество страниц
    const handleChange = (event, p) => { setPage(p); };

  
    useEffect(()=>{fetch(props.typePage === 'premier' ? `${process.env.REACT_APP_API_PREMIERS}` 
                                                        : `${process.env.REACT_APP_API_TOP_PAGE}` + page
        , {headers: { 'Content-Type': 'application/json', 'X-API-KEY': `${process.env.REACT_APP_API_KEY}` },
    }).then((responce) => responce.json()).then((data) => {  if (props.typePage === 'top') {
                                                                    setFilms(data.films);
                                                                    setPagesCount(data.pagesCount);  
                                                                }
                                                                if (props.typePage === 'premier') {
                                                                    setFilms(data.items); 
                                                                }    
                                                                console.log('data :>> ', data);       
                                                    });}, [page]);

                                                    

    return (
        <>
            {/* <Helmet>
                <title>Cinema Box - Главная</title>
            </Helmet> */}
            
            { props.typePage === 'top' 
                   ? ( 
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
                                            to={`${props.path}${item.page}`}
                                            //  to={`${pathPage}${item.page}`}
                                            //  to={`/films?page=${item.page}`}
                                            {...item}
                                            />   
                                        )
                                    }
                        />                               
                        </Stack>
                     )
                   : ('')}              
            
             
            {films.length ? (<CardsU films={films} typePage={props.typePage} />) 
                                    : (<h3>Загрузка...</h3>)}         
        </>
           
    );
};
