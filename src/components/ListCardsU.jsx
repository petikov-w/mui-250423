import { useState, useEffect } from 'react';
import { Link as NavLink, useSearchParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {Stack, Pagination, PaginationItem} from '@mui/material';

import { CardsU } from './CardsU';

// const allowedPages = ['','','','',''];
const allowedPagesShowPagination = ['top','serial','mult'];

export const ListCardsU = (props) => { 

    const filmsPremier = useSelector(state=>state.listFilmsPremier.films);
    const filmsTop = useSelector(state=>state.listFilmsTop.films);
    const filmsSerial = useSelector(state=>state.listFilmsSerial.films);
    const totalPages = useSelector(state=>state.pagination.pagesCount);
    const page1 = useSelector(state=>state.pagination.page);
    const dispatch = useDispatch();

    const { typePage, path } = props;

    const [searchParams] = useSearchParams();
    // const [films, setFilms] = useState([]); 
    // const [serials, setSerials] = useState([]); 
    const [mults, setMults] = useState([]);    
    const [page, setPage] = useState( parseInt(searchParams.get('page') || 1)); // текущая страница
    // const [pagesCount, setPagesCount ] = useState(0); // общее количество страниц
    
    // const handleChange = (event, p) => { dispatch({type:'SET_PAGE', payload: p}); };
    const handleChange = (event, p) => { setPage(p); 
                                         dispatch({type:'SET_PAGE', payload: p});
                                       };
    

    //let ssd = '';

    // if (typePage === 'top') { ssd = `${process.env.REACT_APP_API_TOP_PAGE}` + page};
    // if (typePage === 'serial') { ssd = `${process.env.REACT_APP_API_SERIALS}` + page};      
    // if (typePage === 'mult') { ssd = `${process.env.REACT_APP_API_MULTS}` + page};     
    
     
    // useEffect(()=>{dispatch({type:'FILMS_TOP'})}, [page]);

    // useEffect(()=>{fetch( ssd , {headers: { 'Content-Type': 'application/json', 'X-API-KEY': `${process.env.REACT_APP_API_KEY}` },
    // }).then((responce) => responce.json()).then((data) => {  if (typePage === 'top') {  
    //                                                                 setFilms(data.films);
    //                                                                 setPagesCount(data.pagesCount);  
    //                                                             }
    //                                                             if (typePage === 'serial') {
    //                                                                 setSerials(data.items); 
    //                                                                 setPagesCount(data.totalPages); 
    //                                                             }    
    //                                                             if (typePage === 'mult') {
    //                                                                 setMults(data.items); 
    //                                                                 setPagesCount(data.totalPages); 
    //                                                             }   
    //                                                 });
    //                                             //    dispatch({type:'FILMS_TOP'})
    //                                             }, [page]);

                                            
    let sf;
 
    if (typePage === 'top') {
       sf = filmsTop.length ? (<CardsU films={filmsTop} typePage={typePage} />) : (<h3>Загрузка...</h3>); 
    }       
    
    if (typePage === 'premier') {
       sf = filmsPremier.length ? (<CardsU films={filmsPremier} typePage={typePage} />) : (<h3>Загрузка...</h3>); 
    }       

    if (typePage === 'serial') {
        sf = filmsSerial.length ? (<CardsU films={filmsSerial} typePage={typePage}  />) : (<h3>Загрузка...</h3>);  
    }       
                         
    if (typePage === 'mult') {
        sf = mults.length ? (<CardsU films={mults} typePage={typePage}  />) 
                              : (<h3>Загрузка...</h3>); 
     }    

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
