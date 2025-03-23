import { useEffect, useState } from 'react';
import { FabricObject } from 'fabric';
import { Trash2Icon } from 'lucide-react';

import Button from '../../UI/Button';

import { useCanvas } from '../../../contexts/CanvasProvider.tsx';

const DeleteElement = () => {
  const { canvas } = useCanvas();

  const [selectedObject, setSelectedObject] = useState<FabricObject | null>(null);

  const handleObjectSelection = (object: FabricObject) => {
    if (!object) {
      return;
    }

    setSelectedObject(object);
  };

  const deleteSelectedLayer = () => {
    if (selectedObject) {
      canvas?.remove(selectedObject);
      setSelectedObject(null);
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
      });
    }
  }, [canvas]);

  return (
    <Button
      variant="danger"
      btnType="icon"
      onClick={deleteSelectedLayer}
    >
      <Trash2Icon />
    </Button>
  );
};

export default DeleteElement;
