import logo from './logo.svg';
import './App.css';
import MainContainer from './pages/mainContainer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <MainContainer/>
    </BrowserRouter>
  );
}

export default App;
