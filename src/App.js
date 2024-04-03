import { BrowserRouter } from 'react-router-dom';
import './App.css';
import PageHome from './components/PageHome';
import Rotas from './components/Rotas';


function App() {
  return (
    <BrowserRouter>
        <Rotas/>
    </BrowserRouter>
  );
}

export default App;
