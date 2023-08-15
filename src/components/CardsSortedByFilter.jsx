import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { CardContentPremier} from './CardContentPremier';
import * as filter from './Filters';



export const CardsSortedByFilter = (props) => {

    const {filterInfo} = props;
    const films = useSelector(state=>state.listFilms.films); 

    const films1 = filter.filmsToCountry(films, filterInfo.value);
   

    const filterFilm = (index, {...props}) => {
        return (
        <>
            <SwiperSlide>
                <CardContentPremier key={index} {...props} /> 
            </SwiperSlide>            
        </>
        );       
    };   

    const filmsNotFound = (<Typography sx={{ mt:3, ml:3, fontSize:24, fontWeight: 600 }}>
        Фильмы не найдены...</Typography>);

    return (
        <>
          { films1.length !== 0  ?  
            
            <Grid container spacing={2}  direction="row" alignItems="center" >               
                <Grid item xs={4}>
                    <Typography sx={{ mt:3, ml:3, fontSize:24, fontWeight: 600 }}>
                            {filterInfo.title}</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Swiper  slidesPerView={3}>                   
                          { films1.map((film, index) => ( filterFilm(index, {...film})))}           
                    </Swiper>   
                </Grid>    
            </Grid>                   
        : filmsNotFound } 
        </>
      );
};



