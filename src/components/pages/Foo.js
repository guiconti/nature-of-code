import React from 'react';
import Title from '../elements/shared/Header';
import FooContainer from '../containers/FooContainer';

const Foo = () => {
  return (
    <div>
      <Title title="Foo" />
      <FooContainer />
    </div>
  );
};

export default Foo;
