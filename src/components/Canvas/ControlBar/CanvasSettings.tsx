import { useState, useEffect, type ChangeEvent } from 'react';

import Input from '../../UI/Input';

import { useCanvas } from '../../../contexts/CanvasProvider';

import { defaultCanvasSize } from '../../../constants/global.ts';

const CanvasSettings = () => {
  const { canvas } = useCanvas();

  const [canvasWidth, setCanvasWidth] = useState(defaultCanvasSize.width);
  const [canvasHeight, setCanvasHeight] = useState(defaultCanvasSize.height);

  const handleWidthChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, '');
    const initValue = parseInt(value, 10) || 0;

    if (initValue >= 0) {
      setCanvasWidth(initValue);
    }
  };

  const handleHeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, '');
    const initValue = parseInt(value, 10) || 0;

    if (initValue >= 0) {
      setCanvasHeight(initValue);
    }
  };

  useEffect(() => {
    if (canvas) {
      canvas.setWidth(canvasWidth);
      canvas.setHeight(canvasHeight);
      canvas.renderAll();
    }
  }, [canvasWidth, canvasHeight, canvas]);

  return (
    <div className="flex flex-col gap-3 bg-toolbar-bg-color py-6 px-2 rounded text-left empty:p-0 shadow shadow-gray-200">
      <Input
        label="Canvas Width"
        labelClassName="bg-toolbar-bg-color"
        value={canvasWidth}
        onChange={handleWidthChange}
      />
      <Input
        label="Canvas Height"
        labelClassName="bg-toolbar-bg-color"
        value={canvasHeight}
        onChange={handleHeightChange}
      />
    </div>
  );
};

export default CanvasSettings;
