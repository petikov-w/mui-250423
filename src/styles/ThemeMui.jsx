// import { Palette } from '@mui/icons-material';
import {createTheme } from '@mui/material/styles';

export const ThemeMui = (theme) => createTheme({
    palette: {
        mode: theme,
        primary: {   
             main: '#ffa500',              
        },
        chips: {          
          main: '#ffffff',
          contrastText: '#000000',
        },
        pagination: {                
            main: theme==='light' ? '#ffa500' : '#a39c9c', 
            contrastText: theme==='light' ? '#1c0dba' : '#ffffff',            
        },      
    },
    typography: {
        subtitle1: {
          fontSize: 18,
          color: theme==='light' ? '#332d2d' : '#a39c9c' ,
        },
        rating: {
          fontSize: 16,
          fontWeight: 600,          
          color: 'white',
         // color: theme==='light' ? '#332d2d' : '#a39c9c' ,
        },
        s1: {
          fontSize: 13,
          fontWeight: 500,
          color: 'white',
        },
        s2: {
          fontSize: 16,
          fontWeight: 800,
          color: 'green',
        },

        logo_header: {
            fontSize: 22,
            color: theme==='light' ? '#7a5ad1' : '#a39c9c' ,
            fontWeight: 'bold', 
            letterSpacing: 6,
            textTransform: 'uppercase',
          },
        logo_footer: {
            fontSize: 18,
            color: theme==='light' ? '#118207' : '#a39c9c' ,
            fontWeight: 'bold', 
            letterSpacing: 6,
            textTransform: 'uppercase',
        },  
       
      },
});
