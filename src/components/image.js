import { Img } from 'react-image';
import React from 'react';
import { Icons, Loader } from 'components';
const { REACT_APP_API_ROOT } = process.env;
const makeUrl = (sources) =>
  sources.map((src) => (!!src ? `${REACT_APP_API_ROOT}/${src}` : <Icons.BrokenImage />));

// use Dynamic component to handle urls provided by back-end
const Dynamic = ({ src, fb1, fb2, alt = '', ...props }) => (
  <Img
    src={makeUrl([src + fb1, fb2])}
    alt={alt}
    loader={<Loader.Static />}
    unloader={<Icons.BrokenImage />}
    {...props}
  />
);

// use ImageStatic to handle image urls local/absolute ...
const Static = ({ src, fb1, fb2, alt = '', ...props }) => {
  return (
    <Img
      src={[src, fb1, fb2]}
      alt={alt}
      {...props}
      loader={<Icons.Puzzle className='w-2/12 m-auto p-2' />}
      unloader={<Icons.BrokenImage className='max-w-sm m-auto p-2' />}
    />
  );
};

export default { Static, Dynamic };
