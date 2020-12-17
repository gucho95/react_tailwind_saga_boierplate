import React from 'react';

const Base = ({ children = 'ContainerBase' }) => (
  <div className='container bg-gray-200' children={children} />
);

const Fluid = ({ children = 'Container Fluid' }) => (
  <div className='w-full bg-gray-300' children={children} />
);
export default {
  Base,
  Fluid,
};
