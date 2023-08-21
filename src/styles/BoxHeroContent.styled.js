import styled from 'styled-components';

export const Hero = styled.div`
                  position: relative;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 32rem;
                  overflow: hidden; 
                  transition: .3s;
                  color: #fff;
                  z-index: 1;
                  /* background-color: #5e449f; */
                  border-radius: 10px;           
                  margin: 1rem 0;      
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
                  border-radius: 10px;  
                `;
export const HeroImageTitle = styled.img`
                position: absolute;
                top: ${(props) => (props.top === '' ? '8rem' : props.top)};
                left: 3rem;
                width: calc(40% + 25.6px);
                transition: .3s;
                z-index: 20;
                outline: none;
                background-color: transparent;
                `;

export const HeroImageSubTitle = styled.p`
                position: absolute;
                top: 22rem;
                left: 3rem;
                width: calc(40% + 25.6px);
                color: ${(props) => (props.color === 'dark' ? '#ffffff' : '#000000')};
                font-size: 15px;
                font-weight: 500;
                line-height: 22px;
                z-index: 20;                
                `;

export const HeroButton = styled.div`
                position: absolute;
                padding: 8px 30px ;
                background-color: #ffa500;
                border-radius: 10px;
                top: 27.5rem;
                left: 3rem;                
                color: #2e2626;
                font-weight: 600;
                z-index: 20;                
                `;