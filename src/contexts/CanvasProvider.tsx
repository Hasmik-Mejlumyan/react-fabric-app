import {
  createContext,
  useRef,
  useState,
  useEffect,
  useContext,
  type FC,
  type PropsWithChildren,
  type RefObject,
} from 'react';
import { Canvas } from 'fabric';

interface ICanvasContext {
  canvasRef: RefObject<HTMLCanvasElement | null>;
  canvas: Canvas | null;
}

const CanvasContext = createContext<ICanvasContext>({} as ICanvasContext);

const CanvasProvider: FC<PropsWithChildren> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<Canvas | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const initCanvas = new Canvas(canvasRef.current, {
        width: 500, // TODO move value to constants
        height: 500, // TODO move value to constants
      });

      initCanvas.backgroundColor = '#fff'; // TODO adjust for dark mode
      initCanvas.renderAll();

      setCanvas(initCanvas);

      return () => {
        initCanvas.dispose();
      };
    }
  }, []);

  return (
    <CanvasContext.Provider value={{ canvasRef, canvas }}>
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => {
  return useContext(CanvasContext);
};

export default CanvasProvider;
