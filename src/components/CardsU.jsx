import {Grid, Autocomplete, TextField, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { CardU } from './CardU';

export const CardsU = (props) => {
  
  const dispatch = useDispatch();
  const listCountries = useSelector(state => state.listCountries);
  const listGenres = useSelector(state => state.listGenres);

  const { films, typePage } = props;

  const widthPage = typePage !== 'premier' ? '80%' : '100%'; 
  const widthLg = typePage !== 'premier' ?  3 : 2.4; 
    
  return (
    <Grid container  direction="row">
        <Grid container spacing={3}  direction="row"  sx={{ width: widthPage }}>                   
            {films.map((film, index) => (
             <Grid item key={index} xs={12} sm={4} md={3} lg={widthLg}> 
                <CardU key={index} {...film} typePage={props.typePage}/>
             </Grid> 
            ))}                   
    </Grid>
        

    { typePage !== 'premier' ? (
    <Grid  container direction="column" alignItems="center" sx={{ width: '20%', ml: 3, mb: 3 }}>   
      <Stack width={220}>
          <Autocomplete sx={{mb: 2 }}                  
              options={listGenres.genres}
              getOptionLabel= {(options) => options.genre}         
              renderInput={(params)=><TextField {...params} label="Жанр" />}                  
              onChange={(event, value) => dispatch({type:'UPDATE_GENRE', payload: value})}                
          />    
          <Autocomplete sx={{mb: 3 }}
              options={listCountries.countrys}
              getOptionLabel= {(options) => options.country}
              renderInput={(params)=><TextField {...params} label="Страна" />}
              onChange={(event, value) => dispatch({type:'UPDATE_COUNTRIE', payload: value})}
          />    
      </Stack>                
          
    </Grid>
    )  : ('')}

</Grid>
  );
};

