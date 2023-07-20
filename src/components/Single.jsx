import React, { Suspense } from 'react';
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

// import {Box,  Button, Typography, CardMedia, Stack} from '@mui/material';
// import loading from '../images/loading.svg';

import { SingleContent } from './SingleContent';
import { PreLoader } from './PreLoader';

export const Single = () => {
    
    //const saTheme = useTheme(ThemeMui);
    // const navigate = useNavigate();
    // const goBack = () => navigate(-1);  
    const isFetching = useSelector(state=>state.isFetching.isFetching);  
    // const preLoader = <h3>Загрузка-вах...</h3>;
   
    // const single = useSelector(state=>state.single);
 
    return (
        <>
             {isFetching ? (<PreLoader /> ) : ( <SingleContent /> )}          
        </>      
          
    );
};








            