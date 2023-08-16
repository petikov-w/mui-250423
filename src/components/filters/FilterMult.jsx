
import {Autocomplete, TextField, Chip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

export const FilterMult = (props) => {
    
      //  const { typePage } = props;
        
       const dispatch = useDispatch();      
       const listCountries = useSelector(state => state.setLists.countrys);
       const listYearsCollection = useSelector(state => state.setLists.collectionsYears);
       const selectedYearsCollection= useSelector(state=>state.filters.years_collection);
       const selectedCountrie= useSelector(state=>state.filters.country);  
       const currentPage = useSelector(state=>state.settings.currentPage); 
    
       const ListCountries = () => JSON.stringify(listCountries) === '{}' ? '' : 
       <Autocomplete sx={{ mb: 3 }} size="small" disableClearable={true}
                         options={listCountries}
                         inputValue="" 
                         getOptionLabel= {(options) => options.country}
                         renderInput={(params)=><TextField {...params} label="Страна" />}
                         onChange={(event, value) => dispatch({type:'UPDATE_COUNTRIE', payload: value},)}/>;
      
       const ListYears = () => JSON.stringify(listYearsCollection) === '{}' ? '' : 
       <Autocomplete sx={{mb: 2 }} size="small" disableClearable={true}                
                         options={listYearsCollection}
                         inputValue="" 
                         getOptionLabel= {(options) => options.range}         
                         renderInput={(params)=><TextField {...params} label="Период" />}                  
                         onChange={(event, value) => dispatch({type:'UPDATE_YEARS_COLLECTION', payload: value},)}/>;      

       

       const ChipSelectedCountrie = () =>  <Chip label={`Страна: ${selectedCountrie.country}`} sx={{mb: 2 }}
                                              onDelete={() => dispatch({type:'DELETE_COUNTRIE'})}/>;

       const ChipSelectedYears = () =>  <Chip label={`Период: ${selectedYearsCollection.range}`} sx={{mb: 2 }}
                                                   onDelete={() => dispatch({type:'DELETE_YEARS_COLLECTION'})}/>;
       

    
       return (
            <>          
               { currentPage === 'mult' ?  JSON.stringify(selectedCountrie) === '{}' ? <ListCountries /> : <ChipSelectedCountrie />  : ''}  
               { currentPage === 'mult' ?  JSON.stringify(selectedYearsCollection) === '{}' ? <ListYears /> : <ChipSelectedYears />  : ''}
               
               {/* { typePage === 'mult' ?  JSON.stringify(selectedCountrie) === '{}' ?
                <ListCountries /> : <ChipSelectedCountrie />  : ''}  
               { typePage === 'mult' ?  JSON.stringify(selectedYearsCollection) === '{}' ? 
               <ListYears /> : <ChipSelectedYears />  : ''}
                */}
            </>
       );
};
    