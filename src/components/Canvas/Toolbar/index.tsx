import AddBasicElements from './AddBasicElements';
import ImageUpload from './ImageUpload';
import DeleteElement from './DeleteElement';

const Toolbar = () => {

  return (
    <div className="flex flex-col gap-2 bg-toolbar-bg-color p-2 rounded fixed top-1/2 -translate-y-1/2 left-4 shadow shadow-gray-200">
      <AddBasicElements />
      <ImageUpload />
      <DeleteElement />
    </div>
  );
};

export default Toolbar;
