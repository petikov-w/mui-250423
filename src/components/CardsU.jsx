import {Grid, Autocomplete, TextField, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { CardU } from './CardU';

const genres2 =['Боевик','Драма','Комедия','Фентази','Ужасы', 'Документальный'];
const countries =['СССР','Россия','США','Франция','Германия'];

export const CardsU = (props) => {

  
  const dispatch_genre_rx = useDispatch();
  const dispatch_country_rx = useDispatch();
  const { films, typePage, genres, countries } = props;

  const widthPage = typePage !== 'premier' ? '80%' : '100%'; 
  const widthLg = typePage !== 'premier' ?  3 : 2.4; 

  // const [value,setValue]=useState({});

  
    const propsGenres = {
          options: genres,
          getOptionLabel: (options) => options.genre,
    };

    const propsCountries = {
        options: countries,
        getOptionLabel: (options) => options.country,
    };
 
  //  const defprops = {
  //       options: genres,
  //       getOptionLabel: (options) => options.genre,
  //   };
 

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
                  {...propsGenres}
                  renderInput={(params)=><TextField {...params} label="Жанры" />}                  
                  onChange={(event, value) => dispatch_genre_rx({type:'UPDATE_GENRE', payload: value})}
                  // onChange={(event, value) => setValue(value)}
                
              />    
              <Autocomplete sx={{mb: 3 }}
                  {...propsCountries}
                  renderInput={(params)=><TextField {...params} label="Страны" />}
                  onChange={(event, value) => dispatch_country_rx({type:'UPDATE_COUNTRIE', payload: value})}
              />    
          </Stack>                
             
        </Grid>
        )  : ('')}

    </Grid>
      

        
  );
};

