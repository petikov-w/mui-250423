import {Rating, Chip, Box,  Tooltip, Grid, Typography} from '@mui/material';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

import {Card, Poster, PosterImage, Details, 
        DetailTitle, DetailYear, DetailPremier, DetailRating, DetailCountries} from '../styles/CardContent.styled';
export const CardContent = (props) => {
    const {filmId, kinopoiskId, posterUrl, nameRu, year, premiereRu, rating, countries, filmLength} = props;
    const currentPage = useSelector(state=>state.settings.currentPage); 
    const allowedFilmkId = ['top'];
    const allowedKinopoiskId = ['premier','serial','mult'];

    let linkFilm = '';    
    if (allowedFilmkId.includes(currentPage)) { linkFilm = `/films/${filmId}`; }    
    if ( allowedKinopoiskId.includes(currentPage)) { linkFilm = `/films/${kinopoiskId}`; }   
    // const sjs = (currentPage !== 'premier' ? <Rating name="read-only" value={8.6} precision={0.5} readOnly /> : <></>);
         
    return (
        <>         
           <Link to={linkFilm} sx={{cursor: 'pointer'}}>             
            <Card>
                  <Poster>
                    <PosterImage src={posterUrl} alt="poster"/>
                  </Poster>                                    
                  <Details>
                    <DetailTitle>{nameRu}</DetailTitle>
                    <Tooltip title="Год выхода фильма на экраны" placement="left" arrow>
                      <DetailYear>{year}&nbsp;&nbsp;</DetailYear>
                    </Tooltip>
                    {currentPage === 'premier' ?
                    <Tooltip title="Дата премьеры фильма в России" placement="right" arrow>
                      <DetailPremier>&nbsp;&nbsp;{premiereRu}</DetailPremier>
                    </Tooltip>  : <></>}
                    {currentPage !== 'premier' ?
                    <Tooltip title="Рейтинг фильма" placement="left" arrow>
                    <Box display="flex" alignItems="center" sx={{mt: -1.7 }}>
                      <Rating  name="read-only" size="small" value={rating*0.4} readOnly />
                      <DetailRating>{rating} / 10</DetailRating>
                    </Box></Tooltip> : <></>}
                    <Grid container spacing={1}  direction="row" sx={{mt: 1}}>
                      { countries.length !== 0  ? countries.map((item, index) => (
                      <Grid item key={index}  > 
                        <DetailCountries label={<Typography fontSize={12}                                                     
                                                            color="#605b5b"
                                                            fontWeight={600}>{item.country}
                                                </Typography>} sx={{border: '3px solid #FFA500' }}
                        color="chips" size="small" />
                      </Grid>
                      )) : <></>}  
                    </Grid>
                                 
                  {/* <Grid container spacing={3}  direction="row" >    
                      { films.length !== 0  ?  films.map((film, index) => (
                      <Grid item key={index} xs={6} sm={4} md={2.4} > 
                          <CardContent key={index} {...film} />
                      </Grid> 
                      )) : <p>Фильмы не найдены...</p>  
                    }               
                  </Grid> */}
                  </Details>                 
            </Card>
          </Link>          
        </>     
    );
  };


  // <FilmLength>
  // <Typography variant="rating">{filmLength}</Typography>
  // </FilmLength>