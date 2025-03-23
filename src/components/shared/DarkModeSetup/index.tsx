import useDarkMode from '../../../hooks/useDarkMode.ts';
import { MoonIcon, SunIcon } from 'lucide-react';

const DarkModeSetup = () => {
  const { theme, toggleTheme } = useDarkMode();
  
  return (
    <div className="bg-toolbar-bg-color p-2 fixed top-4 right-4 rounded shadow shadow-gray-200">
      <div className="flex items-center justify-center">
        <SunIcon className="text-amber-400" />
        <button
          className="w-16 h-6 mx-2 bg-gray-200 rounded-full px-1 relative"
          onClick={toggleTheme}
        >
          <div
            className={`w-5 h-5 bg-amber-400 rounded-full ${theme === 'dark' ? 'translate-x-9' : 'translate-x-0'} transition-all duration-300`}
          />
        </button>
        <MoonIcon className="text-blue-600" />
      </div>
    </div>
  );
};

export default DarkModeSetup;
