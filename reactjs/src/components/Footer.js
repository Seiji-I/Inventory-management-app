import React from "react";
import axilotl from "../images/Lucy_Axolotl_JE1.png";
import "./Footer.css";

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <>
        <div className="footer">
          <label>huhuhu...</label>
          <img src={axilotl} alt="" height="10%" width="10%" />
        </div>
      </>
      
    )
  }
}