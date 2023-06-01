// import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';

import {Stack, Chip, Grid} from '@mui/material';

const requiredGenres = ['драма','боевик','мультфильм','военный','документальный'];

export const ContactPage = () => { 

    const [genres, setGenres] = useState([]);
    const [countries, setCountries] = useState([]);
    const [filterGenres, setFilterGenres] = useState([]);
    // const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip 3']);
    const handleDelete = (chipToDelete) => {
    //   setChips(genres => genres.filter(genres => genres.genre !== chipToDelete))
    console.log('chipToDelete :>> ', chipToDelete.id);
    };

    // const requiredGenres = ['драма','боевик','мультфильм','военный','документальный'];
    const filteredGenres = genres.filter((item) => requiredGenres.includes(item.genre));

    // const handleDelete = () => {
    //     alert('Авария !!!'); 
    // };


    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_FILTERS}`, {
            headers: { 'Content-Type': 'application/json', 'X-API-KEY': `${process.env.REACT_APP_API_KEY}`}})       
            .then((responce) => responce.json())     
            .then(data =>{ setGenres(data.genres);
                           setCountries(data.countries)});
    }, []);

    useEffect(() => {
       const filter = genres.filter((item) => requiredGenres.includes(item.genre));
       setFilterGenres(filter);
    }, [genres]);
    
    console.log('genres :>> ', genres);
    // console.log('countries :>> ', countries);
    console.log('filteredGenres :>> ', filteredGenres);    

    return (
        <>
            {/* <Helmet>
                <title>Cinema Box - Контакты</title>
            </Helmet> */}
                {/* <h2>Контакты</h2>
                <p>Это страница контактов</p>            */}
            
           
               {/* ======================================================== */}
               <Grid container spacing={1}  direction="row" justifyContent="center">
                    {filterGenres.map((genre, index) => (
                        <Grid item key={index} > 
                            <Chip key={index} label={genre.genre}   onDelete={() => handleDelete(genre)}/>
                        </Grid> 
                    ))}        
               </Grid>
              
               {/* ======================================================== */}






       

        </>
           
    );
};

