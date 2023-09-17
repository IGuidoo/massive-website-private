// components/TestLayout.jsx
import Aids from "@/components/Navbar"
import Footer from "@/components/Footer";

import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
    <div className="relative">
      <Aids />
       <div className="absolute top-0 left-0 -z-10 w-full h-full custom-bg-gradient"></div>
    </div>
      <main>
        {children}
      </main>
      <Footer />
    </>

  );
};

export default Layout;
