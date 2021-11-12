
const TitleComponent = ({name, lastName}) => {
    return (
      <div>
          <h1>{name} {lastName}</h1>
      </div>
    );
}

export default TitleComponent;


//Otro forma

/* const TitleComponent = ({name, onSaludar}) => {
    return (
      <div>
          <h1>Hola {name}</h1>
          <button type='button' onClick={onSaludar}>Click</button>
      </div>
    );
}

export default TitleComponent; */



//////////////////////
// Otra forma

/* export default TitleComponent;

TitleComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: 'Hola'
    }
  }

  render() {
    return <div>
        <h1>{this.state.title} {this.props.name}</h1>
    </div>;
  }
}

export default TitleComponent; */