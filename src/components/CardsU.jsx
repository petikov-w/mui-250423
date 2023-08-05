import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { CardContent } from './CardContent';
import { CardContentPremier} from './CardContentPremier';
import * as filter from './Filters';


export const CardsU = () => {
  
  const films = useSelector(state=>state.listFilms.films); 


  console.log('films-***:>> ',  filter.filmsToCountryAndGenre(films, 'Франция', 'мультфильм'));

  // const filmsU = filmsToCountry(films, 'Россия');
  const filmsU = filter.filmsToCountryAndGenre(films, 'США', 'мультфильм');
  // const filmsU = films;

  return (
    <>
     <Swiper
      spaceBetween={50}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        

    <Grid container  direction="row">
        <Grid container spacing={3}  direction="row" >    
            {/* { films.length !== 0  ?  films.map((film, index) => ( */}
            { filmsU.length !== 0  ?  filmsU.map((film, index) => (
             <Grid item key={index} xs={6} sm={4} md={2.4} > 
              <SwiperSlide>
                {/* <CardContentPremier key={index} {...film} /> */}
                <CardContent key={index} {...film} />
              </SwiperSlide>                
             </Grid> 
            )) : <p>Фильмы не найдены...</p>  
          }               
        </Grid>
    </Grid> 
    
    </Swiper>   
    </>
  );
};

