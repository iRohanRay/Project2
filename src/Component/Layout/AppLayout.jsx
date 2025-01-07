import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../UI/Header';
import Footer from '../../UI/Footer';

const AppLayout = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        
        setIsHeaderVisible(false);
      } else {
        
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className="h-screen overflow-y-auto scrollbar-hide"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
  
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Header />
      </div>

      {/* between header and footer */}
      <div className="pt-[80px]">
        <Outlet />
      </div>
         <div className='mt-8'>
          {/* Footer */}
      <Footer />
         </div>
      
    </div>
  );
};

export default AppLayout;
