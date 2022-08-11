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
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './nav.css';

const pages = ['כל המוצרים' , '  סל קניות','הרשמה','כניסה'];
const settings = ['AllProduct', 'Basket', 'register','login'];


const ResponsiveAppBar = () => {

  let currentUser=useSelector(state=>state.us.currentUser);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
   const navigate = useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  function handleCloseNavMenu(index)  {
    navigate('/'+settings[index])
    setAnchorElNav(null);
   
  };
  function handleCloseNavMenuAddProduct()  {
    navigate('/addProduct')

    setAnchorElNav(null);
   
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  //
  <nav>
   
  </nav>
  //
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
   
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <h2>MY BAKERY</h2>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page,index) => (
              <Button 
             
                key={page}
                onClick={()=>handleCloseNavMenu(index)}
                sx={{ my: 2, color: 'white', display: 'block', marginLeft:"200px" }}
              >
                {page}
              </Button>
            ))}
              {currentUser&&currentUser.job&& <Button id="butAdd"
                key="add"
                onClick={()=>handleCloseNavMenuAddProduct()}
                
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               הוסף מוצר
              </Button>}
            

          </Box>

          <Box sx={{ flexGrow: 0 }}>
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
