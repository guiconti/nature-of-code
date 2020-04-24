import React from 'react';
import './styles/button.scss';

export interface ButtonProps {
  children?: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="button" onClick={onClick}>{ children }</button>
  );
}

export default Button;