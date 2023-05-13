import React, { useContext } from 'react';
import { ThemeProvider } from '@emotion/react';
import { NavLink } from 'react-router-dom';

import {Box, Container, Typography, CardMedia, Link, AppBar} from '@mui/material';

import imageCinema from '../images/cinema_sm.png';
import { ThemeMui } from '../styles/ThemeMui';

import { MyContext } from './Context';


export const Footer = () => {

       const {theme} = useContext(MyContext);
    
    return (
    <>
     <ThemeProvider theme={ThemeMui(theme)}>
        {/* <AppBar position="fixed" component="footer"  sx={{  top: 'auto', bottom: 0, pt: 2, pb: 2 }}> */}
        <AppBar position="static" component="footer" sx={{ top: 'auto', bottom: 0, pt: 2, pb: 2 }}>
                 <Container maxWidth="lg" sx={{ display: 'flex', 
                                                   flexDirection: 'row',
                                                   alignItems: 'center',
                                                   justifyContent: 'space-between',
                                                 }}>    
                                                 
                       <Link color="inherit" underline="none" component={NavLink} to={'/'}>                                     
                        <Box sx={{ display: 'flex', 
                                   flexDirection: 'row',
                                   alignItems: 'center'}}>
                            
                                <CardMedia sx={{ mr: 2 }} component="img"
                                        height="40"
                                        width= "40"
                                        image={imageCinema}
                                        alt="cinema" >                                
                                </CardMedia>
                                <Typography  sx={{ fontSize: 18,
                                                fontWeight: 'bold', 
                                                letterSpacing: 6,
                                                textTransform: 'uppercase',
                                                }} >Кино
                                </Typography>
                            
                         </Box>         
                        </Link> 
                        <Box>
                            <Typography sx={{fontWeight: 400, fontSize: 14 }}>
                                    <Link href="https://kroxdev.ru" 
                                          target="_blank" 
                                          color="inherit"
                                          underline="hover"
                                          rel="noopener">
                                          © {new Date().getFullYear()} Petikov Vladimir
                                    </Link>                                    
                            </Typography>                            
                        </Box>                       
                 </Container>    
        </AppBar>
     </ThemeProvider>            
    </>      
    );
};

