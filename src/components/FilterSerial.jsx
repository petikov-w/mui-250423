
import {Autocomplete, TextField, Chip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

export const FilterSerial = (props) => {
    
       const { typePage } = props;
        
       const dispatch = useDispatch();      
       const listCountries = useSelector(state => state.listCountries);
       const listGenres = useSelector(state => state.listGenres);
       const selectedGenre= useSelector(state=>state.filters.genre);
       const selectedCountrie= useSelector(state=>state.filters.country);  
    
       const ListTopCollection = () => JSON.stringify(listTop) === '{}' ? '' : 
            <Autocomplete sx={{mb: 2 }} size="small" disableClearable={true}                
            options={listTop.collectionsTop}
            inputValue="" 
            getOptionLabel= {(options) => options.top}         
            renderInput={(params)=><TextField {...params} label="Коллекция" />}                  
            onChange={(event, value) => dispatch({type:'UPDATE_TOP_COLLECTION', payload: value})}
            /> ;

       const ChipSelectedCollection = () =>  <Chip label={`Коллекция: ${selectedCollection.top}`} 
                                             sx={{mb: 2 }}
                                             onDelete={() => dispatch({type:'DELETE_TOP_COLLECTION'})}/>;
    
       return (
            <>          
            { typePage === 'top' ?  
                                 JSON.stringify(selectedCollection) === '{}' ? <ListTopCollection /> 
                                                                    : <ChipSelectedCollection /> 
                                 : ''}
            </>
       );
};

    // return (
    // <>
    // {/* { typePage === 'serial' ? ( */}
    //      <Grid  container direction="column" alignItems="center" sx={{ width: '20%', ml: 3, mb: 3 }}>       
    //         <Stack width={220}>
    //         (typePage === 'top' ? 
    //          ( JSON.stringify(listTop) === '{}' ?
    //               <Autocomplete sx={{mb: 2 }} size="small" disableClearable={true}                
    //                   options={listTop.collectionsTop}
    //                   inputValue="" 
    //                   getOptionLabel= {(options) => options.top}         
    //                   renderInput={(params)=><TextField {...params} label="Коллекция" />}                  
    //                   onChange={(event, value) => dispatch({type:'UPDATE_TOP_COLLECTION', payload: value})}
    //                   /> : ('') )
    //                 : '') 


    //          {typePage === 'serial' ? (
             
    //           {JSON.stringify(selectedGenre.genre) === '{}' ?
    //               <Autocomplete sx={{mb: 2 }} size="small" disableClearable={true}                
    //                   options={listGenres.genres}
    //                   inputValue="" 
    //                   getOptionLabel= {(options) => options.genre}         
    //                   renderInput={(params)=><TextField {...params} label="Жанр" />}                  
    //                   onChange={(event, value) => dispatch({type:'UPDATE_GENRE', payload: value},)}/> : ('') }  
    //           {JSON.stringify(selectedCountrie) === '{}' ?
    //               <Autocomplete sx={{ mb: 3 }} size="small" disableClearable={true}
    //                   options={listCountries.countrys}
    //                   inputValue="" 
    //                   getOptionLabel= {(options) => options.country}
    //                   renderInput={(params)=><TextField {...params} label="Страна" />}
    //                   onChange={(event, value) => dispatch({type:'UPDATE_COUNTRIE', payload: value},)}/>  : ('') }
    //          : '')    
    //         </Stack>          
    //         <Stack width={220}>
    //                 <Grid container spacing={1}  direction="row" justifyContent="center">                    
    //                     {JSON.stringify(selectedGenre) !== '{}' ? <Chip label={`Жанр: ${selectedGenre.genre}`} sx={{mb: 2 }}
    //                                                                 onDelete={() => dispatch({type:'DELETE_GENRE'})}/> : ''}
    //                     {JSON.stringify(selectedCountrie) !== '{}' ? <Chip label={`Страна: ${selectedCountrie.country}`} sx={{mb: 2 }}
    //                                                                 onDelete={() => dispatch({type:'DELETE_COUNTRIE'})}/> : ''}          
    //                     {JSON.stringify(selectedCollection) !== '{}' ? <Chip label={`Коллекция: ${selectedCollection.top}`} 
    //                                                                 sx={{mb: 2 }}
    //                                                                 onDelete={() => dispatch({type:'DELETE_TOP_COLLECTION'})}/> : ''}   
    //                 </Grid>
    //         </Stack>    
    //      </Grid>
    //  )  : (''))
    // </>
    // )};
