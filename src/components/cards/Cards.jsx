import { useSelector } from 'react-redux';

import { Paginations } from '../Paginations';
import { PreLoader } from '../PreLoader';

import { CardsSortedByFilter } from './CardsSortedByFilter';
import { CardsNotFilter } from './CardsNotFilter';
import { BoxHero } from './BoxHero';

const allowedPagesShowPagination = ['top','serial','mult'];

export const Cards = () => {
 
  const isFetching = useSelector(state=>state.isFetching.isFetching);    
  const currentPage = useSelector(state=>state.settings.currentPage); 


  const filterInfoRussia = {
        'title' : 'Российские премьеры',
        'value' : 'Россия',
  };

  const filterInfoUsa = {
    'title' : 'Американские премьеры',
    'value' : 'США',
};

  const FilmPremier = (
    <>

      <BoxHero></BoxHero>
      <CardsSortedByFilter filterInfo={filterInfoRussia}/>
      <CardsSortedByFilter filterInfo={filterInfoUsa}/>
    </>    
  );

  const FilmNotPremier = (
    <>
      <CardsNotFilter />      
    </>    
  );

  
  return (
    <>     
      {isFetching ? (<PreLoader />) : (currentPage === 'premier' ? FilmPremier :  FilmNotPremier)}
      { allowedPagesShowPagination.includes(currentPage) ? ( <Paginations /> ) : ('')}   
           
    </>
  );
};
