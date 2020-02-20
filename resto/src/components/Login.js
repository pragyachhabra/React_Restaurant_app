import React, { Component } from "react";
import NavBarMenu from './NavBarMenu'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: ""
    };
  }
  login() {
    console.warn(this.state);

    fetch("http://localhost:3000/login?q=" + this.state.name).then(data => {
      data.json().then(response => {
        console.warn("response", response);
        if(response.length>0){
            localStorage.setItem('login',JSON.stringify(response))
            console.warn(this.props.history.push('list'))

        }
        else{
            alert("Please check username and password")
        }
      });
    });
  }
  render() {
    return (
      <div>
          
<NavBarMenu/>
        <input
          type="text"
          placeholder="Enter Name"
          name="user"
          onChange={event => this.setState({ name: event.target.value })}
        />
        <br /> <br />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={event => this.setState({ password: event.target.value })}
        />
        <br /> <br />
        <button
          onClick={() => {
            this.login();
          }}
        >
          Login
        </button>
      </div>
    );
  }
}

export default Login;
