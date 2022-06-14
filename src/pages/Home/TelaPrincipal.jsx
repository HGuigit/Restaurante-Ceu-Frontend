
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

import { Link } from "react-router-dom";

import Carousel from 'react-material-ui-carousel';

// Arquivos de config css
import TelaPrincipalStyles from './TelaPrincipalStyles';

const pages = ['Cardápio', 'Equipe', 'Login' , 'Cadastro'];


const TelaPrincipal = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { Div, Div2, DivFooter } = TelaPrincipalStyles();


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
      <div style={{height: "100vh", display: 'flex', flexDirection: 'column'}}>
        <header sx={{height: "10vh", flex: 1}}>
          <AppBar 
            position="static" 
            sx={{
              bgcolor: 'colors.lightblack',
              opacity: 0.5,
            }}
          >
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <LocalDiningIcon sx={{fontSize:'inherit', display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 800,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Pedacinho do Céu
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: 'block', md: 'none' },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="justify">{page}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <LocalDiningIcon sx={{fontSize:'inherit', height: 60, display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href=""
                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Pedacinho do Céu
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  {pages.map((page) => (
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </header>
        <main style={{height: "80vh", flex: 1}}>
                    Main Content Placeholder

        </main>
        <footer sx={{height: "10vh", flex: 1}}>
          <DivFooter sx={{bgcolor:'colors.lightblack '}}>
            <h3>Trabalho de Sistemas Orientados a Objetos - Sistema de Restaurante</h3>
            <p>Céu 2000 &copy; 2022</p>
          </DivFooter>
        </footer>
      </div>
  );
};
export default TelaPrincipal;
