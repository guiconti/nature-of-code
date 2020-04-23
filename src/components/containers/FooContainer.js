import React, { useEffect } from 'react';
import FooText from '../elements/foo/FooText';
import { useDispatch, useSelector } from 'react-redux';
import { getExample, getAnotherExample } from '../../actions/fooActions';

const FooContainer = () => {
  const example = useSelector(state => state.foo.example);
  const anotherExample = useSelector(state => state.foo.anotherExample);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExample('A delayed example'));
    dispatch(getAnotherExample('anotherExample', 'A not delayed example'));
  }, [])

  return (
    <div>
      <FooText fixedText="The example value is" dynamicText={example}/>
      <FooText fixedText="The another example value is" dynamicText={anotherExample}/>
    </div>
  );
};

export default FooContainer;
