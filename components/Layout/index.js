import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <div className="flex flex-col h-screen">
    <Header />
    <div id="container" className="container mx-auto flex-1">
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
