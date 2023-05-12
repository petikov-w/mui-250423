import {createTheme } from '@mui/material/styles';

export const ThemeMui = (theme) => createTheme({
    palette: {
        mode: theme,
        primary: {              
            main: '#ffa500 ', 
          
        },
        secondary: {   
            main: '#885e09 ', 
            contrastText: '#d15a5a',      
            
        },
    },
});
