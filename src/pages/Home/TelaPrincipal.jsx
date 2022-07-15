
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
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {  CardActionArea, CardActions } from '@mui/material';


import axios from '../../services/api';


import Icon from '@mui/material/Icon';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Clouds from '../../../src/assets/clouds.png'
import Dish from '../../../src/assets/dish.png'

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// Arquivos de config css
import TelaPrincipalStyles from './TelaPrincipalStyles';

const pages = ['Cardápio', 'Equipe', 'Login' , 'Cadastro'];


const TelaPrincipal = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [funcionarios, setFuncionarios] = React.useState([]);

  const { Div, Div2, DivFooter } = TelaPrincipalStyles();


  async function getFuncionarios(){

    let funcionarios = [];
    
    try {

      funcionarios = await axios.get('/funcionario/');

    } catch (error) {

      alert('Erro ao cadastrar pegar informações adicionais!');

    }
    
    const shuffledArrayFunc = funcionarios.data.sort(() => 0.5 - Math.random());
    let selected = shuffledArrayFunc.slice(0, 4);
    
    console.log(selected)

    setFuncionarios(selected);

  }


  React.useEffect(() => {
    getFuncionarios();
  }, [])


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://cdn.oimenu.com.br/base/178/254/5ac/fotografia_de_panqueca.jpg',
      title: 'Panqueca',
    },
    {
      img: 'https://images.unsplash.com/photo-1656365118550-102b7b139716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Cerveja',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1655312214809-553e851782ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Cooking book',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1656057205408-4a0a62cf2dfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Morango',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Weed',
    },
    {
      img: 'https://images.unsplash.com/photo-1652169890471-17c3e68bf920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Waffle',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1654912912506-f3685d8df808?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNnx4alBSNGhsa0JHQXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Hamburguer',
    },
    {
      img: 'https://images.unsplash.com/photo-1655129870529-f7cdc464a372?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc2fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Cereja',
      cols: 2,
    },
  ];

  const shuffledArray = itemData.sort(() => 0.5 - Math.random());
  let selected = shuffledArray.slice(0, 6);



  return (
      <div style={{height: "100vh", display: 'flex', flexDirection: 'column', backgroundColor:'white', flex:1}}>
        <header sx={{height: "10%"}}>
          <AppBar 
            position="static" 
            sx={{
              bgcolor: 'colors.default',
              opacity: 1,
            }}
          >
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <LocalDiningIcon sx={{fontSize:30, display: { xs: 'none', md: 'flex' }, mr: 1, color: (theme) => theme.palette.colors.begie}} />
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
                    textDecoration: 'none',
                    color: (theme) => theme.palette.colors.begie
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
                        <Typography sx={{color: (theme) => theme.palette.colors.black}} textAlign="justify">{page}</Typography>
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
                      sx={{ my: 2, display: 'block', color: (theme) => theme.palette.colors.begie}}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </header>
        <main style={{display:'flex', flex: 1, flexDirection: 'column'}}>
                <Grid container sx={{flex: 1, backgroundColor: (theme) => (theme.palette.colors.default_dark)}} pt={4} pb={4}>
                  <Grid item xs={4} sx={{
                    diplay: 'flex', 
                    flexDirection: 'row', 
                    alignItems:'center', 
                    justifyContent: 'center'
                  }}>
                    <div style={{backgroundImage: `url(${Clouds})`, backgroundSize: 230, 
                    backgroundRepeat: "no-repeat", height: '100%', width: '100%', backgroundPositionX: 'center', 
                    backgroundPositionY:'center', backgroundColor: (theme) => (theme.paletter.colors.default_dark), display:'flex', alignItems:"center", justifyContent:'center'}}>
                      <img src={Dish} style={{width:180, height:180, opacity:1}}/>
                    </div>
                  </Grid>
                  <Grid item xs={8} sx={{display: 'flex', alignItems:"center", justifyContent:"center"}}>
                    <Typography variant='p' sx={{ color: (theme) => theme.palette.colors.begie, textAlign:'justify', fontWeight:500, fontSize:'1.3em'}} mr={3} pr={3} pl={3}>
                        O pedacinho do céu é um restaurante para todas as suas necessidades, temos as melhores comidas prontas para te levar ao céu, com seu 
                        esplendoroso sabor e nossa equipe preparada faremos uma das melhores refeições da sua vida!
                    </Typography> 
                  </Grid>
                </Grid>
                <Grid container sx={{flex:1, backgroundColor: (theme) => (theme.palette.colors.begie)}}>
                  <Grid item xs={12} sx={{display:'flex', alignItems:"center", justifyContent:"flex-start", flexDirection:'column'}} mt={5}>
                      <Typography variant='h4' sx={{color: (theme) => theme.palette.colors.black, letterSpacing: 1.5, fontWeight:'bolder'}}>
                        Aqui você tem das melhores receitas
                      </Typography>
                      <Typography variant='p' sx={{fontWeight:'bold'}}>
                        Temos receitas muito gostosas para o gosto de cada um, veja algumas de nossas receitas:
                      </Typography>
                  </Grid>
                  <Grid container mt={4}>
                    {
                      selected.map((recipe) => 
                      <Grid item xs={2} style={{diplay:'flex', flexDirection:"column"}}  >
                          <Avatar
                            alt="Receita"
                            src={recipe.img}
                            sx={{ width: 150, height: 150, alignSelf:"center", marginLeft:'auto', marginRight:'auto'}}
                          />
                          <Typography mt={3} mb={4} sx={{fontWeight:'bold'}}>{recipe.title}</Typography>
                      </Grid>
                      )
                    }
                  </Grid>
                </Grid>
                <Grid container sx={{flex:1, backgroundColor: (theme) => (theme.palette.colors.default)}} >
                    <Grid item xs={12} sx={{display:'flex', alignItems:"center", justifyContent:"flex-start", flexDirection:'column'}} mt={5} mb={5}>
                      <Typography variant='h4' sx={{color: (theme) => theme.palette.colors.begie, letterSpacing: 1.5, fontWeight:'bolder'}}>
                        Nossa equipe é capacitada, sempre fazemos o melhor por você.
                      </Typography>
                      <Typography variant='p' sx={{fontWeight:'bold', color: (theme) => theme.palette.colors.begie}}>
                        Aqui temos o exemplo de alguns dos nossos funcionários, prontos para seu atendimento: 
                      </Typography>
                    </Grid>
                    <Grid container xs={12}>
                    {
                      funcionarios.length === 4 ? 
                        funcionarios.map((funcionario, index) => 
                        <Grid item xs={3} mb={5} key={index} sx={{display:'flex', alignItems:'center', flexDirection: 'center'}}> 
                            <Card sx={{ maxWidth: 200, marginLeft:'auto', marginRight:'auto', backgroundColor:(theme) => theme.palette.colors.begie }}>
                              <CardActionArea>
                                <CardMedia
                                  component="img"
                                  height="140"
                                  image={funcionario.urlImg}
                                  alt="funcionario"
                                />
        
                                <Typography variant='p' sx={{fontSize: 20}}>
                                    {funcionario.nome} 
                                </Typography>
                              </CardActionArea>
                              <CardActions sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                  <Link underline='hover' color='inherit'>
                                    <Icon>
                                      <LinkedInIcon size="large"/>
                                    </Icon>
                                  </Link>
                                  <Link underline='hover'  color='inherit'>
                                    <Icon>
                                      <FacebookIcon cursor='pointer'/>
                                    </Icon>
                                  </Link>
                                  <Link Link underline='hover'  color='inherit'>
                                    <Icon>
                                      <TwitterIcon cursor='pointer'/>
                                    </Icon>
                                  </Link>
                              </CardActions>
                           </Card>
                        </Grid>
                        )
                      : <Grid item xs={12}>
                          <Typography variant='p' sx={{fontWeight:'bold', color: (theme) => theme.palette.colors.begie}}>
                            Erro ao carregar funcionarios.
                          </Typography>
                        </Grid>
                    }
                    </Grid>
                </Grid>
        </main>
          <DivFooter > 
             <div/>
             <h5>
              Trabalho de Sistemas Orientados a Objetos - Sistema de Restaurante
              <br/>
              Céu 2000 &copy; 2022
             </h5>
              <div style={{display:'flex', alignItems:"center", justifyContent:'space-around', marginRight:30}}>
                  <Link underline='hover' sx={{color: (theme) => theme.palette.colors.begie}} color='inherit'>
                    <Icon>
                      <InstagramIcon  cursor='pointer'/>
                    </Icon>
                  </Link>
                  <Link underline='hover' sx={{color: (theme) => theme.palette.colors.begie}} color='inherit'>
                    <Icon>
                      <FacebookIcon cursor='pointer'/>
                    </Icon>
                  </Link>
                  <Link underline='hover' sx={{color: (theme) => theme.palette.colors.begie}} color='inherit'>
                    <Icon>
                      <TwitterIcon cursor='pointer'/>
                    </Icon>
                  </Link>
                  <Link underline='hover' sx={{color: (theme) => theme.palette.colors.begie}} color='inherit' href={'https://github.com/HGuigit/Restaurante-Ceu-Frontend'}>
                    <Icon>
                      <GitHubIcon cursor='pointer'/>
                    </Icon>
                  </Link>
              </div>
          </DivFooter>

      </div>
  );
};
export default TelaPrincipal;
