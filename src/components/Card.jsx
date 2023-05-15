import { Card as CardFilm, CardContent, CardMedia, Typography, Paper } from '@mui/material';
import styled from 'styled-components';

import {CardLink} from '../styles/Link.styled.js'

const CardStl = styled(CardMedia)`
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  /* background: url("../images/cinema_sm.png"); */
  /* background-image: url(${props => props.bg}); */
  //background-image: url("mdn_logo_only_color.png");
:hover {  
    transition: 0.8s;
    transform: scale(1.1);     
    box-shadow: none;
  }
`;


export const Card = (props, bg) => {
    const {filmId, nameRu, year, posterUrl} = props;
    const SSS = {
      name: nameRu,
      year: year,
    };
   
    // console.log('++-->>>>>  ', filmId);
    return (
        <>
          {/* <CardStl elevation={6} sx={{ maxWidth: 340, borderRadius: 2}}> */}
             {/* <CardFilm sx={{ maxWidth: 345 }}> */}
                {/* <CardActionArea> <<<-------- Заменить на ссылку (Link) */} 

                {/* =========================================================================== */}

                <CardLink to={`/films/${filmId}`}>
                   <CardStl
                    component="img"                    
                    // height="auto"
                    image={posterUrl}                    
                    alt="poster"
                    sx={{ borderRadius: 2}}
                    />
                </CardLink>
                
                {/* =========================================================================== */}   
                    {/* <CardContent>
                    <Typography gutterBottom variant="body2" component="div">
                        {nameRu}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {year}
                    </Typography>
                    </CardContent> */}
                {/* </CardActionArea> */}
            {/* </CardFilm> */}
          {/* </CardStl>            */}
        </>
    //   <CardLink to={`/films/${filmId}`} state={SSS}>
    //     <CardBox bg={posterUrl} />
    //   </CardLink>      
    );
  };

