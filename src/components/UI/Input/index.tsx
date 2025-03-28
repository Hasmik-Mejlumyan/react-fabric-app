import { FC } from 'react';

import { IInputProps } from './types.ts';

const Input: FC<IInputProps> = ({
  wrapperClassName = '',
  label,
  labelClassName = '',
  className = '',
  ...props
}) => {
  return (
    <div className={`flex justify-center items-center relative ${wrapperClassName}`}>
      <input
        className={`border border-border-color rounded ${props.type === 'color' ? '' : 'px-4 py-1'} bg-transparent w-full text-text-color outline-none focus:ring focus:ring-brand-1 ${className}`}
        {...props}
      />
      {label && (
        <span className={`text-text-color absolute left-3 -top-1.5 bg-background-color px-1 leading-none text-xs ${labelClassName}`}>{label}</span>
      )}
    </div>
  );
};

export default Input;
