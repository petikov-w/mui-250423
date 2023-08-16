
import {Autocomplete, TextField, Chip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

export const FilterTop = (props) => {
    
     //   const { typePage } = props;
        
       const dispatch = useDispatch();      
     //   const listTop = useSelector(state => state.slistTopCollection);   
       const listTop = useSelector(state => state.setLists.collectionsTop);   
       const selectedCollection= useSelector(state=>state.filters.top_collection); 
       const currentPage = useSelector(state=>state.settings.currentPage);  
    
       const ListTopCollection = () => JSON.stringify(listTop) === '{}' ? '' : 
            <Autocomplete sx={{mb: 2 }} size="small" disableClearable={true}                
            options={listTop}
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
            {/* { typePage === 'top' ?   */}
            { currentPage === 'top' ?  
                                 JSON.stringify(selectedCollection) === '{}' ? <ListTopCollection /> 
                                                                    : <ChipSelectedCollection /> 
                                 : ''}
            </>
       );
};

   