import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import {Box, AppBar, CssBaseline, Switch, Link,
        Container, Typography, CardMedia, FormControlLabel, Stack} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';

import { ThemeMui } from '../styles/ThemeMui';
import imageCinema from '../images/cinema_sm.png';

import {Navigations} from './Navigations';
import { FilterDrawer } from './FilterDrawer';
import { NavigationDrawer } from './NavigationDrawer';
// const drawerWidth = 240;

export const Header = (props) => {

  const dispatch = useDispatch();

    const theme = useSelector(state=>state.settings.theme);
    const checked = useSelector(state=>state.settings.checkedTheme);
        
    const handleChange = (event) => {dispatch({type:'UPDATE_CHECKED_THEME', payload: event.target.checked});}; 

    useEffect(()=>{ checked ? dispatch({type:'UPDATE_THEME', payload:'dark' }) 
                            : dispatch({type:'UPDATE_THEME', payload: 'light'});
    }, [checked]);      
    
    return (
        <>
          <ThemeProvider theme={ThemeMui(theme)}>
            <Box sx={{ display: 'flex', flexDirection: 'row'}}>
              <CssBaseline />    
              
                <AppBar component="nav" position="fixed" sx={{ pt: 1, pb: 1 }}>           
                      <Container maxWidth="lg" sx={{ display: 'flex', 
                                                     flexDirection: 'row',
                                                     alignItems: 'center',
                                                     justifyContent: 'space-between',
                                                   }}>    
                      <NavigationDrawer />                                
                      <Link color="inherit" underline="none" component={NavLink} to={'/'}>                     
                        <Box sx={{ display: 'flex', 
                                   flexDirection: 'row',
                                   alignItems: 'center'}}>
                            <CardMedia sx={{ mr: 2 }} 
                                    component="img"
                                    height="60"
                                    width= "60"
                                    image={imageCinema}
                                    alt="cinema" >                                
                            </CardMedia>
                            <Typography  variant="logo_header" >Кино</Typography>      
                        </Box> 
                      </Link>
                   
                      <Stack sx={{ display: { xs: 'none', sm: 'none', md: 'flex'}, ml:-16}} 
                            direction="row" spacing={4}  >                             
                              <Navigations />
                      </Stack>                    

                      <Box sx={{ mr: -3, display: 'inline-flex'}}>
                      <FilterDrawer />
                      <FormControlLabel sx={{ pl: 3}} 
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
        </>
    );
};



