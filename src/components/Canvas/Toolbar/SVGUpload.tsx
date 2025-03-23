import { type ChangeEvent, useRef } from 'react';
import { FabricObject, loadSVGFromString, util } from 'fabric';
import { PenToolIcon } from 'lucide-react';

import Button from '../../UI/Button';

import { useCanvas } from '../../../contexts/CanvasProvider.tsx';

/**
 * Tried to create a separate reader for SVG, it didn't work properly
 * did research here https://github.com/fabricjs/fabric.js/issues/9834
 */
const SVGUpload = () => {
  const { canvas } = useCanvas();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file || !canvas) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = async (event) => {
      if (!event.target) {
        return;
      }

      const svgData = event.target.result as string;
      if (!svgData) {
        return;
      }

      const loadedSVG = await loadSVGFromString(svgData);

      const svgGroup = util.groupSVGElements(loadedSVG.options as FabricObject[], loadedSVG.options);
      const svgBBox = svgGroup.getBoundingRect();
      const scale = Math.min(canvas.width / svgBBox.width, canvas.height / svgBBox.height);

      svgGroup.set({
        left: 0,
        top: 0,
        scaleY: scale,
        scaleX: scale,
        // centeredScaling: true,
        originX: 'center',
        originY: 'center',
      });
      // svgGroup.setCoords();

      canvas.add(svgGroup);
      canvas.renderAll();

      // TODO addfunctionality for resizing proportionally
    };

    fileReader.readAsText(file);
  };

  const handleImageUploadButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <input
        className="hidden"
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
      <Button
        variant="ghost"
        size="md"
        btnType="icon"
        onClick={handleImageUploadButtonClick}
      >
        <PenToolIcon />
      </Button>
    </div>
  );
};

export default SVGUpload;
