import Settings from './Settings';
import CanvasSettings from './CanvasSettings';

const ControlBar = () => {
  return (
    <div className="flex flex-col gap-2 fixed right-4 top-1/2 -translate-y-1/2">
      <Settings />
      <CanvasSettings />
    </div>
  );
};

export default ControlBar;
