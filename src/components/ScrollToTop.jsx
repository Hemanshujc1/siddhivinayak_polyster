import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component automatically scrolls the window to top (0, 0)
 * whenever the react-router path changes.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Instant scroll ensures layout calculations don't look jittery during page transitions
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
