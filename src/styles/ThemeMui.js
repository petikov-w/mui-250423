import { ThemeProvider, createTheme } from '@mui/material/styles';


export const ThemeMui = (theme) => createTheme({
    palette: {
        mode: theme,
        primary: {
            main: '#b8b8bf',
        },
        secondary: {
            main: '#f50057',
        },
    },
});