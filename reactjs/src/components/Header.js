import React from "react";
import axios from "axios/lib/axios";
import { Link } from 'react-router-dom';
import "./Header.css";

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
    this.loginedHandler = this.loginedHandler.bind(this)
  }
  componentDidMount(){
    axios.get("http://localhost:3333/api/")
    .then((result) => {
      this.setState({
        user: result.data.user
      })
      console.log(result)
    })
  }
  render(){
    return (
      <>
      <div>
        <h1 className="header">
          Inventory Management Application
          <p className="sub-header">- 在庫管理アプリ -</p>
        </h1>
      </div>
      { this.loginedHandler() }
      </>
    )
  }
  loginedHandler(){
    if (this.state.user !== null) {
      return (
        <nav className="nav">
          <Link to="/" className="item">TOP</Link>
          <Link to="/create" className="item">CREATE</Link>
          <Link to="/delete" className="item">DELETE</Link>
          <Link to="/" className="item">INCREASE</Link>
          <Link to="/" className="item">DECREASE</Link>
          <Link to="/history" className="item">HISTORY</Link>
          <Link to="/" className="item">LOGOUT</Link>
        </nav>
      )
    } else {
      return (
        <nav className="nav">
          <Link to="/" className="item">TOP</Link>
          <Link to="/login" className="item">LOGIN</Link>
        </nav>
      )
    }
  }
}