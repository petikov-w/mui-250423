import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import {Container} from '@mui/material';
import styled from 'styled-components';
import { ThemeProvider } from '@mui/material';

import { ThemeMui } from '../styles/ThemeMui';

import { Header_v2 } from './Header_v2';
// import { Header } from './Header';
import { Footer } from './Footer';
import { MyContext } from './Context';

const Main = styled.div` 
     min-height: calc(91.3vh - 85px - 22px);
     padding-top: 1.5rem 0;    
`;


const Layout = () => {
    
    const [theme, setTheme] = useState('light');    
    

      return (
      <>    
        <MyContext.Provider value={{theme, setTheme}} >   
            <ThemeProvider theme={ThemeMui(theme)}>   
                <Header_v2 />     
                 <Container maxWidth="lg"  sx={{ mt: 12, mb: 5 }}>   
                <Main>                               
                  <Outlet />                         
                </Main>           
                </Container>
                <Footer />                    
            </ThemeProvider>
       </MyContext.Provider>
    </>
    );
};

export { Layout };
 