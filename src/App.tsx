import BaseLayout from './components/layouts/BaseLayout';
import Canvas from './components/Canvas';

import CanvasProvider from './contexts/CanvasProvider.tsx';

const App = () => {
  return (
    <CanvasProvider>
      <BaseLayout>
        <Canvas />
      </BaseLayout>
    </CanvasProvider>
  );
};

export default App;
