import BaseLayout from './components/layouts/BaseLayout';
import Canvas from './components/Canvas';
import DarkModeSetup from './components/shared/DarkModeSetup';


import CanvasProvider from './contexts/CanvasProvider.tsx';

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
