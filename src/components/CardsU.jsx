import {Grid, Autocomplete, TextField, Stack } from '@mui/material';
import { useContext, useState, useEffect, useMemo } from 'react';

// import { Card2 } from './Card2';
import { CardU } from './CardU';
import {Genre} from './Context';

const genres2 =['Боевик','Драма','Комедия','Фентази','Ужасы', 'Документальный'];
const countries =['СССР','Россия','США','Франция','Германия'];

export const CardsU = (props) => {

  const { films, typePage, genres } = props;

  const widthPage = typePage !== 'premier' ? '80%' : '100%'; 
  const widthLg = typePage !== 'premier' ?  3 : 2.4; 

  const [genre, setGenre] = useContext(Genre);
  const [value,setValue]=useState({});


   const defprops = {
        options: genres,
        getOptionLabel: (options) => options.genre,
    }
    const getdata = (data) => {
        setValue(data);
        setGenre(data);
        console.log('value :>> ', value);
        console.log(data.id);
        console.log(data.genre);
    }

    useEffect(() => {
                      console.log('value :>> ', value);
                    }, [value]);


  console.log('genres :>> ', genres);

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
                  {...defprops}
                  renderInput={(params)=><TextField {...params} label="Жанры" />}                  
                  onChange={(event, value) => setValue(value)}
                
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

