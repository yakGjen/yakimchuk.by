import React from 'react';

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = (props) => (
  <>
    <Header/>
    {props.children}
    <Footer/>
  </>
);

export default Layout;