import React from 'react';
import pMinDelay from 'p-min-delay';
import loadable from '@loadable/component';
import Loader from 'components/loader';

const DELAY = 200;

export default (componentImport) =>
  loadable(() => pMinDelay(componentImport, DELAY), { fallback: <Loader.Absolute /> });
