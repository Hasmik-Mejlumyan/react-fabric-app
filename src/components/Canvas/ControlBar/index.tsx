import Settings from './Settings';

const ControlBar = () => {
  return (
    <div className="flex flex-col gap-2 fixed right-4 top-1/2 -translate-y-1/2">
      <Settings />
    </div>
  );
};

export default ControlBar;
