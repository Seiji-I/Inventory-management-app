import React from "react";
import axios from "axios/lib/axios";
import "./LoginForm.css"

export default class LoginForm extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      userid: null,
      password: null,
      errormsg: ""
    }
    this.loginHandler = this.loginHandler.bind(this)
    this.handleChangeUserid = this.handleChangeUserid.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleErrorMessage = this.handleErrorMessage.bind(this)
  }
  render() {
    return (
      <form onSubmit={this.loginHandler}>
        <div>
          <label>
            USER ID:
            <input type="text" name="userid" onChange={this.handleChangeUserid}/>
          </label>
        </div>
        <div>
          <label>
            PASSWORD:
            <input type="password" name="password" onChange={this.handleChangePassword}/>
          </label>
        </div>
        <div>
          <button>LOGIN</button>
        </div>
        {this.handleErrorMessage()}
      </form>
    )
  }
  loginHandler(event) {
    event.preventDefault();
    const params = new URLSearchParams();
    params.append("userid", this.state.userid)
    params.append("password", this.state.password)
    return axios.post("http://localhost:3333/api/login", params)
    .then(response => {
      console.log(response.data)
    })
    .catch(err => {
      console.log(err)
      this.setState({
        errormsg: err.response.data.content
      })
    })
  }
  handleChangeUserid (e) {
    this.setState({
      userid: e.target.value,
      password: this.state.password
    })
  }
  handleChangePassword (e) {
    this.setState({
      userid: this.state.userid,
      password: e.target.value
    }) 
  }
  handleErrorMessage(){
    if (this.state.errormsg !== "") {
      return (
        <div className="alert alert-danger" role="alert">{this.state.errormsg}</div>
      )
    }
  }
}