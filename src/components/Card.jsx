import { Card as CardFilm, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';


export const Card = (props, bg) => {
    const {filmId, nameRu, year, posterUrl} = props;
    const SSS = {
      name: nameRu,
      year: year,
    };
   
    // console.log('++-->>>>>  ', filmId);
    return (
        <>
            <CardFilm sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={posterUrl}
                    alt="poster"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {nameRu}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {year}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </CardFilm>
        </>
    //   <CardLink to={`/films/${filmId}`} state={SSS}>
    //     <CardBox bg={posterUrl} />
    //   </CardLink>      
    );
  };

