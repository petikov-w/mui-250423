import React from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import {Box,  Button, Typography, CardMedia, Stack} from '@mui/material';
//import { green } from '@mui/material/colors';

export const Single = (props) => {
    
    const {film} = props;
   const navigate = useNavigate();
    const goBack = () => navigate(-1);   
    // const preLoader = '';
    const preLoader = <h3>Загрузка...</h3>;
    
    const loc = useLocation();
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
                     <Typography paragraph sx={{fontSize: '14px'}}>
                        {film.description} 
                     </Typography>
                     <Typography paragraph sx={{fontSize: '14px', fontWeight: '600'}}>
                        Год производства: 
                        <Typography component="span" sx={{fontSize: 'inherit', 
                                                          fontWeight: 'inherit',
                                                          ml: 2, 
                                                          color: '#47e83f'}}>
                                                         {film.year}
                        </Typography>
                     </Typography>
                  </Stack> 
                </Stack>
            </> :  preLoader}         
        </>      
          
    );
};








            