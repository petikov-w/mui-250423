import {CardMedia, Box, Typography, Stack} from '@mui/material';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
//import styled from 'styled-components';

export const CardContent_v2 = (props) => {
    const {filmId, kinopoiskId, posterUrl, nameRu, rating, filmLength} = props;
    const currentPage = useSelector(state=>state.settings.currentPage); 
    // const films = useSelector(state=>state.listFilms.films); 
    const allowedFilmkId = ['top'];
    const allowedKinopoiskId = ['premier','serial','mult'];

    let linkFilm = '';    
    if (allowedFilmkId.includes(currentPage)) { linkFilm = `/films/${filmId}`; }    
    if ( allowedKinopoiskId.includes(currentPage)) { linkFilm = `/films/${kinopoiskId}`; }   


    const card = { 
                   position: 'relative', 
                   borderRadius: 2.2,
                   width: '220px',
                   height: '350px',
                   background: '#000',
                   overflow: 'hidden',
                   boxShadow: '0 5px 10px rgba(0, 0, 0, .2)',                  
                 };

    const poster = { 
                    position: 'relative',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden', 
                    '&::before': {
                      // eslint-disable-next-line quotes
                      content: `" "`,
                      position: 'absolute',
                      bottom: '-45%',
                      left: 0,
                      width: '100%',
                      height: '100%',
                      zIndex: 1,
                      transition: '.3s',
                      '&:hover': {
                        bottom: 20,  
                      },
                   },                 
                   };

    const posterImage = { 
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: '.3s',
                          '&:hover': {
                            // увеличение картинки при наведении на карточку 
                            transform: 'scale(1.1)',     
                          },
                        };              
                        
    const details = {
                      position: 'absolute',
                      // bottom: '-100%',
                      bottom: '0%',
                      left: 0,
                      width: '100%',
                      height: 'auto',
                      padding: '1.5em 1.5em 2em',
                      background: '#000a',
                      // прозрачность шторки 
                      backdropFilter: 'blur(16px) saturate(120%)',
                      // скорость наезда шторки 
                      transition: '.3s',
                      color: '#fff',
                      zIndex: 2,
                      '&:hover': {
                        bottom: 20,  
                      },
                    };
        
    return (
        <>         
           <Link to={linkFilm} sx={{cursor: 'pointer'}}>             
            <Box sx={{ ...card }}>
                  <Box sx={{ ...poster }}>
                    <CardMedia  sx={{ ...posterImage }} component="img" image={posterUrl} alt="poster" /> 
                  </Box>                                    
                  <Box sx={{ ...details }}>
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