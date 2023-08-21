import { Grid, Typography } from '@mui/material';
// import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import {Link} from 'react-router-dom';

import {Hero, HeroImage, HeroImageTitle, HeroImageSubTitle, HeroButton} from '../../styles/BoxHeroContent.styled';

import {HeroList} from './HeroList';


export const BoxHero = () => {
    return (
        <>     
             <Grid container spacing={2}  sx={{mt: 3}} direction="row" alignItems="center" > 
                <Grid item xs={12}>
                    <Swiper  slidesPerView={1} 
                             navigation={true}
                             loop={true}
                             modules={[Autoplay, Navigation]}
                            //  centeredSlides={true}
                             autoplay={{
                               delay: 2500,
                               disableOnInteraction: false,
                             }}
                             >                   
                          { HeroList.map((item, index) => ( 
                          <SwiperSlide>
                            <Hero>
                                <HeroImage src={item.backgroundImage} />
                                <HeroImageTitle src={item.title} top={item.marginTop} />
                                <HeroImageSubTitle color={item.subtitleColor} >{item.subtitle}</HeroImageSubTitle>
                                <Link to={item.idFilm} sx={{cursor: 'pointer'}}>
                                    <HeroButton>Далее...</HeroButton>
                                </Link>
                            </Hero>
                          </SwiperSlide>
                          ))}
                    </Swiper>   
                </Grid>    
             </Grid>               
        </>
      );

};