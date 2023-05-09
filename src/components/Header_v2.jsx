import React, { useState, useContext} from 'react';
import { NavLink } from 'react-router-dom';

import {Box, AppBar, CssBaseline, Switch, Link,
        Container, Typography, CardMedia, FormControlLabel, Stack, styled, 
        List, ListItem, ListItemButton, ListItemText, Divider, Drawer} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
        
       
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { ThemeMui } from '../styles/ThemeMui';

import imageCinema from '../images/cinema_sm.png';

import { MyContext } from './Context';


const LinkStl = styled(Link)`
    text-decoration: none;   
`;

const TypographyLinkStl = styled(Typography)`
    font-weight : 500;
    font-size: 18px;   

    :hover {
      color: #649f59;  
    }
`;

const TypographyLITStl = styled(Typography)`
    font-weight : 500;
    font-size: 18px;   
    //color: #649f59;
    :hover {
      color: #649f59;  
    }
`;

const drawerWidth = 240;

const navItems = [{id: 1, navItem: 'Главная', path: '/'},
                      {id: 2, navItem: 'Каталог', path: '/catalog'},
                      {id: 3,navItem: 'Контакты', path: '/contacts'}];

export const Header_v2 = (props) => {
    
    const {theme, setTheme} = useContext(MyContext);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [checked, setChecked] = useState(false);    
    const { window } = props;
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
    
    const handleChange = (event) => {
        setChecked(event.target.checked);            
        checked ? setTheme('light')  : setTheme('dark');
        }; 
    
        const drawer = (
            <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ my: 2 }}>
                Кино
              </Typography>
              <Divider />
              <List >
                {navItems.map((item) => (
                  <ListItem key={item.id}  component={NavLink} 
                                          to={item.path} disablePadding>
                    <ListItemButton color="inherit" sx={{ textAlign: 'center' }}>
                      <TypographyLITStl>
                         <ListItemText disableTypography primary={item.navItem} />
                         {/* <ListItemText  primary={item.navItem} /> */}
                      </TypographyLITStl>  
                      
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          );

                                            
        //   <LinkStl color="inherit" key={item.id} component={NavLink} 
        //   to={item.path}>     
        
          const container = window !== undefined ? () => window().document.body : undefined;    
  
    return (
        <>
            <ThemeProvider theme={ThemeMui(theme)}>
            <Box sx={{ display: 'flex', flexDirection: 'row', mb:2 }}>
              <CssBaseline />    
                <AppBar component="nav" position="static" sx={{ pt: 1, pb: 1 }}>           
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


                    
                        <Stack sx={{ display: { xs: 'none', sm: 'none', md: 'flex'}}} direction="row" spacing={4}  > 
                                {navItems.map((item) => (                                      
                                                                   
                                     <LinkStl color="inherit" key={item.id} component={NavLink} 
                                                                        to={item.path}>                                     
                                    <TypographyLinkStl>
                                        {item.navItem}
                                    </TypographyLinkStl>
                                    </LinkStl>    
                                ))}

                        </Stack>                    

                        <Box sx={{ mr: -3, display: 'inline-flex'}}>
                            <FormControlLabel  
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



