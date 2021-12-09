import './App.css';
import WeatherSearch from './components/WeatherSearch';
import logo from './icons/isotop.svg'

function App() {
  return (
    <div className="App">
      <WeatherSearch />
      <img src={logo} alt="isotop logo" className="logo" />
    </div>
  );
}

export default App;
