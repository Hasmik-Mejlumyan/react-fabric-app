import { lazy } from 'react';
import BaseLayout from './components/layouts/BaseLayout';
import DarkModeSetup from './components/shared/DarkModeSetup';

import CanvasProvider from './contexts/CanvasProvider.tsx';

const Canvas = lazy(() => import('./components/Canvas'));

const App = () => {
  return (
    <CanvasProvider>
      <BaseLayout>
        <DarkModeSetup />
        <Canvas />
      </BaseLayout>
    </CanvasProvider>
  );
};

export default App;
