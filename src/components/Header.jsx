import React, { useState, useEffect} from 'react';
import { NavLink, useLocation } from 'react-router-dom';


import {Box, AppBar, CssBaseline, Switch, Link,
        Container, Typography, CardMedia, FormControlLabel, Stack,  
        List, ListItem, ListItemButton, ListItemText, Divider, Drawer} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';

import { TypographyNavLinkStl } from '../styles/Nav.styled'; 

import { ThemeMui } from '../styles/ThemeMui';
import imageCinema from '../images/cinema_sm.png';

import {Navigations} from './Navigations';
import { FilterDrawer } from './FilterDrawer';
const drawerWidth = 240;

// const navItems = [{id: 1, navItem: 'Кинопремьеры', path: '/', state: { page: 'premier', path: ''}},
//                   {id: 2, navItem: 'Топ фильмов', path: '/films?page=1', state: { page: 'top', path: '/films?page='}},
//                   {id: 3, navItem: 'Сериалы', path: '/serials?page=1', state: { page: 'serial', path: '/serials?page='}},
//                   {id: 4, navItem: 'Мультфильмы', path: '/mults?page=1', state: { page: 'mult', path: '/mults?page='}},
//                 ];

export const Header = (props) => {

  const dispatch = useDispatch();

    const theme = useSelector(state=>state.settings.theme);
    const checked = useSelector(state=>state.settings.checkedTheme);
    const location = useLocation();
    
    const [mobileOpen, setMobileOpen] = useState(false);

    const { window } = props;
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
    
    const handleChange = (event) => {dispatch({type:'UPDATE_CHECKED_THEME', payload: event.target.checked});}; 
    const handleChangeFilter = (event) => {console.log('locate1111 :>> ', location);}; 
    const handleChangeFilter2 = (event) => {console.log('locate1111 :>> ', location);}; 

        useEffect(()=>{ checked ? dispatch({type:'UPDATE_THEME', payload:'dark' }) 
                                : dispatch({type:'UPDATE_THEME', payload: 'light'});
        }, [checked]);      
    
        const drawer = (
            <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ my: 2 }}>
                Кино
              </Typography>
              <Divider />
              <Stack sx={{pl:2, pt:2 }} direction="column" alignItems="flex-start" spacing={2}  >                  
                   <Navigations />
              </Stack>
            </Box>
          );

          
          const container = window !== undefined ? () => window().document.body : undefined;    
  
    return (
        <>
            <ThemeProvider theme={ThemeMui(theme)}>
            <Box sx={{ display: 'flex', flexDirection: 'row'}}>
              <CssBaseline />    
                {/* <AppBar component="nav" position="static" sx={{ pt: 1, pb: 1 }}>            */}
                <AppBar component="nav" position="fixed" sx={{ pt: 1, pb: 1 }}>           
                      <Container maxWidth="lg" sx={{ display: 'flex', 
                                                     flexDirection: 'row',
                                                     alignItems: 'center',
                                                     justifyContent: 'space-between',
                                                   }}>     
                      <IconButton
                            size="small"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleDrawerToggle}
                            sx={{ display: { xs: 'inline', sm: 'inline', md: 'none'} }} 
                            >
                            <MenuIcon />
                      </IconButton>       
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
                      <FilterDrawer onChange={handleChangeFilter} />
                          <FormControlLabel sx={{ pl: 3}} 
                                  control={<Switch size="small" 
                                  color="default"
                                  checked={checked}
                                  onChange={handleChange} /> }>                                 
                          </FormControlLabel>                            
                      </Box>        
                    </Container>   
                </AppBar>  
                
                <Box component="nav">
                    <Drawer
                    container={container}                    
                    // variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, 
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    >
                    {drawer}
                    </Drawer>
                </Box>
            </Box>
            </ThemeProvider>           
        </>
    );
};



