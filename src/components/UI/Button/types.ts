import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export type ButtonVariantType = 'primary' | 'ghost';
export type ButtonSizeType = 'sm' | 'md' | 'lg';
export type ButtonType = 'button' | 'icon';

export interface IButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantType;
  size?: ButtonSizeType;
  btnType?: ButtonType;
}
