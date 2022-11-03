import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { values } from '../definitions';

const Slider = (props) => {
  const [value, setValue] = useRecoilState(props.color);

  return (
    <div className='slider'>
      <input
        type='range'
        min={values.MIN}
        max={values.MAX}
        value={value}
        onInput={(e) => {
          setValue(e.target.value);
        }}
      />
      <p id='rangeValue'>{value}</p>
    </div>
  );
};

export default Slider;
