import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RootRouter from 'routers/root';
import { ScrollToTop } from 'components';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RootRouter />
    </BrowserRouter>
  );
};
export default App;
