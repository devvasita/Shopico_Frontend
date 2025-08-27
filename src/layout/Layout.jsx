import React from 'react';
import Header from './Header/Header';

import Footer from './Footer/Footer';
import Home from '../pages/Home/Home';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh", // full height
                }}
            >
                <Header />

                <Outlet />

                <Footer />
            </Box>
        </>
    );
};

export default Layout;