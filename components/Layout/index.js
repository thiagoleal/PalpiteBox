import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <div>
    <Header />
    <div className="container mx-auto" />
    {children}
    <Footer />
  </div>
);

export default Layout;
