import React from 'react';
import { useSelector } from 'react-redux';

import { SingleContent } from './SingleContent';
import { PreLoader } from './PreLoader';

export const Single = () => {

    const isFetching = useSelector(state=>state.isFetching.isFetching);  
   
    return (
        <>
             {isFetching ? (<PreLoader /> ) : ( <SingleContent /> )}          
        </>      
          
    );
};








            