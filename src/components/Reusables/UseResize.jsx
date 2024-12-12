import { useEffect, useState } from 'react'

const UseResize = () => {
  const [desktop, setdesktop] = useState(false)
  const [large, setlarge] = useState(false)
  const [header, setheader] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && window.innerWidth < 1280) {
        setdesktop(true);
        setlarge(false);
      } else if (window.innerWidth >= 1280) {
        setdesktop(false);
        setlarge(true);
      } else {
        setdesktop(false);
        setlarge(false);
      }
    };
    
    const handleHResize = () => {
      if (window.scrollY >= 50) {
        setheader(true);
      } else {
        setheader(false);
      }
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener("scroll", handleHResize);
    handleResize();
    handleHResize();
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleHResize);
    };
  }, []);
  return (
   {desktop,
    large,
   setdesktop,
   setheader,
   header}
  )
}

export default UseResize