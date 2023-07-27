import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

import { CardContent } from './CardContent';

export const CardsU = () => {
  
  const films = useSelector(state=>state.listFilms.films); 

  return (
    <Grid container  direction="row">
        <Grid container spacing={3}  direction="row" >    
            { films.length !== 0  ?  films.map((film, index) => (
             <Grid item key={index} xs={6} sm={4} md={2.4} > 
                <CardContent key={index} {...film} />
             </Grid> 
            )) : <p>Фильмы не найдены...</p>  
          }               
        </Grid>
    </Grid>
  );
};

