import React from 'react'

// Material UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// Arquivos de config css
import TelaPrincipalStyles from './TelaPrincipalStyles';


const TelaPrincipal = () => {

  const { Div, Div2 } = TelaPrincipalStyles();

  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    >
                    <MenuIcon />
                      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Restaurante
                      </Typography>
                    </IconButton>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
        <Div><p>Texto</p></Div>
        <Div2><p>Texto 2</p></Div2>
    </div>

  )
}

export default TelaPrincipal;



