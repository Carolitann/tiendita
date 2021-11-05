import './App.css';
import Catalogo from './components/catalogo/catalogo';
import ItemCard from './components/itemListContainer/itemList';
import NavBar from './components/navbar/navbar';
import logo from '../src/logo.svg';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Catalogo/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
    </div>
  );
}

export default App;
