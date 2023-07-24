import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Box, Stack, Typography, Divider, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import {Navigations} from './Navigations';


export const NavigationDrawer = () => {
    const dispatch = useDispatch();
    const mobileOpen = useSelector(state=>state.settings.mobileOpen);
  
    const handleDrawerToggle = () => {
        mobileOpen ? dispatch({type:'TOOGLE_MOBILE_OPEN', payload: false }) 
                   : dispatch({type:'TOOGLE_MOBILE_OPEN', payload: true });
      };
   
    return (
        <>
           <IconButton
                    size="small"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleDrawerToggle}
                    sx={{ display: { xs: 'inline', 
                                     sm: 'inline', 
                                     md: 'none'},
                          ml: 1, mt: 0.7           }} 
                    >
                    <MenuIcon />
           </IconButton>    
           <Box component="nav">
                <Drawer
                    open={mobileOpen}
                    onClose={handleDrawerToggle}                     
                >
                    <Box width="250px" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" sx={{ my: 2 }}>
                            Кино
                        </Typography>
                        <Divider />
                        <Stack sx={{pl:2, pt:2 }} direction="column" alignItems="flex-start" spacing={2}  >                  
                            <Navigations />
                        </Stack>
                    </Box>
                </Drawer>
            </Box>  
        </>
    );
};




