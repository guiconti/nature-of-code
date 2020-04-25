import React from 'react';
import Label from './Label';
import './styles/checkbox.scss';

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (event: any) => void;
}

const Checkbox = ({label, ...rest }: CheckboxProps) => {
  return (
    <div>
      <Label>{label}</Label>
      <input type='checkbox' className='checkbox' {...rest} />
    </div>
  );
};

export default Checkbox;
