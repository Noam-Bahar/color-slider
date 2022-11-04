import { redState, greenState, blueState } from '../StateManager';
import Slider from './Slider';
const HSLSliders = (props) => {
  return (
    <div>
      <Slider type='deg' key='slide-hue' value={redState} />
      <Slider type='percent' key='slide-saturation' value={greenState} />
      <Slider type='percent' key='slide-lightness' value={blueState} />
    </div>
  );
};
export default HSLSliders;
