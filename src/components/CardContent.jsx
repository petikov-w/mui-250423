import {CardMedia, Box, Typography, Stack} from '@mui/material';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import { Rating } from './Rating';


// const CardBox = styled(Box)`    
//     :hover {  
//       transition: 0.8s;
//       transform: scale(1.1);     
//       box-shadow: none;
//       /* background-color: rgb(139, 129, 129, 0.7); */
//   }
// `;

const BoxZ = styled(Box)`
    /* padding: 0 10px; */
    position: absolute;
    border-radius: 8px;
    /*  */
    /* z-index: 10; */
    top: 0;
    left: 0; 
    width: 100%;
    height:100%;
  
   
  :hover {       
       
       /* background-color:rgba(0, 0, 0, 0.7); */
       
  }
`;

const TypographyStl = styled(Typography)` 
    display: flex;
    align-items: flex-end;
    justify-content: flex-start; 
    /* padding-left: 0 20px; */
    border-radius: 8px;
    width: 100%;
    height: 100%;
    color: #ffffff;
    opacity: 0;                                     
    transition: all 0.3s ease-in-out;
  :hover {       
      opacity: 1;   
      background-color:rgba(0, 0, 0, 0.7);
    }     
`;

const BoxStl = styled(Box)` 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start; 
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

export const CardContent = (props, bg) => {
    const {filmId, kinopoiskId, posterUrl, nameRu, rating, filmLength} = props;
    const currentPage = useSelector(state=>state.settings.currentPage); 
    // const films = useSelector(state=>state.listFilms.films); 
    const allowedFilmkId = ['top'];
    const allowedKinopoiskId = ['premier','serial','mult'];

    let linkFilm = '';

    
    if (allowedFilmkId.includes(currentPage)) { linkFilm = `/films/${filmId}`; }
    
    if ( allowedKinopoiskId.includes(currentPage)) { linkFilm = `/films/${kinopoiskId}`; }
   
       
    return (
        <>         
          <Link to={linkFilm} sx={{cursor: 'pointer'}}>             
            {/* <CardBox sx={{ position: 'relative', zIndex: 1, borderRadius: 2,
                           boxShadow:' 0 5px 10px rgba(0, 0, 0, .2)' }}> */}
            <Box sx={{ position: 'relative', 
                           zIndex: '1', 
                           width: '220px',
                           height:'350px',
                           borderRadius: 2,
                           overflow: 'hidden',
                           background: '#000',
                           boxShadow:' 0 5px 10px rgba(0, 0, 0, .2)',    
                           '&:hover': {
                             bottom: 0,                    
                           },                          
                           }}>
                  <Box sx={{
                       position: 'relative',
                       top: 0,
                       left: 0,
                       width: '100%',
                       height: '100%',
                       overflow: 'hidden',   
                       '&:hover': {
                         bottom: -20,
                       },                               
                       '&.Mui-selected::before': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-10%',
                        // bottom: '-45%',
                        left: 50,
                        width: '40%',
                        height: '100%',
                        zIndex: 1,
                        transition: '.3s', 
                        '&:hover': {
                          bottom: 0,                     
                         },                    
                       },
                  }}>
                        <CardMedia    
                        position="absolute"             
                        component="img"                    
                        image={posterUrl}                    
                        alt="poster"
                        sx={{ top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill', 
                        transition: '.3s',
                        '&:hover': {
                          transform: 'scale(1.1)',  
                        }}} 
                      />
                  </Box>          
                  
                  <Box sx={{
                    position: 'absolute',
                    // bottom: '-100%',
                    bottom: '30%',
                    left: 0,
                    width: '100%',
                    height: 'auto',
                    padding: '1.5em 1.5em 2em',
                    background: '#000a',
                    /*прозрачность шторки */
                    backdropFilter: 'blur(16px) saturate(120%)',
                    /*скорость наезда шторки */
                    transition: '.3s',
                    color: '#fff',
                    zIndex: 2,
                    '&:hover': {
                       bottom: 20,  
                     },
                  }}
                  >
                    <Typography>{nameRu}</Typography>
                  </Box>
                 
            </Box>       
          </Link>          
        </>     
    );
  };


  // <FilmLength>
  // <Typography variant="rating">{filmLength}</Typography>
  // </FilmLength>