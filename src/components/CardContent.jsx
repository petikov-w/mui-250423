import {Rating, Chip, Box,  Tooltip, Grid, Typography} from '@mui/material';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

import {Card, Poster, PosterImage, Details, 
        DetailTitle, DetailYear, DetailPremier, DetailRating, DetailCountries, DetailDuration} from '../styles/CardContent.styled';
export const CardContent = (props) => {
    const {filmId, kinopoiskId, posterUrl, nameRu, year, duration, 
           premiereRu, rating, countries, ratingKinopoisk, filmLength} = props;
    const currentPage = useSelector(state=>state.settings.currentPage); 
    const allowedFilmkId = ['top'];
    const allowedKinopoiskId = ['premier','serial','mult'];

    function padTo2Digits(num) {
      return num.toString().padStart(2, '0');
    }

    function toHoursAndMinutes(totalMinutes) {
      const minutes = totalMinutes % 60;
      const hours = Math.floor(totalMinutes / 60);
    
      return `${hours} ч  ${minutes} мин`;
      // return `${padTo2Digits(hours)}ч ${padTo2Digits(minutes)}мин`;
    }

    function toHoursAndMinutes_2(total) {

      const hm = total.split(':');
    
      return `${Number(hm[0])} ч  ${Number(hm[1])} мин`;
    }

    let linkFilm = '';    
    if (allowedFilmkId.includes(currentPage)) { linkFilm = `/films/${filmId}`; }    
    if ( allowedKinopoiskId.includes(currentPage)) { linkFilm = `/films/${kinopoiskId}`; }   
        
    const ratingFilm = (currentPage === 'top'
                       ? <><Rating name="read-only" size="small" value={rating * 0.4} readOnly />
                         <DetailRating>{rating} / 10</DetailRating></>
                       : <><Rating name="read-only" size="small" value={ratingKinopoisk * 0.4} readOnly />    
                         <DetailRating>{ratingKinopoisk} / 10</DetailRating></>);
    const durationFilm = (page) => {
                                  if ( page === 'premier') {
                                  return <DetailDuration>&nbsp;&nbsp;{toHoursAndMinutes(duration)}&nbsp;&nbsp;</DetailDuration>;}
                                  if ( page === 'top') 
                                  {return <DetailDuration>&nbsp;&nbsp;{toHoursAndMinutes_2(filmLength)}&nbsp;&nbsp;</DetailDuration>;}
                                  if ( page === 'serial' || page === 'mult') 
                                  {return <></>;}  
                                };
    
    

 
    return (
        <>         
           <Link to={linkFilm} sx={{cursor: 'pointer'}}>             
            <Card>
                  <Poster>
                    <PosterImage src={posterUrl} alt="poster"/>
                  </Poster>    
                  {/* Краткая детальная информация о фильме отображаемая на шторке */}
                  <Details>
                    {/* Название фильма */}
                    <DetailTitle>{nameRu}</DetailTitle>

                    {/* Год выхода фильма на экраны */}
                    <Tooltip title="Год выхода фильма на экраны" placement="left" arrow>
                      <DetailYear>{year}&nbsp;&nbsp;</DetailYear>
                    </Tooltip>

                    {/* Продолжительность фильма */}
                    
                    <Tooltip title="Продолжительность фильма" placement="right" arrow> 
                       {durationFilm(currentPage)} 
                    </Tooltip>  

                    {/* Дата премьеры фильма в России (отображается только на странице "Кинопримьеры") */}
                    {currentPage === 'premier' ?
                    <Tooltip title="Дата премьеры фильма в России" placement="left" arrow>
                      <DetailPremier>{premiereRu}</DetailPremier>
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
                                 
                
                  </Details>                 
            </Card>
          </Link>          
        </>     
    );
  };


  // <FilmLength>
  // <Typography variant="rating">{filmLength}</Typography>
  // </FilmLength>