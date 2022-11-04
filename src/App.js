import { useRecoilValue } from 'recoil';
import './App.css';
import Slider from './components/Slider';
import {
  redState,
  greenState,
  blueState,
  rgb,
  hsvArray,
  textColor,
} from './StateManager';

const App = () => {
  const color = useRecoilValue(rgb);
  const textBrightness = useRecoilValue(textColor);
  const { h, s, v } = useRecoilValue(hsvArray);

  return (
    <div
      className='App'
      style={{ backgroundColor: color, color: `hsl(0 0% ${textBrightness}%)` }}
    >
      <Slider key='slide-red' color={redState} />
      <Slider key='slide-green' color={greenState} />
      <Slider key='slide-blue' color={blueState} />
      <header className='App-header'>Coolest Project Ever</header>
      H: {h}
      <br />
      S: {s}
      <br />
      V: {v}
    </div>
  );
};

export default App;
