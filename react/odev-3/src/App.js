import './App.css';
import WeatherContext from './context/WeatherContext';
import Weather from './components/Weather';
import Cities from './components/Cities';
import Container from './components/Container';

function App() {
  return (
    <WeatherContext>
      <Container>
        <Cities />
        <Weather />
      </Container>
    </WeatherContext>
  );
}

export default App;
