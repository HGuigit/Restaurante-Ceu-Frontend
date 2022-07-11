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
            red: '#EA1D2C',
            lightred: 'rgba(234, 29, 44, 0.7)',
            begie: '#fff5d7',
            coralpink: '#ff5e6c',
            yellow: '#feb300',
            pinkleaf: '#ffaaab',
            default_dark: '#115293',
            default: '#1976d2',
            default_light: '#4791db',
        }
    }
})   

export default appTheme;