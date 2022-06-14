import  * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const appTheme = createTheme({
    palette: {
        colors: {
            waterblue: '#ACEDFF',
            lighterblue: '#CAE5FF',
            lightblue: '#89BBFE',
            lightblack: '#615D6C',
            thindarkblue: '#6F8AB7',
        }
    }
})   

export default appTheme;