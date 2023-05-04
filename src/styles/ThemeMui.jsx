import { green, orange } from '@mui/material/colors';
import {createTheme } from '@mui/material/styles';


export const ThemeMui = (theme) => createTheme({
    palette: {
        mode: theme,
        primary: {   
            main: orange[300],        
            light: orange[500],            
            dark: green[800],
           // contrastText: grey[900],
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