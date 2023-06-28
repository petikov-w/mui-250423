import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {Box,  Button, Typography, CardMedia, Stack} from '@mui/material';

import { useTheme } from 'styled-components';

import { ThemeMui } from '../styles/ThemeMui';
//import { green } from '@mui/material/colors';

export const Single = (props) => {
    
    const saTheme = useTheme(ThemeMui);
    const {film} = props;
   const navigate = useNavigate();
    const goBack = () => navigate(-1);   
    // const preLoader = '';
    const preLoader = <h3>Загрузка...</h3>;
    const no_description = 'Описание отсутствует';
    const dispatch = useDispatch();
    
    //const loc = useLocation();
    localStorage.setItem('isSingle', true);

    return (
        <>
            { film.length !== 0 ? 
            <>
                <Typography variant="h4" sx={{mb:3}}>
                    {film.nameRu}
                </Typography>
                <Stack direction={'row'} spacing={7}>
                  <Box >
                    <Box>
                        <CardMedia 
                            component="img"        
                            image={film.posterUrl}                    
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
                       { film.description === null ? (no_description) : (film.description)}
                     </Typography>
                   
                     <Typography paragraph sx={{fontSize: '14px', fontWeight: '600'}}>
                        Год производства: 
                        <Typography component="span"  sx={{fontSize: 'inherit', 
                                                          fontWeight: 'inherit',
                                                          ml: 2, 
                                                          color: '#47e83f',
                                                        //   color: 'saTheme.color.primary',
                                                          }}>
                                                         {film.year}
                        </Typography>
                     </Typography>
                  </Stack> 
                </Stack>
            </> :  preLoader}         
        </>      
          
    );
};








            