import React from "react";
import { Link } from 'react-router-dom';
import "./Header.css";

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
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
      <nav className="nav">
        <Link to="/" className="item">TOP</Link>
        <Link to="/create" className="item">CREATE</Link>
        <Link to="/delete" className="item">DELETE</Link>
        <Link to="/" className="item">INCREASE</Link>
        <Link to="/" className="item">DECREASE</Link>
        <Link to="/" className="item">HISTORY</Link>
      </nav>
      </>
    )
  }
}