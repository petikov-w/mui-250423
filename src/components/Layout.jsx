import { Outlet } from 'react-router-dom';
import React, {useEffect} from 'react';
import {Container} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';

import styled from 'styled-components';

import { Header } from './Header';
import { Footer } from './Footer';


const Main = styled.div` 
     min-height: calc(96vh - 85px - 22px);
     padding-top: 1.5rem 0;    
`;



const Layout = () => {
    
    useEffect(()=>{      
        const isTheme =  localStorage.getItem('themeMui');
        if(isTheme===null) localStorage.setItem('themeMui', 'light');
       
    }, []);

      return (
        <>
            <Header />     
               <Container maxWidth="lg">
                    <Main>
                        <Outlet />   
                    </Main>      
               </Container>   
            <Footer />   
                      
        </>
    );
};

export { Layout };
 