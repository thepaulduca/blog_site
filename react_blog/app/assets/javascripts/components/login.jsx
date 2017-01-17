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
       console.log(response)
    })
  }

  render() {
    return (
      <div className="form_div">
        <form onSubmit={this.handleSubmit}>
          <input ref='username' placeholder='Username'/>
          <br/>
          <input ref='password' placeholder='Password'/>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
