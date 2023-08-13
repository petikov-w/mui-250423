import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { CardContent } from './CardContent';
import { CardContentPremier} from './CardContentPremier';
import * as filter from './Filters';


export const CardsU2 = () => {
 
  const currentPage = useSelector(state=>state.settings.currentPage);
  // const films = useSelector(state=>state.listFilms.films); 

  // const filmsUF = filter.filmsToCountry(films, 'Россия');
  // const filmsUF2 = filter.filmsToCountry(films, 'США');

  // const filmsU = currentPage === 'premier' ? filmsUF : films;

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
  // ------------------------------------- Premier -----------------------------------------------------
  const filterFilm_2 = (index, {...props}) => {
      return (
        <>
            <SwiperSlide>
              <CardContentPremier key={index} {...props} /> 
            </SwiperSlide>            
        </>
      );       
   };   
  
  const FilmPremier = () => {
    const films = useSelector(state=>state.listFilms.films); 

    const filmsUF = filter.filmsToCountry(films, 'Россия');
    const filmsUF2 = filter.filmsToCountry(films, 'США');

    return (
      <>
          { filmsU.length !== 0  ?  
              
              <Grid container spacing={2}  direction="row" alignItems="center" >               
                  <Grid item xs={4}>
                      <Typography sx={{ mt:3, ml:3, fontSize:24, fontWeight: 600 }}>
                              Российские примьеры</Typography>
                  </Grid>
                  <Grid item xs={8}>
                      <Swiper  slidesPerView={3}>                   
                            { filmsUF.map((film, index) => ( filterFilm_2(index, {...film})))}           
                      </Swiper>   
                  </Grid>    
              </Grid>
                  
                     
          : filmsNotFound } 
      </>
    );
  };
  // ------------------------------------------------------------------------------------------------------
  // ------------------------------------- No Premier -----------------------------------------------------

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

  const FilmNotPremier = () => {
    // console.log('film-index:>> ', index, ' <<  film-props:>> ', {...props} );
    const films = useSelector(state=>state.listFilms.films); 
    return (
      <>
        <Grid container spacing={3}  direction="row" > 
          { filmsU.length !== 0  ?  films.map((film, index) => ( Film(index, {...film}))) : filmsNotFound }          
        </Grid>         
      </>
    );
  };
// ----------------------------------------------------------------------------------------------------------

  const filmsNotFound = (<Typography sx={{ mt:3, ml:3, fontSize:24, fontWeight: 600 }}>
                          Фильмы не найдены...</Typography>);
  
  // console.log('filmsU :>> ', filmsU);
   
  return (
    <>     
      {currentPage === 'premier' ? FilmPremier(filmsU) :  FilmNotPremier(filmsU)}      
    </>
  );
};

