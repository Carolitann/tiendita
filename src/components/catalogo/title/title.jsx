
const TitleComponent = ({name}) => {
    return (
      <div>
          <h1>Hola {name}</h1>
      </div>
     );
}

export default TitleComponent;




//////////////////////
// Otra forma


/* export default TitleComponent;itleComponent extends Component {
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