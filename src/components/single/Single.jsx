import React from 'react';
import { useSelector } from 'react-redux';

import { PreLoader } from '../PreLoader';

import { SingleContent } from './SingleContent';


export const Single = () => {

    const isFetching = useSelector(state=>state.isFetching.isFetching);  
   
    return (
        <>
             {isFetching ? (<PreLoader /> ) : ( <SingleContent /> )}          
        </>      
          
    );
};








            