import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <div className="flex flex-col w-screen h-screen overflow-x-hidden">
    <Header />
    <section className="container mx-auto flex-1 py-10 px-5">
      {children}
    </section>
    <Footer />
  </div>
);

export default Layout;
