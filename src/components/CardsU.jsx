import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

import { CardU } from './CardU';
import { FilterSet } from './FilterSet';

export const CardsU = (props) => {
  
  // const { typePage } = props;
  const films = useSelector(state=>state.listFilms.films); 
  const currentPage = useSelector(state=>state.settings.currentPage); 

  const widthPage = currentPage !== 'premier' ? '80%' : '100%'; 
  const widthLg = currentPage !== 'premier' ?  3 : 2.4; 

  // const widthPage = typePage !== 'premier' ? '80%' : '100%'; 
  // const widthLg = typePage !== 'premier' ?  3 : 2.4; 

  
  return (
    <Grid container  direction="row">
        <Grid container spacing={3}  direction="row"  sx={{ width: widthPage }}>    
            { films.length !== 0  ?  films.map((film, index) => (
             <Grid item key={index} xs={12} sm={4} md={3} lg={widthLg}> 
                <CardU key={index} {...film} typePage={props.typePage}/>
             </Grid> 
            )) : <p>Фильмы не найдены...</p>  
          }               
        </Grid>
        <FilterSet />    
        {/* <FilterSet  typePage={typePage}/>     */}
</Grid>
  );
};

