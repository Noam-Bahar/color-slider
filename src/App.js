import { useRecoilValue } from 'recoil';
import './App.css';
import RGBSliders from './components/RGBSliders';
import HSLSliders from './components/HSLSliders';
import { rgb, hslArray, textColor } from './StateManager';

const App = () => {
  const color = useRecoilValue(rgb);
  const textBrightness = useRecoilValue(textColor);
  const { h, s, l } = useRecoilValue(hslArray);

  return (
    <div
      className='App'
      style={{ backgroundColor: color, color: `hsl(0 0% ${textBrightness}%)` }}
    >
      <header className='App-header'>Coolest Project Ever</header>
      <br />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <RGBSliders />
        <HSLSliders />
      </div>
      H: {h}
      <br />
      S: {s}
      <br />
      V: {l}
    </div>
  );
};

export default App;
