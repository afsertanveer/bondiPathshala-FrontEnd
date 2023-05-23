import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <React.Fragment>
            <Header />
            <div className="min-h-body">
                <Outlet />
            </div>
            <Footer />
        </React.Fragment>
    );
};
export default Layout;