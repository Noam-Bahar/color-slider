import { redState, greenState, blueState } from '../StateManager';
import Slider from './Slider';
const HSLSliders = (props) => {
  return (
    <div>
      <Slider type='byte' key='slide-red' value={redState} />
      <Slider type='byte' key='slide-green' value={greenState} />
      <Slider type='byte' key='slide-blue' value={blueState} />
    </div>
  );
};
export default HSLSliders;
