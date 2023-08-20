import { Grid, Typography } from '@mui/material';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from 'react-router-dom';

import pic1 from '../../images/istfuld.jpeg'; 
import pic2 from '../../images/vstrechni.jpeg'; 
import title1 from '../../images/istfuld_title.png';
import title2 from '../../images/vstrechni_title.png';

export const Hero = styled.div`
                  position: relative;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 70vh;
                  overflow: hidden; 
                  transition: .3s;
                  color: #fff;
                  z-index: 1;
                  background-color: #5e449f;
                  border-radius: 15px;
                  /* &::before {                     
                    content: "";
                    position: absolute;
                    bottom: -100%;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    transition: 0.3s;                        
                    };      
                  &:hover::before {
                    bottom: 0;        
                    };             */
                    `;



                export const HeroImage = styled.img`
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  object-fit: fill;
                  transition: .3s;
                  z-index: 10;
                  `;
                export const HeroImageTitle = styled.img`
                position: absolute;
                top: ${(props)=>( props.top === undefined ? '18vh' : props.top)};
                left: 3vw;
                width: calc(40% + 25.6px);
                transition: .3s;
                z-index: 20;
                outline: none;
                background-color: transparent;
                `;

                export const HeroImageSubTitle = styled.p`
                position: absolute;
                top: 50vh;
                left: 3vw;
                width: calc(40% + 25.6px);
                color: ${(props)=>(props.color === 'dark' ? '#ffffff' : '#000000')};
                font-size: 15px;
                font-weight: 500;
                line-height: 22px;
                z-index: 20;                
                `;

                export const HeroButton = styled.div`

                /* background: transparent;
                border: 0;
                font-size: 100%;
                margin: 0;
                outline: 0;
                padding: 0;
                text-decoration: none;
                vertical-align: baseline;     */

                

                position: absolute;
                padding: 8px 30px ;
                background-color: #ffa500;
                border-radius: 10px;
                top: 62vh;
                left: 3vw;
                /* width: calc(40% + 25.6px); */
                /* color: ${(props)=>(props.color === 'dark' ? '#ffffff' : '#000000')}; */
                color: #2e2626;
                /* letter-spacing: 1px; */
                /* font-size: 15px; */
                font-weight: 600;
                /* line-height: 22px; */
                z-index: 20;                
                `;

export const BoxHero = () => {
    const subTitle2 = 'После измены жениха Саша выходит замуж за первого встречного. Мелодрама с Равшаной Курковой';
    const subTitle1 = 'Фанатичный пастор решает изгнать дьявола из одержимой женщины. Хоррор в духе «Ужаса Амитивилля»';
    return (
        <>     
             <Grid container spacing={2}  sx={{mt: 3}} direction="row" alignItems="center" > 
                <Grid item xs={12}>
                    <Swiper  slidesPerView={1}>                   
                          {/* { films1.map((film, index) => ( filterFilm(index, {...film})))} */}
                          <SwiperSlide>
                            <Hero>
                                <HeroImage src={pic1} />
                                <HeroImageTitle src={title1} top="27vh" />
                                <HeroImageSubTitle color="dark" >{subTitle1}</HeroImageSubTitle>
                                <Link to="/films/4751424" sx={{cursor: 'pointer'}}>
                                    <HeroButton>Далее...</HeroButton>
                                </Link>
                            </Hero>
                          </SwiperSlide>
                          <SwiperSlide>
                          <Hero>
                                <HeroImage src={pic2} />
                                <HeroImageTitle src={title2} />
                                <HeroImageSubTitle>{subTitle2}</HeroImageSubTitle>
                                <Link to="/films/1112061" sx={{cursor: 'pointer'}}>
                                    <HeroButton>Далее...</HeroButton>
                                </Link>    
                            </Hero>
                          </SwiperSlide>
                          <SwiperSlide><Hero>3</Hero></SwiperSlide>
                          <SwiperSlide><Hero>4</Hero></SwiperSlide>
                          <SwiperSlide><Hero>5</Hero></SwiperSlide>
                    </Swiper>   
                </Grid>    
             </Grid>               
        </>
      );

};