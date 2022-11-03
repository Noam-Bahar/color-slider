import { useState } from 'react';

const values = {
  MIN: 0,
  MID: 127,
  MAX: 255,
};

const Slider = (props) => {
  const [value, setValue] = useState(values.MID);

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
