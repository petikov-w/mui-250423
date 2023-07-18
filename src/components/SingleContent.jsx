import React, { Suspense } from 'react';
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {Box,  Button, Typography, CardMedia, Stack} from '@mui/material';

export const SingleContent = () => {
    
    const navigate = useNavigate();
    const goBack = () => navigate(-1);   
    // const preLoader = '';
    // const preLoader = <h3>Загрузка-вах...</h3>;
    const no_description = 'Описание отсутствует';
    
    localStorage.setItem('isSingle', true);
    const single = useSelector(state=>state.single);


//     <Suspense fallback={<Loading />}>
//     <Albums />
// </Suspense>
    return (
        <>         
                <Typography variant="h4" sx={{mb:3}}>
                    {single.film.nameRu}
                </Typography>
                <Stack direction={'row'} spacing={7}>
                  <Box >
                    <Box>
                        <CardMedia 
                            component="img"        
                            image={single.film.posterUrl}                    
                            alt="poster"
                            sx={{ borderRadius: 2,  width: 'auto', height: '32rem' }}
                        />
                    </Box>
                    <Box>
                        <Button color="inherit" onClick={goBack}>Назад</Button>
                    </Box>
                  </Box>  
                  <Stack direction={'column'} spacing={2} sx={{width: '70%'}}>
                     <Typography  sx={{fontSize: '20px', fontWeight: '800'}}>
                        Краткое содержание:
                     </Typography>
                     <Typography paragraph variant="subtitle1">
                       { single.film.description === null ? (no_description) : (single.film.description)}
                     </Typography>
                   
                     <Typography paragraph sx={{fontSize: '14px', fontWeight: '600'}}>
                        Год производства: 
                        <Typography component="span"  sx={{fontSize: 'inherit', 
                                                          fontWeight: 'inherit',
                                                          ml: 2, 
                                                          color: '#47e83f',
                                                        //   color: 'saTheme.color.primary',
                                                          }}>
                                                         {single.film.year}
                        </Typography>
                     </Typography>
                  </Stack> 
                </Stack>               
        </>      
          
    );
};








            