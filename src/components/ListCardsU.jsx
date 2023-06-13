import { useState, useEffect } from 'react';
import { Link as NavLink, useSearchParams} from 'react-router-dom';

import {Stack, Pagination, PaginationItem} from '@mui/material';

import { CardsU } from './CardsU';
// import {api_query} from '../components/Api';

const requiredGenres = ['драма','боевик','мультфильм','военный','документальный'];

export const ListCardsU = (props) => { 

    const [searchParams] = useSearchParams();
    const [films, setFilms] = useState([]); 
    const [serials, setSerials] = useState([]); 
    const [mults, setMults] = useState([]); 

    const [genres, setGenres] = useState([]);
    const [countries, setCountries] = useState([]);
    const [filterGenres, setFilterGenres] = useState([]);

    const filteredGenres = genres.filter((item) => requiredGenres.includes(item.genre));
    
    const [page, setPage] = useState( parseInt(searchParams.get('page') || 1)); // текущая страница
    const [pagesCount, setPagesCount ] = useState(0); // общее количество страниц
    const handleChange = (event, p) => { setPage(p); };
    let ssd = '';

    if (props.typePage === 'top') { ssd = `${process.env.REACT_APP_API_TOP_PAGE}` + page};
    if (props.typePage === 'premier') { ssd = `${process.env.REACT_APP_API_PREMIERS}`};      
    if (props.typePage === 'serial') { ssd = `${process.env.REACT_APP_API_SERIALS}` + page};      
    if (props.typePage === 'mult') { ssd = `${process.env.REACT_APP_API_MULTS}` + page};      

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_FILTERS}`, {
            headers: { 'Content-Type': 'application/json', 'X-API-KEY': `${process.env.REACT_APP_API_KEY}`}})       
            .then((responce) => responce.json())     
            .then(data =>{ setGenres(data.genres);
                           setCountries(data.countries)});
    }, []);
  
    useEffect(()=>{fetch( ssd , {headers: { 'Content-Type': 'application/json', 'X-API-KEY': `${process.env.REACT_APP_API_KEY}` },
    }).then((responce) => responce.json()).then((data) => {  if (props.typePage === 'top') {  
                                                                    setFilms(data.films);
                                                                    setPagesCount(data.pagesCount);  
                                                                }
                                                                if (props.typePage === 'serial') {
                                                                    setSerials(data.items); 
                                                                    setPagesCount(data.totalPages); 
                                                                }    
                                                                if (props.typePage === 'mult') {
                                                                    setMults(data.items); 
                                                                    setPagesCount(data.totalPages); 
                                                                }    
                                                                if (props.typePage === 'premier') {
                                                                    setFilms(data.items); 
                                                                }    
                                                                console.log('data :>> ', data);       
                                                    });}, [page]);

    // console.log('page :>> ', page);       
      console.log('genres :>> ', genres);
    console.log('countries :>> ', countries);
    console.log('filteredGenres :>> ', filteredGenres);                                            

      let sf;
 
    if (props.typePage === 'top' || props.typePage === 'premier') {
       sf = films.length ? (<CardsU films={films} typePage={props.typePage} />) : (<h3>Загрузка...</h3>); 
    }       
          
    if (props.typePage === 'serial') {
       sf = serials.length ? (<CardsU films={serials} typePage={props.typePage} />) : (<h3>Загрузка...</h3>); 
    }                                      
                        
    if (props.typePage === 'mult') {
        sf = mults.length ? (<CardsU films={mults} typePage={props.typePage} />) : (<h3>Загрузка...</h3>); 
     }            

    return (
        <>
            {/* <Helmet>
                <title>Cinema Box - Главная</title>
            </Helmet> */}
            
            { props.typePage === 'top' || props.typePage === 'serial' || props.typePage === 'mult'
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
                                            {...item}
                                            />   
                                        )
                                    }
                        />                               
                        </Stack>
                     )
                   : ('')}   
            {sf}    
        </>
           
    );
};
