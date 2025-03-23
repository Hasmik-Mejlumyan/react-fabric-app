import { useState, useEffect, type ChangeEvent } from 'react';

import Input from '../../UI/Input';
import SettingContainer from '../../shared/SettingContainer';

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
    <SettingContainer>
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
    </SettingContainer>
  );
};

export default CanvasSettings;
