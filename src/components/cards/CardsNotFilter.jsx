import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { CardContent} from './CardContent';


export const CardsNotFilter = () => {

    const films = useSelector(state=>state.listFilms.films); 

    const Film = (index, {...props}) => {
        return (
            <>
                {/* <Grid item key={index} xs={6} sm={4} md={2.4} >  */}
                <Grid item key={index} xs={6} sm={3} md={2} > 
                    <CardContent key={index} {...props} />                            
                </Grid>
            </>
        );
    };

    const filmsNotFound = (<Typography sx={{ mt:3, ml:3, fontSize:24, fontWeight: 600 }}>
        Фильмы не найдены...</Typography>);

    return (
        <>
        { films.length !== 0  ?              
            <Grid container spacing={3}  direction="row" > 
               { films.length !== 0  ?  films.map((film, index) => ( Film(index, {...film}))) : filmsNotFound }          
            </Grid>                     
        : filmsNotFound } 
        </>
      );
};

