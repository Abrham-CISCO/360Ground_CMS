import './App.css';
import MainContainer from './pages/mainContainer';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainContainer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
