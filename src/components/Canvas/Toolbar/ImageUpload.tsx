import { type ChangeEvent, useRef } from 'react';
import { FabricImage } from 'fabric';
import { ImageIcon } from 'lucide-react';

import Button from '../../UI/Button';

import { useCanvas } from '../../../contexts/CanvasProvider';

const ImageUpload = () => {
  const { canvas } = useCanvas();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file || !canvas) {
      return;
    }

    const url = URL.createObjectURL(file);
    const img = new Image();
    img.src = url;
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const scale = Math.min(canvas.width / img.width, canvas.height / img.height);

      const fabricImg = new FabricImage(img, {
        left: 0,
        top: 0,
        scaleX: scale,
        scaleY: scale,
      });

      canvas.add(fabricImg);
      canvas.renderAll();
    };
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
        <ImageIcon />
      </Button>
    </div>
  );
};

export default ImageUpload;
