import React from 'react';
import Footer from '../../components/Footer';
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <React.Fragment>
            <Outlet />
            <Footer />
        </React.Fragment>
    );
};
export default Layout;