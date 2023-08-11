import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { CardContent } from './CardContent';
import { CardContentPremier} from './CardContentPremier';
import * as filter from './Filters';


export const CardsU = () => {
  
  const films = useSelector(state=>state.listFilms.films); 
  const currentPage = useSelector(state=>state.settings.currentPage);


  // console.log('films-***:>> ',  filter.filmsToCountryAndGenre(films, 'Франция', 'мультфильм'));

  // const filmsU = filmsToCountry(films, 'Россия');
  const filmsUF = filter.filmsToCountryAndGenre(films, 'Франция', 'мультфильм');
  const filmsU = currentPage === 'premier' ? filmsUF : films;

  const filterFilm = (index, {...props}) => {    
    console.log('---- ', {...props});
    <>
        <Typography sx={{ mt:3, ml:3, fontSize:24, fontWeight: 600 }}>
                              Фильмы не найдены...</Typography>
    </>
    
    // <Swiper
    //   spaceBetween={50}
    //   slidesPerView={2}
    //   // onSlideChange={() => console.log('slide change')}
    //   // onSwiper={(swiper) => console.log(swiper)}
    // >
    //     <SwiperSlide>
    //                 {/* <CardContentPremier key={index} {...film} /> */}
                  
    //                 <CardContentPremier key={index} {...props} />
    //                 <Typography sx={{ mt:3, ml:3, fontSize:24, fontWeight: 600 }}>
    //                       Фильмы не найдены...</Typography>
                    
    //      </SwiperSlide>    
    //  </Swiper>;       
};

// filterFilm(index, {...film})



const Film = (index, {...props}) => {
  <Grid item key={index} xs={6} sm={4} md={2.4} > 
  <CardContentPremier key={index} {...props} />                            
</Grid> ;
};


  const filmsNotFound = (<Typography sx={{ mt:3, ml:3, fontSize:24, fontWeight: 600 }}>
                          Фильмы не найдены...</Typography>);
  
  console.log('filmsU :>> ', filmsU);
   
  return (
    <>
    
        

    <Grid container  direction="row">
        <Grid container spacing={3}  direction="row" >    
            {/* { films.length !== 0  ?  films.map((film, index) => ( */}
            { filmsU.length !== 0  ?  filmsU.map((film, index) => (
                  currentPage === 'premier' ? <CardContentPremier key={index} {...film} /> :
                  Film(index, {...film})
                  // <Grid item key={index} xs={6} sm={4} md={2.4} > 
                  //     <CardContentPremier key={index} {...film} />                            
                  // </Grid> 
            )) : filmsNotFound  
          }               
        </Grid>
    </Grid> 
    
       
    </>
  );
};

