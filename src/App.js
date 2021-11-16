/* import  List from './components/list/list'; */
import './App.css';
import Catalogo from './components/catalogo/catalogo';
import ClickableComponent from './components/clickable/clickable';
/* import ItemCard from './components/itemListContainer/itemList'; */
import NavBar from './components/navbar/navbar';
import { createMuiTheme } from '@mui/material';
import { green, orange } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import MultiActionAreaCard from './components/itemCount/itemCount';


const theme = createMuiTheme ({
  palette: {
    primary: {
      main: orange [800]
    },
    secondary: {
      main: green [400]
    }
  }
})


function App() {
  return (
   <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar/>
        {/* <List/> */}
        <Catalogo/>
        <ClickableComponent themeButton/>
        <MultiActionAreaCard/>
        {/* <ItemCard/>
        <ItemCard/>
        <ItemCard/> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
