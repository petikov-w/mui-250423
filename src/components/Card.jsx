import {CardMedia, Box, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const CardBox = styled(Box)`    
    :hover {  
      transition: 0.8s;
      transform: scale(1.1);     
      box-shadow: none;
  }
`;
const Rating = styled(Box)`
     ${props => {
        if (props.rating >= 8 && props.rating <= 10) return `            
        background-color: #17b70e;            
        `;
        if (props.rating >= 6 && props.rating < 8) return `            
        background-color: #ada8a8;
        `;
        if (props.rating < 6) return `            
        background-color: #d71717;
        `;
      }} 
    padding: 0 10px;
    position: absolute;
    border-radius: 15px;
    z-index: 10;
    top: 10px;
    left: -10px;    
`;

const FilmLength = styled(Box)`
    background-color: #ada8a8;      
    padding: 0 10px;
    position: absolute;
    border-radius: 15px;
    z-index: 10;
    bottom: 0;
    right: 0;    
`;

export const Card = (props, bg) => {
    // const {filmId, nameRu, year, posterUrl} = props;
    const {filmId, filmLength, posterUrl, rating} = props;
       
    return (
        <>         
           <Link to={`/films/${filmId}`} sx={{cursor: 'pointer'}}>    
             <CardBox sx={{ position: 'relative', zIndex: 1 }}>
                  <CardMedia                  
                    component="img"                    
                    height="350"
                    image={posterUrl}                    
                    alt="poster"
                    sx={{ borderRadius: 2, objectFit: 'fill', minWidth: '210px' ,maxWidth: '230px', 
                          boxShadow: '4px 4px 16px 0px rgba(34, 60, 80, 0.2)'}} 
                  />
                 <Rating rating={rating}>
                    <Typography variant="rating">{rating}</Typography>
                 </Rating>
                 <FilmLength>
                    <Typography variant="rating">{filmLength}</Typography>
                 </FilmLength>
             </CardBox>       
                
            </Link>          
        </>     
    );
  };

