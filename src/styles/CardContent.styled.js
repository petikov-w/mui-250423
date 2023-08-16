import { Chip } from '@mui/material';
import styled from 'styled-components';

export const Details = styled.div`
                  position: absolute;
                  bottom: -100%;
                  left: 0;
                  width: 100%;
                  height: auto;
                  padding: 0 20px 30px;
                  background: #000a;
                  // прозрачность шторки 
                  backdrop-filter:  blur(16px) saturate(120%);
                  // скорость наезда шторки 
                  transition: .3s;
                  color: #fff;
                  z-index: 2;                
                  `;

export const PosterImage = styled.img`
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  object-fit: fill;
                  transition: .3s;
                  `;

export const Poster = styled.div`
                  position: relative;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  overflow: hidden; 
                  transition: .3s;
                  color: #fff;
                  z-index: 1;
                  &::before {                     
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
                    };            
                    `;

export const Card = styled.div`
                  position: relative;
                  border-radius: 18px;
                  width: 220px;
                  height: 350px;
                  background: #fff;
                  overflow: hidden;
                  box-shadow: '0 5px 10px rgba(0, 0, 0, .2)'; 
                      &:hover ${Details} {  
                        bottom: 0;
                      }
                      &:hover ${PosterImage} {  
                        transform: scale(1.2);
                      } 
                `;

export const CardF = styled.div`
                  position: relative;
                  border-radius: 18px;
                  width: 170px;
                  height: 260px;
                  background: #fff;
                  overflow: hidden;
                  box-shadow: '0 5px 10px rgba(0, 0, 0, .2)'; 
                      &:hover ${Details} {  
                        bottom: 0;
                      }
                      &:hover ${PosterImage} {  
                        transform: scale(1.2);
                      } 
                `;                

export const DetailTitle = styled.h4`
              font-family: "Inter";
              font-size: 0.95rem;
              font-weight: 600;
              letter-spacing: 1.1px;
              line-height: 1.15rem;
              margin-top: 10px;
              margin-bottom: 10px;
          `;

export const DetailTitleF = styled.h4`
              font-family: "Inter";
              font-size: 0.85rem;
              font-weight: 600;
              letter-spacing: 1.1px;
              line-height: 1.15rem;
              margin-top: 10px;
              margin-bottom: 10px;
              width: 140px;
          `;          

export const DetailYear = styled.h5`
              display: inline;
              font-family: "Inter";
              font-size: 0.8rem;
              font-weight: 600;
              /* letter-spacing: 1.2px; */
              opacity: 0.7;
              &::after {                     
                    content: "•";
                    font-size: 1rem;
                    font-weight: 800;
                    color: yellow;
              }                    
          `;

export const DetailYearF = styled.h5`
              display: inline;
              font-family: "Inter";
              font-size: 0.7rem;
              font-weight: 600;
              /* letter-spacing: 1.2px; */
              opacity: 0.7;
              &::after {                     
                    content: "•";
                    font-size: 1rem;
                    font-weight: 800;
                    color: yellow;
              }                    
          `;


export const DetailPremier = styled.h5`
              display: block;
              font-family: "Inter";
              font-size: 0.8rem;
              font-weight: 600;
              opacity: 0.7;            
              margin-top: 10px;     
          `;

export const DetailPremierF = styled.h5`
              display: block;
              font-family: "Inter";
              font-size: 0.7rem;
              font-weight: 600;
              opacity: 0.7;            
              margin-top: 10px;     
          `;          

export const DetailRating = styled.h5`
              display: inline;
              font-family: "Inter";
              font-size: 0.8rem;
              font-weight: 600;
              opacity: 0.7;                           
`;

export const DetailRatingF = styled.h5`
              display: inline;
              font-family: "Inter";
              font-size: 0.7rem;
              font-weight: 600;
              opacity: 0.7;    
        `;      
        
export const DetailDuration = styled.h5`
              display: inline;
              font-family: "Inter";
              font-size: 0.8rem;
              font-weight: 600;
              opacity: 0.7;                           
`;

export const DetailDurationF = styled.h5`
              display: inline;
              font-family: "Inter";
              font-size: 0.7rem;
              font-weight: 600;
              opacity: 0.7;                           
`;

export const DetailCountries = styled(Chip)`
              opacity: 0.8;                                    
`;

          // content: "•";