import React from 'react';
import './styles/label.scss';

export interface LabelProps {
  children?: string;
}

const Label = ({children, ...rest }: LabelProps) => {
  return (
    <div>
      <label className='label' {...rest}>{children}</label>
    </div>
  );
};

export default Label;
