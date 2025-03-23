import type { FC, PropsWithChildren } from 'react';

const SettingContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col gap-3 bg-toolbar-bg-color py-6 px-2 rounded text-left empty:p-0 shadow shadow-gray-200">
      {children}
    </div>
  );
};

export default SettingContainer;
