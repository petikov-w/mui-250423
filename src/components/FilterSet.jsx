
import {Grid, Stack, Chip } from '@mui/material';

import { FilterTop } from './FilterTop'
import { FilterSerial } from './FilterSerial';



export const FilterSet = (props) => {
    
    const { typePage } = props;
        
    return (
    <>
         <Grid  container direction="column" alignItems="center" sx={{ width: '20%', ml: 3, mb: 3 }}>       
            {/* <Stack width={220}>             */}
            <Stack sx={{ width: '100%'}}>            
                <FilterTop typePage={typePage}/>
                <FilterSerial typePage={typePage}/>             
            </Stack>          
            {/* <Stack width={220}>
                    <Grid container spacing={1}  direction="row" justifyContent="center">                    
                        {JSON.stringify(selectedGenre) !== '{}' ? <Chip label={`Жанр: ${selectedGenre.genre}`} sx={{mb: 2 }}
                                                                    onDelete={() => dispatch({type:'DELETE_GENRE'})}/> : ''}
                        {JSON.stringify(selectedCountrie) !== '{}' ? <Chip label={`Страна: ${selectedCountrie.country}`} sx={{mb: 2 }}
                        
                        {JSON.stringify(selectedCollection) !== '{}' ? <Chip label={`Коллекция: ${selectedCollection.top}`} 
                                                                    sx={{mb: 2 }}
                                                                    onDelete={() => dispatch({type:'DELETE_TOP_COLLECTION'})}/> : ''}  
                    </Grid>
            </Stack>     */}
         </Grid>     
    </>
    );
};
