import { useRecoilState, useRecoilValue } from 'recoil';
import './App.css';
import Slider from './components/Slider';
import { blueState, colorState, greenState, redState } from './StateManager';
import { rgbString } from './definitions';

const App = () => {
  const color = useRecoilValue(colorState);

  return (
    <div className='App' style={{ backgroundColor: rgbString(color) }}>
      <Slider key='slide-red' color={redState} />
      <Slider key='slide-green' color={greenState} />
      <Slider key='slide-blue' color={blueState} />
      <header className='App-header'>Coolest Project Ever</header>
    </div>
  );
};

export default App;
