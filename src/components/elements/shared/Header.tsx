import React from 'react';
import './styles/header.scss';

export interface HeaderProps {
  children?: string;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <div>
      <h2 className="header">
        {children}
      </h2>
    </div>
  );
};

export default Header;
