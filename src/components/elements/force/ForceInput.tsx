import React from 'react';
import Button from '../shared/Button';
import './styles/forceInput.scss';

export interface ForceInputProps {
  toggleRunning: () => void;
}

const ForceInput = ({ toggleRunning }: ForceInputProps) => {
  return (
    <div className="force-input">
      <Button onClick={toggleRunning}>Start/Stop</Button>
    </div>
  );
};

export default ForceInput;
