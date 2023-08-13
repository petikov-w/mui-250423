import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { CardContent } from './CardContent';
import { CardContentPremier} from './CardContentPremier';
import * as filter from './Filters';


export const CardsU = () => {
 
  const currentPage = useSelector(state=>state.settings.currentPage);
  const films = useSelector(state=>state.listFilms.films); 

  const filmsUF = filter.filmsToCountry(films, 'Россия');

  const filmsU = currentPage === 'premier' ? filmsUF : films;

  const filterFilm = (index, {...props}) => {    
    // console.log('---- ', {...props});
    return (
      <>
    
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
          {/* <Grid item key={index} >  */}
            <SwiperSlide>
                    <CardContentPremier key={index} {...props} />
            </SwiperSlide>             
          {/* </Grid> */}
        </Swiper>
        
      </>
    );    
  };

  const Film = (index, {...props}) => {
    // console.log('film-index:>> ', index, ' <<  film-props:>> ', {...props} );
    return (
      <>
          <Grid item key={index} xs={6} sm={4} md={2.4} > 
            <CardContent key={index} {...props} />                            
          </Grid>
    </>
    );
  };

  const filmsNotFound = (<Typography sx={{ mt:3, ml:3, fontSize:24, fontWeight: 600 }}>
                          Фильмы не найдены...</Typography>);
  
  // console.log('filmsU :>> ', filmsU);
   
  return (
    <>
      {/* <Grid container  direction="row"> */}
          <Grid container spacing={3}  direction="row" >    
              { filmsU.length !== 0  ?  filmsU.map((film, index) => (
                    currentPage === 'premier' ? filterFilm(index, {...film}) : Film(index, {...film})                 
              )) : filmsNotFound }               
          </Grid>
      {/* </Grid>  */}
    </>
  );
};

