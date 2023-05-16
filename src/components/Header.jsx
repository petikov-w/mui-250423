import React, { useState, useContext} from 'react';
import { NavLink } from 'react-router-dom';

import {Box, AppBar, CssBaseline, Button, Switch, 
        Container, Typography, CardMedia, FormControlLabel} from '@mui/material';
       
import { ThemeProvider } from '@mui/material/styles';

import { ThemeMui } from '../styles/ThemeMui';

import imageCinema from '../images/cinema_sm.png';

import { MyContext } from './Context';



export const Header = () => {
    
    const {theme, setTheme} = useContext(MyContext);
   
    const navItems = [{id: 1, navItem: 'Главная', path: '/'},
                      {id: 2, navItem: 'Каталог', path: '/films?page=1'},
                      {id: 3,navItem: 'Контакты', path: '/contacts'}];
                    //   <NavLink to="/films?page=1">Каталог</NavLink> 

    const [checked, setChecked] = useState(false);

    
    const handleChange = (event) => {
        setChecked(event.target.checked);            
        checked ? setTheme('light')  : setTheme('dark');
        }; 
    
  
    return (
        <div>
            <ThemeProvider theme={ThemeMui(theme)}>
            <Box sx={{ display: 'flex', flexDirection: 'row', mb:2 }}>
              <CssBaseline />    
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
                                 
                                <Button  color="secondary" key={item.id} component={NavLink} 
                                                                       to={item.path} >                                       
                                        <Typography color="primary.contrastText" sx={{ fontSize: 16,
                                                                          fontWeight: 'bold'}} >
                                            {item.navItem}
                                        </Typography>
                                </Button>    
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



