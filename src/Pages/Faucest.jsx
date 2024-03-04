import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Notice from './Notice';
import '../App.css'
import { useForm } from "react-hook-form"
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Faucest = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const { user, loginWithRedirect, logout } = useAuth0();
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {
                !user ? <MenuItem onClick={() => loginWithRedirect()}>Log In</MenuItem> : <MenuItem onClick={() => logout()}>Log Out</MenuItem>

            }
            <NavLink to='/faq'><MenuItem onClick={handleMenuClose}>FAQ</MenuItem></NavLink>

        </Menu>
    );

    console.log(user);


    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    const {
        register,
        handleSubmit,
    } = useForm()

    const [seletData, setSeletData] = React.useState('')

    const onSubmit = (data) => setSeletData(data.select)

    React.useEffect(() => {
        const name = user?.name;
        const email = user?.email;
        const photo = user?.picture
        
        if (user) {
            const userData = { name, email, photo }
            fetch('http://localhost:5000/getoprs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [user])

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar color='' position="static">
                    <Toolbar>
                        <NavLink to='/'>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                                className='text-color'
                            >
                                Faucets
                            </Typography>
                        </NavLink>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box className="gap-3" sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <form onChange={handleSubmit(onSubmit)} >
                                <select {...register("select")} className="btn border bg-tertiary heigit" name="select" id="select">
                                    <option value=" Arbitrum Rinkeby"> Arbitrum Rinkeby</option>
                                    <option value="BNB Chain Testnet">BNB Chain Testnet</option>
                                    <option value="Ethereum Rinkeby">Ethereum Rinkeby</option>
                                    <option value="Fantom Testnet">Fantom Testnet</option>
                                    <option value="Harmony Testnet">Harmony Testnet</option>
                                    <option value="POA Network Sokol">POA Network Sokol</option>
                                    <option value="Polygon Mumbai">Polygon Mumbai</option>
                                </select>
                            </form>
                            <button type="button" className="btn btn-outline-primary heigit">Connect Wallet</button>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                {
                                    user?.picture ? <img className='picture' src={user?.picture} alt="" /> : <AccountCircle />
                                }
                            </IconButton>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </Box>
            {/* <Notice seletData={seletData}></Notice> */}
        </div>
    );
};

export default Faucest;