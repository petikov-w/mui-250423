
import {Autocomplete, TextField, Chip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

export const FilterSerial = (props) => {
    
      //  const { typePage } = props;
        
       const dispatch = useDispatch();      
       const listCountries = useSelector(state => state.setLists.countrys);
       const listGenres = useSelector(state => state.setLists.genres);
       const selectedGenre= useSelector(state=>state.filters.genre);
       const selectedCountrie= useSelector(state=>state.filters.country);  
       const currentPage = useSelector(state=>state.settings.currentPage);  
      

       const ListGenres = () => JSON.stringify(listGenres) === '{}' ? '' : 
       <Autocomplete sx={{mb: 2 }} size="small" disableClearable={true}                
                         options={listGenres}
                         inputValue="" 
                         getOptionLabel= {(options) => options.genre}         
                         renderInput={(params)=><TextField {...params} label="Жанр" />}                  
                         onChange={(event, value) => dispatch({type:'UPDATE_GENRE', payload: value},)}/>        

       const ListCountries = () => JSON.stringify(listCountries) === '{}' ? '' : 
       <Autocomplete sx={{ mb: 3 }} size="small" disableClearable={true}
                         options={listCountries}
                         inputValue="" 
                         getOptionLabel= {(options) => options.country}
                         renderInput={(params)=><TextField {...params} label="Страна" />}
                         onChange={(event, value) => dispatch({type:'UPDATE_COUNTRIE', payload: value},)}/>       

       const ChipSelectedGenre = () =>  <Chip label={`Жанр: ${selectedGenre.genre}`} sx={{mb: 2 }}
                                              onDelete={() => dispatch({type:'DELETE_GENRE'})}/>;

       const ChipSelectedCountrie = () =>  <Chip label={`Страна: ${selectedCountrie.country}`} sx={{mb: 2 }}
                                              onDelete={() => dispatch({type:'DELETE_COUNTRIE'})}/>;

       

    
       return (
            <>          
               { currentPage === 'serial' ?  JSON.stringify(selectedGenre) === '{}' 
               ? <ListGenres /> : <ChipSelectedGenre />  : ''}
               { currentPage === 'serial' ?  JSON.stringify(selectedCountrie) === '{}' 
               ? <ListCountries /> : <ChipSelectedCountrie />  : ''}  
               {/* { typePage === 'serial' ?  JSON.stringify(selectedGenre) === '{}' 
               ? <ListGenres /> : <ChipSelectedGenre />  : ''}
               { typePage === 'serial' ?  JSON.stringify(selectedCountrie) === '{}' 
               ? <ListCountries /> : <ChipSelectedCountrie />  : ''}   */}
            </>
       );
};
    