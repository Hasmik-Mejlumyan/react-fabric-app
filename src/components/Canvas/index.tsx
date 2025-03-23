import ControlBar from './ControlBar';
import Toolbar from './Toolbar';

import { useCanvas } from '../../contexts/CanvasProvider';


const Canvas = () => {
  const { canvasRef } = useCanvas();

  return (
    <div className="flex flex-col justify-start items-center pt-28 px-4 pb-4 min-h-dvh">
      <Toolbar />
      <canvas className="border border-border-color" ref={canvasRef} />
      <ControlBar />
    </div>
  );
};

export default Canvas;
