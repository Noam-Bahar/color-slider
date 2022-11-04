import { useRecoilState } from 'recoil';
import { values } from '../definitions';

const Slider = (props) => {
  const [value, setValue] = useRecoilState(props.value);
  const max =
    props.type === 'byte'
      ? 255
      : props.type === 'percent'
      ? 100
      : props.type === 'deg' && 359;
  return (
    <div className='slider'>
      <input
        type='range'
        min={0}
        max={max}
        value={value}
        onInput={(e) => {
          setValue(+e.target.value);
        }}
      />
      <p id='rangeValue'>{value}</p>
    </div>
  );
};

export default Slider;
