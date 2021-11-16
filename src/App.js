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
import ItemCount from './components/itemCount/itemCount';
import {Icon} from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';


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
        <MultiActionAreaCard/>
        {/* <ItemCard/>
        <ItemCard/>
        <ItemCard/> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
