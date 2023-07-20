
import {Box, Typography, CardMedia, Stack} from '@mui/material';

import loading from '../images/loading.svg';


export const PreLoader = () => {    
    return (
        <>
            <Stack sx={{ pt: '8rem' }}
                direction="column"
                justifyContent="center"
                alignItems="center"                
            >
                <CardMedia 
                    component="img"        
                    image={loading}                    
                    alt="preLoader"
                    sx={{ width: 'auto', height: '20rem' }}
                />
            </Stack>
        </>      
          
    );
};








            