import { useCanvas } from '../../contexts/CanvasProvider.tsx';
import Input from '../UI/Input';


const Canvas = () => {
  const { canvasRef } = useCanvas();

  return (
    <div className="flex flex-col justify-start items-center pt-28 px-4 pb-4 min-h-dvh">
      <canvas className="border border-border-color" ref={canvasRef} />
      <Input type="color" label="Test" />
    </div>
  );
};

export default Canvas;
