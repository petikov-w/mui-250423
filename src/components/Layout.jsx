import { Outlet } from 'react-router-dom';
import React, {useEffect} from 'react';
import {Container} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';

// import styled from 'styled-components';
import { ThemeMui } from '../styles/ThemeMui';

import { Header } from './Header';
import { Footer } from './Footer';




// const Main = styled.div` 
//      min-height: calc(96vh - 85px - 22px);
//      padding-top: 1.5rem 0;    
// `;



const Layout = () => {
    
    useEffect(()=>{      
        const isTheme =  localStorage.getItem('themeMui');
        if(isTheme===null) localStorage.setItem('themeMui', 'light');
       
    }, []);

      return (
        <>
         <ThemeProvider theme={ThemeMui(localStorage.getItem('themeMui'))}>
            <Header />     
               <Container maxWidth="lg">
                        <Outlet />   
               </Container>   
            <Footer />   
         </ThemeProvider>
            
                      
        </>
    );
};

export { Layout };
 