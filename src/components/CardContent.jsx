import {Rating, Typography, Box,  Stack} from '@mui/material';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

import {Card, Poster, PosterImage, Details, 
        DetailTitle, DetailYear, DetailPremier, DetailRating} from '../styles/CardContent.styled';
export const CardContent = (props) => {
    const {filmId, kinopoiskId, posterUrl, nameRu, year, premiereRu, rating, filmLength} = props;
    const currentPage = useSelector(state=>state.settings.currentPage); 
    const allowedFilmkId = ['top'];
    const allowedKinopoiskId = ['premier','serial','mult'];

    let linkFilm = '';    
    if (allowedFilmkId.includes(currentPage)) { linkFilm = `/films/${filmId}`; }    
    if ( allowedKinopoiskId.includes(currentPage)) { linkFilm = `/films/${kinopoiskId}`; }   

         
    return (
        <>         
           <Link to={linkFilm} sx={{cursor: 'pointer'}}>             
            <Card>
                  <Poster>
                    <PosterImage src={posterUrl} alt="poster"/>
                  </Poster>                                    
                  <Details>
                    <DetailTitle>{nameRu}</DetailTitle>
                    <DetailYear>{year}&nbsp;&nbsp;</DetailYear>
                    <DetailPremier>&nbsp;&nbsp;{premiereRu}</DetailPremier>
                    <Box display="flex" alignItems="center" sx={{mt: -1.4}}>
                      <Rating  name="read-only" size="small" value={rating*0.4} readOnly />
                      <DetailRating>{rating} / 10</DetailRating>
                    </Box>
                    
                  </Details>                 
            </Card>
          </Link>          
        </>     
    );
  };


  // <FilmLength>
  // <Typography variant="rating">{filmLength}</Typography>
  // </FilmLength>