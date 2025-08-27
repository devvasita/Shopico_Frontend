import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AccountCircle, Logout } from '@mui/icons-material';
import { HideOnScroll } from '../../utils';

import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { Link } from '@mui/material';


const drawerWidth = 240;



const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' } // you can add more
];

function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h5" sx={{ my: 2 }}>
                Shop<span style={{ color: "#17e2d1ff" }}>ico</span>
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton
                            component={NavLink}
                            to={item.path}
                            sx={{
                                textAlign: 'center',
                                '&.active': {
                                    color: '#17e2d1',
                                    fontWeight: 'bold'

                                },
                                '&:hover': {
                                    textDecoration: 'none',
                                }
                            }}
                        >
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}

            </List>
        </Box >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', flexDirection: "column" }}>
            <HideOnScroll {...props}>
                <AppBar component="nav" position='fixed' >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography
                            variant="h5"
                            component="div"
                            sx={{
                                fontWeight: 700,
                                letterSpacing: 1,
                                flexGrow: 1, display: { xs: 'none', sm: 'block' }
                            }}
                        >
                            Shop
                            <Box
                                component="span"
                                sx={{
                                    color: "#17e2d1",
                                }}
                            >
                                ico
                            </Box>
                        </Typography>

                        <Box sx={{ display: { xs: 'none', sm: 'block' }, }}>
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    component={NavLink}
                                    to={item.path}
                                    sx={{
                                        color: '#fff',
                                        mr: 4,
                                        pb: 1,
                                        '&.active': {
                                            borderBottom: '2px solid #17e2d1', // highlight active
                                            fontWeight: 'bold'
                                        },
                                        '&:hover': {
                                            textDecoration: 'none',
                                        }
                                    }}
                                >
                                    {item.label}
                                </Link>
                            ))}

                        </Box>

                        <Box sx={{ marginLeft: "auto" }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                disableScrollLock
                                anchorOrigin={{
                                    vertical: 35,
                                    horizontal: -95,
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                <MenuItem onClick={() => {
                                    navigate('/profile'),
                                        handleClose();
                                }} >


                                    Profile</MenuItem>
                                <MenuItem onClick={handleClose}><Logout />Logout</MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>

            {/*  Just to add space for our content added exttra tool bar */}
            <Toolbar sx={{ bgcolor: 'primary.main' }} />
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box >
    );
}


export default Header;
