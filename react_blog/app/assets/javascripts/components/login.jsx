class Login extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    let username = this.refs.username.value;
    let password = this.refs.password.value;

     $.ajax({
       method: 'post',
       url: '/session',
       data: { username: username, password: password }
     }).done((response) => {
      debugger
    })


  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref='username' placeholder='Username'/>
        <input ref='password' placeholder='Password'/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
