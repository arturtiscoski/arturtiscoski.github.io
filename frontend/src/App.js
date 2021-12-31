import React, { lazy, useEffect } from 'react';
import Suspense from './suspense/Suspense';
import documentTitle from './consys/documentTitle';
import favicon from './consys/favicon';
import faviconImage from '../img/favicon.png';

const Root = lazy(() => import('./root/Root'));

const App = () => {
  useEffect(() => {
    favicon.set({ url: faviconImage })
    documentTitle.set("Star wars");
  }, [])

  return (
  <Suspense>
    <Root />
  </Suspense>
)}

export default App;