import {Grid } from '@mui/material';

// import { Card2 } from './Card2';
import { CardU } from './CardU';

export const CardsU = (props) => {
  const { films } = props;
  return (
        <Grid container spacing={3}  direction="row" justifyContent="center">                   
            {films.map((film, index) => (
             <Grid item key={index} xs={12} sm={4} md={3} lg={2.4}> 
                <CardU key={index} {...film} typePage={props.typePage}/>
             </Grid> 
            ))}                   
        </Grid>
  );
};

