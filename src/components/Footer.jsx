import React, { useContext } from 'react';
import { ThemeProvider } from '@emotion/react';

import {Box, Container, Typography, CardMedia, Link, AppBar, Toolbar} from '@mui/material';

import imageCinema from '../images/cinema_sm.png';
import { ThemeMui } from '../styles/ThemeMui';

import { MyContext } from './Context';


export const Footer = () => {

       const {theme} = useContext(MyContext);
    
    return (
    <>
     <ThemeProvider theme={ThemeMui(theme)}>
        <AppBar position="fixed" component="footer"  sx={{ top: 'auto', bottom: 0}}>
                 <Container maxWidth="lg" sx={{ display: 'flex', 
                                                   flexDirection: 'row',
                                                   alignItems: 'center',
                                                   justifyContent: 'space-between',
                                                 }}>               
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
                        <Box>
                            <Typography sx={{fontWeight: 400, fontSize: 14 }}>
                                    <Link href="https://kroxdev.ru" 
                                          target="_blank" 
                                          color="inherit"
                                          underline="hover">
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

