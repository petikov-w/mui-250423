// import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import {Box} from '@mui/material';

import { ListCardsU } from '../components/ListCardsU';

const SideBar = styled(Box)`
height: 100vh;
width: 30vw;
background-color: yellow;
`;

export const SerialPage = () => { 
    const query = process.env.REACT_APP_API_SERIALS;
    const pathPage='/serials?page=';
    
    return (
        <>
            {/* <Helmet>
                <title>Cinema Box - Главная</title>
            </Helmet> */}
                {/* <h2>Сериалы</h2>
                <p>Это страница сериалов</p>       */}
                 <ListCardsU query={query} path={pathPage} typePage="serial"/>      
                 <SideBar />
        </>
           
    );
};

