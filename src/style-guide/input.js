import React from 'react';

const sizes = {
  sm: 'py-0 px-1',
  md: 'py-1 px-1',
  lg: 'py-2 px-1',
};

const Base = React.forwardRef((args, ref) => {
  const props = { ...args, ref };
  return <input className={`${props.className} ${sizes[props.size]}`} {...props} />;
});

export default {
  Base,
};
