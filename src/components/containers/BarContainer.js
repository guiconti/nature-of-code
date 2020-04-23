import React, { useEffect } from 'react';
import BarText from '../elements/bar/BarText';
import { useDispatch, useSelector } from 'react-redux';
import { getExample, getAnotherExample } from '../../actions/barActions';

const BarContainer = () => {
  const example = useSelector(state => state.bar.example);
  const anotherExample = useSelector(state => state.bar.anotherExample);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExample('A delayed example'));
    dispatch(getAnotherExample('anotherExample', 'A not delayed example'));
  }, [])

  return (
    <div>
      <BarText fixedText="The example value is" dynamicText={example}/>
      <BarText fixedText="The another example value is" dynamicText={anotherExample}/>
    </div>
  );
};

export default BarContainer;
