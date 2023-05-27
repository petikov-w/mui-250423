import {Grid } from '@mui/material';

import { Card } from './Card';

export const Cards = (props) => {
  const { films } = props;
  return (
        <Grid container spacing={3}  direction="row" justifyContent="center">                   
            {films.map((film, index) => (
             <Grid item key={index} xs={12} sm={4} md={3} lg={2.4}> 
                <Card key={index} {...film} />
                {/* <Card key={film.filmId} {...film} /> */}
             </Grid> 
            ))}                   
        </Grid>
  );
};

