import {Grid } from '@mui/material';

import { Card } from './Card';

export const Cards = (props) => {
  const { films } = props;
  return (
        <Grid container spacing={4} >                   
            {films.map((film, index) => (
             <Grid item key={index} xs={12} sm={4} md={3}> 
                <Card key={index} {...film} />
                {/* <Card key={film.filmId} {...film} /> */}
             </Grid> 
            ))}                   
        </Grid>
  );
};

// {Array.from(Array(6)).map((_, index) => (
//   <Grid item xs={2} sm={4} md={4} key={index}>
//     <Item>xs=2</Item>
//   </Grid>
// ))}