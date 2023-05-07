import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import {Container} from '@mui/material';
import { ThemeProvider } from '@mui/material';

import { ThemeMui } from '../styles/ThemeMui';

import { Header } from './Header';
import { Footer } from './Footer';
import { MyContext } from './Context';


const Layout = () => {
    
    const [theme, setTheme] = useState('light');    

      return (
      <>    
        <MyContext.Provider value={{theme, setTheme}} >
            <ThemeProvider theme={ThemeMui(theme)}>            
                <Header />     
                <Container maxWidth="lg">
                  <Outlet />   
                </Container>   
                <Footer />   
            </ThemeProvider>
        </MyContext.Provider>
    </>
    );
};

export { Layout };
 