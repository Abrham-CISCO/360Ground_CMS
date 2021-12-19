import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Grid, ListItemButton, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link, Route, Routes } from "react-router-dom";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TraineePage from './trainees/tranieesPage'
import ModulesPage from './modules/modulesPage'
import PersonIcon from '@mui/icons-material/Person';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import UserPage from './users/usersPage';
import BookIcon from '@mui/icons-material/Book';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ModuleDetail from './modules/moduleDetail';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MainContainer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState("1");
  const [breadcrumb, setBreadcrumbs] = React.useState("Breadcrumbs");
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const linkStyle = {
    textDecoration:'none',
    color:'black'
  }

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" color={"primary"} open={open}>
        <Toolbar style={{width:'100%'}}>
        <Menu
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleCloseMenu}
        onClick={handleCloseMenu}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            width: 240,
            '& .MuiAvatar-root': {
              width: 50,
              height: 50,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        <MenuItem>
          <Grid container>
            <Grid item xs={4}><Avatar/>
            <Divider sx={{mt:1}}/>
            </Grid>
            <Grid item xs={8} sx={{justifyContent:'start'}}>
              <Grid container>
                <Grid item xs={12}>
                  <b>Abrham Getachew</b>
                </Grid>
                <Grid item xs={12}>
                  Administrator
                </Grid> 
              </Grid>
              
           <Divider sx={{mt:1}}/>
            </Grid>            
          </Grid>
        </MenuItem>
        <MenuItem>
        
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
            
            <Stack direction={"row"} sx={{width:"100%"}} spacing={10} alignItems={"center"}>
              <Box justifyContent="flex-start" sx={{width:"90%"}}>{ breadcrumb }</Box>
              <Box justifyContent="flex-end">
                <Grid  container>
                  <Grid item xs = {12}>
                  <IconButton onClick={handleClick}>
                  <Avatar/>

                  </IconButton>
                  </Grid>
                </Grid>
              </Box>
            </Stack>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          LOGO GOES HERE
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
          
        </DrawerHeader>
        <Divider />
        <List >
          <Link to={'/trainees'} style={linkStyle}>
            <ListItemButton button key={'Trainees'} selected={activeTab=='1'}>
                <ListItemIcon>
                  <PersonIcon/>
                </ListItemIcon>
                <ListItemText primary={'Trainees'} />
            </ListItemButton>
          </Link>
          <Link to={'/modules'} style={linkStyle}>
            <ListItemButton button key={'Modules'} selected={activeTab=='2'}>
                <ListItemIcon >
                  <BookIcon/>
                </ListItemIcon>
                <ListItemText primary={'Modules'} />
            </ListItemButton>
          </Link>

        <Link to={'/users'} style={linkStyle}>
            <ListItemButton button key={'Users'} selected={activeTab=='3'}>
                <ListItemIcon>
                  <PeopleAltIcon/>
                </ListItemIcon>
                <ListItemText primary={'Users'} />
            </ListItemButton>
          </Link>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader/>
        <Routes>
          <Route path="/trainees" element={<TraineePage setBreadcrumbs={setBreadcrumbs} setActiveTab = {setActiveTab}/>} />
          <Route path="/assesements" element={<ModulesPage setBreadcrumbs={setBreadcrumbs} setActiveTab = {setActiveTab}/>} />
          <Route path="/modules" element={<ModuleDetail/>} />
          <Route path="/users" element={<UserPage setBreadcrumbs={setBreadcrumbs} setActiveTab = {setActiveTab}/>} />
         </Routes>
      </Box>
    </Box>
  );
}
