import { useState, useEffect } from 'react';
import { Link as NavLink, useSearchParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {Stack, Pagination, PaginationItem} from '@mui/material';

import { CardsU } from './CardsU';



// import {api_query} from '../components/Api';
// const requiredGenres = ['драма','боевик','мультфильм','военный','документальный'];

// const allowedPages = ['','','','',''];
const allowedPagesShowPagination = ['top','serial','mult'];

export const ListCardsU = (props) => { 

    const { typePage, path } = props;

    const genre_rx = useSelector(state => state.selectedGenre.genre);
    const country_rx = useSelector(state => state.selectedCountrie.countrie);
    const listCountries = useSelector(state => state.listCountries);
                                                 

    const [searchParams] = useSearchParams();
    const [films, setFilms] = useState([]); 
    const [serials, setSerials] = useState([]); 
    const [mults, setMults] = useState([]); 
    // const [genre, setGenre] = useContext(Genre);

    const [genres, setGenres] = useState([]);
    const [countrys, setCountrys] = useState([]);
    // const [filterGenres, setFilterGenres] = useState([]);

    // const filteredGenres = genres.filter((item) => requiredGenres.includes(item.genre));
    
    const [page, setPage] = useState( parseInt(searchParams.get('page') || 1)); // текущая страница
    const [pagesCount, setPagesCount ] = useState(0); // общее количество страниц
    const handleChange = (event, p) => { setPage(p); };
    const dispatch = useDispatch();
    //const dispatch_country_rx = useDispatch();

    let ssd = '';

    if (typePage === 'top') { ssd = `${process.env.REACT_APP_API_TOP_PAGE}` + page};
    if (typePage === 'premier') { ssd = `${process.env.REACT_APP_API_PREMIERS}`};      
    if (typePage === 'serial') { ssd = `${process.env.REACT_APP_API_SERIALS}` + page};      
    if (typePage === 'mult') { ssd = `${process.env.REACT_APP_API_MULTS}` + page};     
    
    
    useEffect(() => {
        // console.log('genre_rx+ :>> ', genre_rx);
        // console.log('country_rx+ :>> ', country_rx);
        console.log('listCountries +++ :>> ', listCountries);
        console.log('genres +++ :>> ', genres);

    }, [listCountries]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_FILTERS}`, {
            headers: { 'Content-Type': 'application/json', 'X-API-KEY': `${process.env.REACT_APP_API_KEY}`}})       
            .then((responce) => responce.json())     
            .then(data =>{ setGenres(data.genres);
                           setCountrys(data.countries)});
           dispatch({type:'UPDATE_GENRE', payload: {}}); 
           dispatch({type:'UPDATE_COUNTRIE', payload: {}}); 
        //    dispatch({type:'SET_LIST_COUNTRYS', payload: {}}); 
           dispatch({type:'CLICK'}); 
                           
    }, []);
  
    useEffect(()=>{fetch( ssd , {headers: { 'Content-Type': 'application/json', 'X-API-KEY': `${process.env.REACT_APP_API_KEY}` },
    }).then((responce) => responce.json()).then((data) => {  if (typePage === 'top') {  
                                                                    setFilms(data.films);
                                                                    setPagesCount(data.pagesCount);  
                                                                }
                                                                if (typePage === 'serial') {
                                                                    setSerials(data.items); 
                                                                    setPagesCount(data.totalPages); 
                                                                }    
                                                                if (typePage === 'mult') {
                                                                    setMults(data.items); 
                                                                    setPagesCount(data.totalPages); 
                                                                }    
                                                                if (typePage === 'premier') {
                                                                    setFilms(data.items); 
                                                                }    
                                                    });}, [page]);

                                            
    let sf;
 
    if (typePage === 'top' || typePage === 'premier') {
       sf = films.length ? (<CardsU films={films} typePage={typePage} genres={genres} countrys={listCountries}/>) : (<h3>Загрузка...</h3>); 
    }       
          
    if (typePage === 'serial') {
       sf = serials.length ? (<CardsU films={serials} typePage={typePage} genres={genres} countrys={listCountries} />) 
                              : (<h3>Загрузка...</h3>); 
    }                                      
                        
    if (typePage === 'mult') {
        sf = mults.length ? (<CardsU films={mults} typePage={typePage} genres={genres} countrys={listCountries} />) 
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
