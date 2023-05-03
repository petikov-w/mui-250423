import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import {Box, AppBar, CssBaseline, Button, Switch, 
        Container, Typography, CardMedia, FormControlLabel} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blueGrey, grey } from '@mui/material/colors';

import { ThemeMui } from '../styles/ThemeMui';

import imageCinema from '../images/cinema_sm.png';

const NavLinkStl = styled(NavLink)`
 padding: 1rem 0.9rem;
 text-decoration: none;
 cursor: pointer; 
`;  

export const Header = () => {
    

    // const [theme, setTheme] = useState(!localStorage.getItem('themeMui') 
    //                                    ? 'light' : localStorage.getItem('themeMui'));

    const [theme, setTheme] = useState('dark');
    const navItems = [{id: 1, navItem: 'Главная', path: '/'},
                      {id: 2, navItem: 'Каталог', path: '/catalog'},
                      {id: 3,navItem: 'Контакты', path: '/contacts'}];
    const [checked, setChecked] = useState(false);

    
    const handleChange = (event) => {
        setChecked(event.target.checked);     
        // !localStorage.getItem('themeMui') ? 'light' : localStorage.getItem('themeMui')  
    };


    
  
    // const ThemeMui = () =>createTheme({
    //     palette: {
    //         mode:  theme,  
    //         primary: {
    //         main: '#b8b8bf',
    //         },
    //         secondary: {
    //         main: '#f50057',
    //         },
    //       },
    //     } );

    
  
  
    useEffect(()=>{      
        setTheme(theme==='light' ? 'dark' : 'light')
    }, [checked]);

    return (
        <div>
            <ThemeProvider theme={ThemeMui(theme)}>
            <Box sx={{ display: 'flex', flexDirection: 'row', mb:2 }}>
              <CssBaseline sx={{  }}/>    
                <AppBar component="nav" position="static" sx={{ pt: 1, pb: 1 }}>
                {/* <AppBar component="nav" position="static" sx={{ pt: 1, pb: 1, 
                                              bgcolor: '#dbd8d8',          
                                              }}> */}
                    <Container maxWidth="lg" sx={{ display: 'flex', 
                                                   flexDirection: 'row',
                                                   alignItems: 'center',
                                                   justifyContent: 'space-between',
                                                 }}>               
                        <Box sx={{ display: 'flex', 
                                   flexDirection: 'row',
                                   alignItems: 'center'}}>
                            <CardMedia sx={{ mr: 2 }} component="img"
                                       height="60"
                                       width= "60"
                                       image={imageCinema}
                                       alt="cinema" >                                
                            </CardMedia>
                            <Typography  sx={{ fontSize: 22,
                                               fontWeight: 'bold', 
                                               letterSpacing: 6,
                                               textTransform: 'uppercase',                                               
                                            }} >Кино
                            </Typography>
                            {/* <Typography  sx={{ fontSize: 22,
                                               fontWeight: 'bold', 
                                               letterSpacing: 6,
                                               textTransform: 'uppercase',
                                               color: '#303891',
                                            }} >Кино
                            </Typography> */}
                        </Box>                                   
                        <Box color="custom" sx={{ display: { xs: 'none',                                         
                                              sm: 'block' }}}>
                                {navItems.map((item) => (                                    
                                    <NavLinkStl key={item.id} to={item.path}>
                                        <Button >  
                                            <Typography  sx={{ fontSize: 16,
                                                fontWeight: 500,  
                                                color: '#303891',
                                                }} >{item.navItem} 
                                            </Typography> 
                                        </Button>                                    
                                        {/* <Button sx={{ color: '#303891',
                                                      fontWeight: 500,
                                                      fontSize: 14 }}>
                                           {item.navItem} 
                                        </Button>                                     */}
                                    </NavLinkStl>
                                ))}
                        </Box>
                        <Box sx={{ display: 'inline-flex'}}>
                            <FormControlLabel  
                                    control={<Switch size="small" 
                                    color="default"
                                    checked={checked}
                                    onChange={handleChange} /> }>                                 
                            </FormControlLabel>                            
                        </Box>
                    </Container>    
                </AppBar>  
            </Box>

            </ThemeProvider>
           
        </div>
    );
};



