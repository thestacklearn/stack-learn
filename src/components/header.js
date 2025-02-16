import React, { useEffect, useState } from 'react'

const Header = ({ children }) => {
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const MAX_WIDTH_FOR_MOBILE = 900;
  const [top, setTop] = useState(true);
  const url = typeof window !== 'undefined' ? window.location.href : '';
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > (width > 640 ? 150 : 50) ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);
  return (
    <header className={`grid grid-template-columns[1fr minmax(min-content, max-content)] w-full py-5 z-20 fixed ${!top && 'scrolled bg-white shadow-[0_2px_28px_0_rgba(0,0,0,.09)]'} ${(url.includes('privacy-policy') || url.includes('terms-of-use') || url.includes('refund-policy')) && 'other-url bg-white shadow-[0_2px_28px_0_rgba(0,0,0,.09)]'}`}>
      { children }
    </header >
  )
}

export default Header
