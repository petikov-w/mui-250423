import React, { useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';

import {Box, Container, Typography, CardMedia, CssBaseline, Link, AppBar, Toolbar} from '@mui/material';

import imageCinema from '../images/cinema_sm.png';
import { ThemeMui } from '../styles/ThemeMui';




export const Footer = () => {
    useEffect(()=>{
            console.log('themeMui :>> ', localStorage.getItem('themeMui'));

    }, [localStorage.getItem('themeMui')]);

    
    return (
       <>
     <ThemeProvider theme={ThemeMui(localStorage.getItem('themeMui'))}>

        <AppBar position="fixed" component="footer"  sx={{ top: 'auto', bottom: 0}}>
            <Toolbar>
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
            </Toolbar>
             
                   
                
           
            </AppBar>
         </ThemeProvider>
            
       </>
            
       
    );
};

{/* <Copyright></Copyright> */}