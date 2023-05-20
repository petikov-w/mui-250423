import {Card as Card2, CardMedia} from '@mui/material';
import styled from 'styled-components';

import {CardLink} from '../styles/Link.styled.js';

const CardStl = styled(CardMedia)`
  box-shadow: 4px 4px 16px 0px rgba(34, 60, 80, 0.2); 
:hover {  
    transition: 0.8s;
    transform: scale(1.1);     
    box-shadow: none;
  }
`;

export const Card = (props, bg) => {
    // const {filmId, nameRu, year, posterUrl} = props;
    const {filmId, posterUrl} = props;
       
    return (
        <> 
        
           <CardLink to={`/films/${filmId}`}>           
                <CardStl
                  component="img"                    
                  height="350"
                  image={posterUrl}                    
                  alt="poster"
                  sx={{ borderRadius: 2, objectFit: 'fill', maxWidt: '220px'}}
                />
            </CardLink>          
                
                    
        </>     
    );
  };

