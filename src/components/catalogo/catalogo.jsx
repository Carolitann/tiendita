import  { useState } from 'react';
import TitleComponent from './title/title';


const Catalogo = (props) => {
  const [name, setName] = useState('Carolina');
  const [lastName, setLastName] = useState('Noriega');
  const theme = {
    spacing: 8,
  };

  function updateName () {
      setName('Manny');
      setLastName ('Noriega');
  }

    return(
      <div>
          <TitleComponent name={name} lastName={lastName}/>
          <button sx={{ mb: 2 }} type='button' onClick={updateName}>Click</button>
      </div>
    );
}

export default Catalogo;


///Otro forma

/* class Catalogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"Caro"
    }
  }

{  saludar = () =>{
    this.setState({name: 'Manny'});
  }}

  render() {
    return (
      <div>
        <TitleComponent name={this.state.name} onSaludar={this.saludar} />
      </div>
    );
  }
}

export default Catalogo; */