import React, { Suspense } from 'react';
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {Box,  Button, Typography, CardMedia, Stack} from '@mui/material';

import { SingleContent } from './SingleContent';

//import { useTheme } from 'styled-components';
//import { ThemeMui } from '../styles/ThemeMui';
//import { green } from '@mui/material/colors';

export const Single = () => {
    
    //const saTheme = useTheme(ThemeMui);
    const navigate = useNavigate();
    const goBack = () => navigate(-1);   
    // const preLoader = '';
    const preLoader = <h3>Загрузка-вах...</h3>;
    // const no_description = 'Описание отсутствует';
    
    //localStorage.setItem('isSingle', true);
    const single = useSelector(state=>state.single);
    //const saTheme = useTheme(ThemeMui);

//     <Suspense fallback={<Loading />}>
//     <Albums />
// </Suspense>
    return (
        <>
            <Suspense fallback={preLoader}>
                <SingleContent />
            </Suspense>      

            {/* { single.length !== 0 ? <SingleContent /> :  preLoader}          */}
        </>      
          
    );
};








            