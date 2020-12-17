import React from 'react';

const sizes = {
  sm: 'py-2 px-4',
  md: 'py-2 px-6',
  lg: 'py-2 px-8',
};

const Base = ({ className, children = 'Button', size = 'lg' }) => (
  <button
    className={`text-white px-4 py-2 rounded-lg hover:opacity-75 bg-gray-500   ${className} ${sizes[size]}`}
    children={children}
  />
);

const Primary = (props) => <Base className='bg-primary' {...props} />;
const Secondary = (props) => <Base className='bg-secondary' {...props} />;
const Danger = (props) => <Base className='bg-danger' {...props} />;

export default {
  Base,
  Primary,
  Secondary,
  Danger,
};
