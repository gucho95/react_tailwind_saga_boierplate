const breakpoints = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 2560,
};

export default {
  '2xl': { mt: breakpoints['2xl'], lt: breakpoints['3xl'], key: '2xl' },
  xl: { mt: breakpoints.xl, lt: breakpoints['2xl'], key: 'xl' },
  lg: { mt: breakpoints.lg, lt: breakpoints.xl, key: 'lg' },
  md: { mt: breakpoints.md, lt: breakpoints.lg, key: 'md' },
  sm: { mt: breakpoints.sm, lt: breakpoints.md, key: 'sm' },
  xs: { mt: 0, lt: breakpoints.sm, key: 'xs' },
};
