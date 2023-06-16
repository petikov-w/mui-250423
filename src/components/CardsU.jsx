import {Grid, Autocomplete, TextField, Stack } from '@mui/material';

// import { Card2 } from './Card2';
import { CardU } from './CardU';

const genres =['Боевик','Драма','Комедия','Фентази','Ужасы', 'Документальный'];
const countries =['СССР','Россия','США','Франция','Германия'];

export const CardsU = (props) => {
  const { films } = props;
  return (
    <Grid container  direction="row">

        <Grid container spacing={3}  direction="row" justifyContent="center" sx={{ width: '80%' }}>                   
            {films.map((film, index) => (
             <Grid item key={index} xs={12} sm={4} md={3}> 
             {/* <Grid item key={index} xs={12} sm={4} md={3} lg={2.4}>  */}
                <CardU key={index} {...film} typePage={props.typePage}/>
             </Grid> 
            ))}                   
        </Grid>

        { props.typePage !== 'premier' ? (
        <Grid  container direction="column" alignItems="center" sx={{ width: '20%', ml: 3, mb: 3 }}>   
          <Stack width={220}>
              <Autocomplete sx={{mb: 2 }}
                  options={genres}
                  renderInput={(params)=><TextField {...params} label="Жанры" />}
              />    
              <Autocomplete sx={{mb: 3 }}
                  options={countries}
                  renderInput={(params)=><TextField {...params} label="Страны" />}
              />    
          </Stack>                
             
        </Grid>
        )  : ('')}

    </Grid>
      

        
  );
};

