import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Search';
import {Button, Drawer, Box, Typography, IconButton, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { FilterTop } from './FilterTop'
import { FilterSerial } from './FilterSerial';
import { FilterMult } from './FilterMult';

export const FilterDrawer = () => {
     const [isDrawerOpen, setIsDrawerOpen] = useState(false)
     
       return (
            <>          
                    <IconButton
                         onClick={() => setIsDrawerOpen(true)}
                         size="large"
                         edge="start"
                         color="inherit"
                         aria-label="searh">
                    <MenuIcon />
                    </IconButton>
                    <Drawer
                         anchor="right"
                         open={isDrawerOpen}
                         onClose={() => setIsDrawerOpen(false)}>
                    <Box p={2} width="250px" role="presentation" textAlign="center">
                         <Typography variant="h6" component="div">
                           ПОИСК
                         </Typography>
                         <Divider sx={{mt:2, mb:3}} color="inherit" />
                         <Box>
                           <FilterTop />
                           <FilterSerial />      
                           <FilterMult />     
                         </Box>
                    </Box>
                    </Drawer>
                       
                
             </>  
            
       );
};

