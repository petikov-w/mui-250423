import { Outlet, useLocation } from 'react-router-dom';
import React, { useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {Container} from '@mui/material';
import styled from 'styled-components';
import { ThemeProvider } from '@mui/material';

import { ThemeMui } from '../styles/ThemeMui';

import { Header_v2 } from './Header_v2';
// import { Header } from './Header';
import { Footer } from './Footer';

const Main = styled.div` 
     min-height: calc(91.3vh - 85px - 22px);
     padding-top: 1.5rem 0;    
`;


const Layout = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state=>state.settings.theme);
    const location = useLocation();

    useEffect(() => {      
      const loc = location.state;     
       if (loc!==null) { dispatch({type:'UPDATE_CURRENT_PAGE', payload: location.state.page},) }        
    }, [location]);

      return (
      <>    
            <ThemeProvider theme={ThemeMui(theme)}>   
                <Header_v2 />     
                 <Container maxWidth="lg"  sx={{ mt: 12, mb: 5 }}>   
                <Main>                               
                  <Outlet />                         
                </Main>           
                </Container>
                <Footer />                    
            </ThemeProvider>
    </>
    );
};

export { Layout };
 