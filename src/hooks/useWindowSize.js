import { useEffect, useState } from 'react';
import { breakpoints } from 'common';

const checkBreakpoint = (width) => {
  return Object.values(breakpoints).find((bp) => width >= bp.mt);
};

export default () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
    breakpoint: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        breakpoint: checkBreakpoint(window.innerWidth),
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const { width, height, breakpoint } = windowSize;
  return { size: { width, height }, breakpoint };
};
