class App extends React.Component {

  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    let name = this.refs.name.value;
    let password = this.refs.password.value;
    console.log('here')
    alert('name: ' + name + ' password: ' + password)
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref='name' placeholder='stuff goes here'/>
        <input ref='password' input='password' />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
