import {Typography} from '@mui/material';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

import {Card, Poster, PosterImage, Details, DetailsTitle, DetailsYear} from '../styles/CardContent.styled';
export const CardContent = (props) => {
    const {filmId, kinopoiskId, posterUrl, nameRu, year, rating, filmLength} = props;
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
                    <DetailsTitle>{nameRu}</DetailsTitle>
                    <DetailsYear>{year}</DetailsYear>
                  </Details>                 
            </Card>
          </Link>          
        </>     
    );
  };


  // <FilmLength>
  // <Typography variant="rating">{filmLength}</Typography>
  // </FilmLength>