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

import { defaultCanvasSize } from '../constants/global.ts';

interface ICanvasContext {
  canvasRef: RefObject<HTMLCanvasElement | null>;
  canvas: Canvas | null;
}

const CanvasContext = createContext<ICanvasContext>({} as ICanvasContext);

const CanvasProvider: FC<PropsWithChildren> = ({ children }) => {
  const [canvas, setCanvas] = useState<Canvas | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const initCanvas = new Canvas(canvasRef.current, {
        width: defaultCanvasSize.width,
        height: defaultCanvasSize.height,
      });

      initCanvas.backgroundColor = '#fff';
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
