import React from 'react';
import { shallow } from 'enzyme';
import FooText from './FooText';

describe('<FooText />', () => {
  const fixedText = 'Bar is being';
  const dynamicText = 'tested';

  it('should have a text using the fixedText and dynamicText variables', () => {
    const wrapper = shallow(
      <FooText
        fixedText={fixedText}
        dynamicText={dynamicText}
      />
    );
    const actual = wrapper.find('p').text();
    const expected = `This is a foo text - ${fixedText} ${dynamicText}`;

    expect(actual).toEqual(expected);
  });
});
