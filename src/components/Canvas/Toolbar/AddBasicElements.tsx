import { Circle, Rect, Textbox } from 'fabric';
import { CircleIcon, SquareIcon, TypeIcon } from 'lucide-react';

import Button from '../../UI/Button';

import { useCanvas } from '../../../contexts/CanvasProvider';

import { elementsDefaultColors, textboxDefaultFontSize } from '../../../constants/global.ts';

const AddBasicElements = () => {
  const { canvas } = useCanvas();

  const addRectangle = () => {
    if (!canvas) {
      return;
    }

    const rect = new Rect({
      top: 100,
      left: 50,
      width: 100,
      height: 60,
      fill: elementsDefaultColors.rect,
    });

    canvas.add(rect);
  };

  const addCircle = () => {
    if (!canvas) {
      return;
    }

    const circle = new Circle({
      top: 150,
      left: 150,
      radius: 50,
      fill: elementsDefaultColors.circle,
    });

    canvas.add(circle);
  };

  const addText = () => {
    if (!canvas) {
      return;
    }

    const textbox = new Textbox('Hello Square Signs', {
      top: 150,
      left: 150,
      width: 200,
      fontSize: textboxDefaultFontSize,
      fill: elementsDefaultColors.text,
      lockScalingFlip: true,
      lockScalingX: false,
      lockScalingY: false,
      editable: true,
      fontFamily: 'OpensSans, sans-serif', // TODO make editable
      textAlign: 'center', // TODO make editable
    });

    canvas.add(textbox);
  };

  return (
    <>
      <Button
        variant="ghost"
        size="md"
        btnType="icon"
        onClick={addRectangle}
      >
        <SquareIcon />
      </Button>
      <Button
        variant="ghost"
        size="md"
        btnType="icon"
        onClick={addCircle}
      >
        <CircleIcon />
      </Button>
      <Button
        variant="ghost"
        size="md"
        btnType="icon"
        onClick={addText}
      >
        <TypeIcon />
      </Button>
    </>
  );
};

export default AddBasicElements;
