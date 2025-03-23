import { useEffect, useState, type ChangeEvent } from 'react';
import { FabricObject, TFiller } from 'fabric';

import Input from '../../UI/Input';
import SettingContainer from '../../shared/SettingContainer';

import { useCanvas } from '../../../contexts/CanvasProvider';

const Settings = () => {
  const { canvas } = useCanvas();

  const [selectedObject, setSelectedObject] = useState<FabricObject | null>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [diameter, setDiameter] = useState(0);
  const [color, setColor] = useState<string | null | TFiller>(null);
  const [opacity, setOpacity] = useState(1);

  const handleObjectSelection = (object: FabricObject) => {
    if (!object) {
      return;
    }

    setSelectedObject(object);
    setOpacity(object.opacity);

    if (object.type === 'rect') {
      setWidth(Math.round(object.width * object.scaleX));
      setHeight(Math.round(object.height * object.scaleY));
      setColor(object.fill);
      setDiameter(0);
    } else if (object.type === 'circle') {
      setDiameter(Math.round(object.width * object.scaleX));
      setColor(object.fill);
      setWidth(0);
      setHeight(0);
    } else if (object.type === 'textbox') {
      setColor(object.fill);
    }
  };

  const clearSettings = () => {
    setWidth(0);
    setHeight(0);
    setDiameter(0);
    setColor(null);
    setOpacity(1);
  };

  const handleWidthChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, '');
    const initValue = parseInt(value, 10) || 0;

    setWidth(initValue);

    if (selectedObject && selectedObject.type === 'rect' && initValue >= 0) {
      selectedObject.set({ width: initValue / selectedObject.scaleX });
      canvas?.renderAll();
    }
  };

  const handleHeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, '');
    const initValue = parseInt(value, 10) || 0;

    setHeight(initValue);

    if (selectedObject && selectedObject.type === 'rect' && initValue >= 0) {
      selectedObject.set({ height: initValue / selectedObject.scaleY });
      canvas?.renderAll();
    }
  };

  const handleDiameterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, '');
    const initValue = parseInt(value, 10) || 0;

    setDiameter(initValue);

    if (selectedObject && selectedObject.type === 'circle' && initValue >= 0) {
      selectedObject.set({ radius: initValue / 2 / selectedObject.scaleX });
      canvas?.renderAll();
    }
  };

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setColor(value);

    if (selectedObject) {
      selectedObject.set({ fill: value });
      canvas?.renderAll();
    }
  };

  const handleOpacityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value) || 0;
    let initValue = value;

    if (value > 1) {
      initValue = 1;
    } else if (value < 0) {
      initValue = 0;
    }

    setOpacity(initValue);

    if (selectedObject) {
      selectedObject.set({ opacity: initValue });
      canvas?.renderAll();
    }
  };


  useEffect(() => {
    if (canvas) {
      canvas.on('selection:created', (event) => {
        handleObjectSelection(event.selected[0]);
      });

      canvas.on('selection:updated', (event) => {
        handleObjectSelection(event.selected[0]);
      });

      canvas.on('selection:cleared', () => {
        setSelectedObject(null);
        clearSettings();
      });

      canvas.on('object:modified', (event) => {
        handleObjectSelection(event.target);
      });

      canvas.on('object:scaling', (event) => {
        handleObjectSelection(event.target);
      });
    }

  }, [canvas]);


  return (
    <SettingContainer>
      {selectedObject && selectedObject.type === 'rect' && (
        <>
          <Input
            label="Width"
            labelClassName="bg-toolbar-bg-color"
            value={width}
            onChange={handleWidthChange}
          />
          <Input
            label="Height"
            labelClassName="bg-toolbar-bg-color"
            value={height}
            onChange={handleHeightChange}
          />
        </>
      )}
      {selectedObject && selectedObject.type === 'circle' && (
        <Input
          label="Diameter"
          labelClassName="bg-toolbar-bg-color"
          value={diameter}
          onChange={handleDiameterChange}
        />
      )}
      {selectedObject && (
        <>
          <Input
            label="Color"
            labelClassName="bg-toolbar-bg-color"
            wrapperClassName="min-w-[214px]"
            type="color"
            value={(color as string) ?? ''}
            onChange={handleColorChange}
          />
          <Input
            label="Opacity"
            labelClassName="bg-toolbar-bg-color"
            type="number"
            step={0.1}
            value={opacity}
            onChange={handleOpacityChange}
          />
        </>
      )}
    </SettingContainer>
  );
};

export default Settings;
