import {Rating} from '@mui/material';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

import {Card, Poster, PosterImage, Details, DetailTitle, DetailYear, DetailPremier} from '../styles/CardContent.styled';
export const CardContent = (props) => {
    const {filmId, kinopoiskId, posterUrl, nameRu, year, premiereRu, rating, filmLength} = props;
    const currentPage = useSelector(state=>state.settings.currentPage); 
    const allowedFilmkId = ['top'];
    const allowedKinopoiskId = ['premier','serial','mult'];

    let linkFilm = '';    
    if (allowedFilmkId.includes(currentPage)) { linkFilm = `/films/${filmId}`; }    
    if ( allowedKinopoiskId.includes(currentPage)) { linkFilm = `/films/${kinopoiskId}`; }   
    const sjs = (currentPage !== 'premier' ? <Rating name="read-only" value={8.6} precision={0.5} readOnly /> : <></>);
         
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
                   {sjs }
                  </Details>                 
            </Card>
          </Link>          
        </>     
    );
  };


  // <FilmLength>
  // <Typography variant="rating">{filmLength}</Typography>
  // </FilmLength>