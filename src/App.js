import logo from './logo.svg';
import './css/App.css';
import Home from './pages/Home';
import Menu from './components/Menu';
import Nike from './pages/nike';
import Adidas from './pages/adidas';
import Fila from './pages/fila';
import Puma from './pages/puma';
import Champions from './pages/champions';
import Vans from './pages/vans';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Home/>
    </div>
  );
}

export default App;
