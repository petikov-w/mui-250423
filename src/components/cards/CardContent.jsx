import {Rating, Chip, Box,  Tooltip, Grid, Typography} from '@mui/material';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

import {Card, CardF, Poster, PosterImage, Details, 
        DetailTitle, DetailTitleF, DetailYear, DetailYearF, DetailPremier, DetailPremierF,
        DetailRating,DetailRatingF, DetailCountries, DetailDuration, DetailDurationF} from '../../styles/CardContent.styled';

import {formatDuration, formatPremierData} from '../Duration';       


export const CardContent = (props) => {
    const {filmId, kinopoiskId, posterUrl, nameRu, year, duration, 
           premiereRu, rating, countries, ratingKinopoisk, filmLength} = props;
    const currentPage = useSelector(state=>state.settings.currentPage); 
    const allowedFilmkId = ['top'];
    const allowedKinopoiskId = ['premier','serial','mult'];

    // console.log('props :>> ', props);


    let linkFilm = '';    
    if (allowedFilmkId.includes(currentPage)) { linkFilm = `/films/${filmId}`; }    
    if ( allowedKinopoiskId.includes(currentPage)) { linkFilm = `/films/${kinopoiskId}`; }   
        
    const ratingFilm = (currentPage === 'top'
                       ? <><Rating name="read-only" size="small" value={rating} max="1" readOnly />
                         <DetailRatingF>&nbsp;&nbsp;{rating} / 10</DetailRatingF></>
                       : <><Rating name="read-only" size="small" value={ratingKinopoisk} max="1" readOnly />    
                         <DetailRatingF>&nbsp;&nbsp;{ratingKinopoisk} / 10</DetailRatingF></>);
    const durationFilm = (page) => {
                                  if ( page === 'premier') {
                                  return <DetailDurationF>&nbsp;&nbsp;{formatDuration(duration)}&nbsp;&nbsp;</DetailDurationF>;}
                                  if ( page === 'top') 
                                  {return <DetailDurationF>&nbsp;&nbsp;{formatDuration(filmLength)}&nbsp;&nbsp;</DetailDurationF>;}
                                  if ( page === 'serial' || page === 'mult') 
                                  {return <></>;}  
                                };
    
    return (
        <>         
           <Link to={linkFilm} sx={{cursor: 'pointer'}}>             
            <CardF>
                  <Poster>
                    <PosterImage src={posterUrl} alt="poster"/>
                  </Poster>    
                  {/* Краткая детальная информация о фильме отображаемая на шторке */}
                  <Details>
                    {/* Название фильма */}
                    <DetailTitleF>{nameRu}</DetailTitleF>

                    {/* Год выхода фильма на экраны */}
                    <Tooltip title="Год выхода фильма на экраны" placement="left" arrow>
                      <DetailYearF>{year}&nbsp;&nbsp;</DetailYearF>
                    </Tooltip>

                    {/* Продолжительность фильма */}
                    
                    <Tooltip title="Продолжительность фильма" placement="right" arrow> 
                       {durationFilm(currentPage)} 
                    </Tooltip>  

                    {/* Дата премьеры фильма в России (отображается только на странице "Кинопримьеры") */}
                    {currentPage === 'premier' ?
                    <Tooltip title="Дата премьеры фильма в России" placement="left" arrow>
                      <DetailPremierF>{formatPremierData(premiereRu)}</DetailPremierF>
                    </Tooltip>  : <></>}

                    {/* Рейтинг фильма по версии Кинопоиска (отображается на всех страницах,
                       кроме страницы "Кинопримьеры") */}
                    {currentPage !== 'premier' ?
                    <Tooltip title="Рейтинг фильма" placement="left" arrow>
                      <Box display="flex" alignItems="center" sx={{mt: -1.7 }}>
                          { ratingFilm }                     
                      </Box>
                    </Tooltip> : <></>}

                    {/* Список стран учавствовавших в производстве фильма */}
                    <Grid container spacing={1}  direction="row" wrap="wrap" sx={{mt: 1, width: '140px'}}>
                      { countries.length !== 0  ? countries.map((item, index) => (
                      <Grid item key={index}  > 
                        <DetailCountries label={<Typography fontSize={10}                                                     
                                                            color="#605b5b"
                                                            fontWeight={600}>{item.country}
                                                </Typography>} sx={{border: '2px solid #FFA500'}}
                        color="chips" size="small" />
                      </Grid>
                      )) : <></>}  
                    </Grid>
                                 
                
                  </Details>                 
            </CardF>
          </Link>          
        </>     
    );
  };


  // <FilmLength>
  // <Typography variant="rating">{filmLength}</Typography>
  // </FilmLength>