import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import {Box, AppBar, CssBaseline, Button, Switch, Link, 
        Container, Typography, CardMedia, FormControlLabel} from '@mui/material';
       // import Button from '@material-ui/core/Button'
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

    // const [theme, setTheme] = useState('dark');
    const navItems = [{id: 1, navItem: 'Главная', path: '/'},
                      {id: 2, navItem: 'Каталог', path: '/catalog'},
                      {id: 3,navItem: 'Контакты', path: '/contacts'}];
    const [checked, setChecked] = useState(false);

    
    const handleChange = (event) => {
        setChecked(event.target.checked);            
        checked ? localStorage.setItem('themeMui', 'light')  : localStorage.setItem('themeMui', 'dark');
        }; 
    
  
    return (
        <div>
            <ThemeProvider theme={ThemeMui(localStorage.getItem('themeMui'))}>
            <Box sx={{ display: 'flex', flexDirection: 'row', mb:2 }}>
              <CssBaseline sx={{  }}/>    
                <AppBar component="nav" position="static" sx={{ pt: 1, pb: 1 }}>               
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
                        </Box>                                   
                        <Box sx={{ display: { xs: 'none',                                         
                                              sm: 'block' }}}>
                                {navItems.map((item) => (    
                                 
                                    <Button  key={item.id} component={NavLink} to={item.path} >
                                         <Typography  key={item.id} component={NavLink} to={item.path}color="nav" sx={{ fontSize: 16}} >
                                            {item.navItem}
                                        </Typography>
                                    </Button>
                                  
                                    

                                    // <NavLinkStl  to={item.path}>
                                    //     <Button >  
                                    //         <Typography  sx={{ fontSize: 16,
                                    //             fontWeight: 500,  
                                    //             color: '#303891',
                                    //             }} >{item.navItem} 
                                    //         </Typography> 
                                    //     </Button>                                                
                                    // </NavLinkStl>


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



