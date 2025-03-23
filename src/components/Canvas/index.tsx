import { useCanvas } from '../../contexts/CanvasProvider.tsx';


const Canvas = () => {
  const { canvasRef } = useCanvas();

  return (
    <div className="flex flex-col justify-start items-center pt-28 px-4 pb-4 min-h-dvh">
      <canvas className="border border-border-color" ref={canvasRef} />
    </div>
  );
};

export default Canvas;
