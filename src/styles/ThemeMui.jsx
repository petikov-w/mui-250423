// import { grey, orange } from '@mui/material/colors';
import {createTheme } from '@mui/material/styles';


export const ThemeMui = (theme) => createTheme({
    palette: {
        mode: theme,
        primary: {   
            main: '#ffa500 ', 
            contrastText: '#5f5959',      
            dark: '#713333',
            light: '#ce1b1b',
        },
        secondary: {   
            main: '#885e09 ', 
            contrastText: '#7d5656',      
            
        },
    },
});

// export const ThemeMui = (theme) => createTheme({
//     palette: {
//         mode: theme,
//         primary: {
//             main: '#b8b8bf',
//         },
//         nav: {
//           main:  '#181816',
//         },

//         secondary: {
//             main: '#f50057',
//         },
//     },
// });