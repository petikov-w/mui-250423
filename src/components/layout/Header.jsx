import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import {Box, AppBar, CssBaseline, Switch, Link,
        Container, Typography, CardMedia, FormControlLabel, Stack} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';

import { ThemeMui } from '../../styles/ThemeMui';
import imageCinema from '../../images/cinema_sm.png';

import {Navigations} from '../navigations/Navigations';
import { FilterDrawer } from '../filters/FilterDrawer';
import { NavigationDrawer } from '../navigations/NavigationDrawer';
// const drawerWidth = 240;

export const Header = (props) => {

  const dispatch = useDispatch();

    const theme = useSelector(state=>state.settings.theme);
    const checked = useSelector(state=>state.settings.checkedTheme);

    const stateLogo = { 
      page: 'premier', 
      path: '',
    };
        
    const handleChange = (event) => {dispatch({type:'UPDATE_CHECKED_THEME', payload: event.target.checked});}; 

    useEffect(()=>{ checked ? dispatch({type:'UPDATE_THEME', payload:'dark' }) 
                            : dispatch({type:'UPDATE_THEME', payload: 'light'});
    }, [checked]);      
    
 

    return (
        <>
          <ThemeProvider theme={ThemeMui(theme)}>
            <Box sx={{ display: 'flex', flexDirection: 'row'}}>
              
              <CssBaseline />    
               
                <AppBar component="nav" position="fixed" sx={{ display: 'flex', 
                                                     flexDirection: 'row',  pt: 1, pb: 1 }}>    
                        <NavigationDrawer  />
                      <Container maxWidth="lg" sx={{ display: 'flex', 
                                                     flexDirection: 'row',
                                                     alignItems: 'center',
                                                     justifyContent: 'space-between',
                                                   }}>    
                                                    
                      <Link color="inherit" underline="none" component={NavLink} to={'/'} state={stateLogo}>                     
                        <Box sx={{ display: 'flex', 
                                   flexDirection: 'row',
                                   alignItems: 'center'}}>
                            <CardMedia sx={{ mr: 2, height: {xs: 40,
                                                             md: 60 } }} 
                                    component="img"
                                    // height="60"
                                    image={imageCinema}
                                    alt="cinema" >                 
{/* 
sx: 1.0, // 100%
      sm: 250,
      md: 350, */}

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



