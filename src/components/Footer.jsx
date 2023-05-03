import React from 'react';
import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

// import styled from 'styled-components';
import {Box, Container, Typography, CardMedia} from '@mui/material';

import imageCinema from '../images/cinema_sm.png';

export const Copyright = styled.a.attrs({
    href: 'https://kroxdev.ru',
    target: '_blank',
 })`
    text-decoration: none;   
   `;

export const Footer = () => {
    return (
       <>
            <Box sx={{ display: 'flex', 
                       flexDirection: 'row',
                       pt: 1, pb: 1, 
                       bgcolor: '#dbd8d8'}}>
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
                                               color: '#303891',
                                            }} >Кино
                            </Typography>
                        </Box>          
                        <Box>
                            <Copyright>
                                <Typography sx={{ color: '#303891',
                                                      fontWeight: 400,
                                                      fontSize: 12 }}>
                                     © {new Date().getFullYear()} Petikov Vladimir
                                </Typography>
                            </Copyright>
                            
                        </Box>                         
                        
                    </Container>    
                
            </Box>
       </>
            
       
    );
};

{/* <Copyright></Copyright> */}