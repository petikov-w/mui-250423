import {CardMedia, Box, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import { Rating } from './Rating';


const CardBox = styled(Box)`    
    :hover {  
      transition: 0.8s;
      transform: scale(1.1);     
      box-shadow: none;
  }
`;

const BoxZ = styled(Box)`
    padding: 0 10px;
    position: absolute;
    border-radius: 15px;
    z-index: 10;
    bottom: 0;
    left: 0; 
    background-color: rgb(139, 129, 129, 0.7);
    /* display: none; */
  :hover {    
      /* transition: 0.8s; */
      transform: translate(30%, -30%);     
      display: inline;
  }
`;



// const FilmLength = styled(Box)`
//     background-color: #ada8a8;      
//     padding: 0 10px;
//     position: absolute;
//     border-radius: 15px;
//     z-index: 10;
//     bottom: 0;
//     right: 0;    
// `;

export const CardU = (props, bg) => {
    const {filmId, kinopoiskId, posterUrl, rating} = props;
    let linkFilm = '';

    if (props.typePage === 'top') {
        linkFilm = `/films/${filmId}`;
    }

    if (props.typePage === 'premier') {
        linkFilm = `/films/${kinopoiskId}`;
    }
       
    return (
        <>         
           <Link to={linkFilm} sx={{cursor: 'pointer'}}>    
           <Box sx={{ position: 'relative' }}>
            <CardBox >
            {/* <CardBox sx={{ position: 'relative', zIndex: 1 }}> */}
                  <CardMedia                  
                    component="img"                    
                    height="350"
                    image={posterUrl}                    
                    alt="poster"
                    sx={{ borderRadius: 2, objectFit: 'fill', minWidth: '210px' ,maxWidth: '230px', 
                          boxShadow: '4px 4px 16px 0px rgba(34, 60, 80, 0.2)'}} 
                  />
                  <BoxZ>Ghbdtn</BoxZ>
                  { props.typePage === 'top' ? ( <Rating rating={rating} /> ) : ('')}                 
             </CardBox>     
           </Box>
             
                               
            </Link>          
        </>     
    );
  };


  // <FilmLength>
  // <Typography variant="rating">{filmLength}</Typography>
  // </FilmLength>