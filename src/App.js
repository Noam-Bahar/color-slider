import './App.css';
import Slider from './components/Slider';

const App = () => {
  return (
    <div className='App'>
      <Slider key='slide-red' />
      <Slider key='slide-green' />
      <Slider key='slide-blue' />
      <header className='App-header'>Coolest Project Ever</header>
    </div>
  );
};

export default App;
