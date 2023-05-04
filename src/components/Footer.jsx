import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from '@emotion/react';

import {Box, Container, Typography, CardMedia, Link} from '@mui/material';

import imageCinema from '../images/cinema_sm.png';
import { ThemeMui } from '../styles/ThemeMui';



export const Copyright = styled.a.attrs({
    href: 'https://kroxdev.ru',
    target: '_blank',
 })`
    text-decoration: none;   
   `;

export const Footer = () => {
    return (
       <>
         <ThemeProvider theme={ThemeMui(localStorage.getItem('themeMui'))}>
            <Box  sx={{ display: 'flex', 
                       flexDirection: 'row',
                       pt: 1, pb: 1, 
                    //    bgcolor: '#dbd8d8',
                       }}>
                {/* <CssBaseline />     */}
               
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
                
            </Box>
         </ThemeProvider>
            
       </>
            
       
    );
};

{/* <Copyright></Copyright> */}