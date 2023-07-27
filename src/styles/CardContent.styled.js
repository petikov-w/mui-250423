import styled from 'styled-components';

export const Details = styled.div`
                  position: absolute;
                  bottom: -100%;
                  left: 0;
                  width: 100%;
                  height: auto;
                  padding: 0.5rem 0.5rem 1rem;
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

  export const DetailsTitle = styled.h4`
              font-size: 1rem;
              font-weight: 700;
              letter-spacing: 1.2px;
          `;                