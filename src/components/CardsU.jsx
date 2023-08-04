import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

import { CardContent } from './CardContent';
import { CardContentPremier} from './CardContentPremier';

export const CardsU = () => {
  
  const films = useSelector(state=>state.listFilms.films); 


  const filmsToCountry = (films, country) => { 
    let result=[];
    for ( const film of films) {
      for (const item of film.countries) {
        if(item.country === country) result.push(film);
      }    

    };
    return result;
  };  

  const filmsToCountryAndGenre = (films, country, genre) => { 
    let result=[];
   
    for ( const film of films) {
       let isCountry = false;
       let isGenre = false;
      for (const item of film.countries) {
        if(item.country === country) isCountry=true;
      }    
      for (const item of film.genres) {
        if(item.genre === genre) isGenre=true;
      }     
      if (isCountry && isGenre) result.push(film);     
    };
    return result;
  };  

  console.log('films-***:>> ',  filmsToCountryAndGenre(films, 'Франция', 'мультфильм'));

  // const filmsU = filmsToCountry(films, 'Россия');
  const filmsU = filmsToCountryAndGenre(films, 'Франция', 'мультфильм');

  return (
    <Grid container  direction="row">
        <Grid container spacing={3}  direction="row" >    
            {/* { films.length !== 0  ?  films.map((film, index) => ( */}
            { filmsU.length !== 0  ?  filmsU.map((film, index) => (
             <Grid item key={index} xs={6} sm={4} md={2.4} > 
                <CardContentPremier key={index} {...film} />
                {/* <CardContent key={index} {...film} /> */}
             </Grid> 
            )) : <p>Фильмы не найдены...</p>  
          }               
        </Grid>
    </Grid>
  );
};

