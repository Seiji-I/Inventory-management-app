import React from "react";
import chest from "../images/Chest.webp";
import "./Create.css"


export default class Create extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.fileInput = React.createRef();
  }
  render() {
    return (
      <div className="wrap-body">
        <div className="wrap-contents">
        <p>This page is Create.</p>
        <form  encType="multipart/form-data">
          <div>
            <label>
              NAME: 
              <input type="text" name="name" />
            </label>
          </div>
          <div>
            <label>
              PRICE: 
              <input type="text" name="price" />
            </label>
          </div>
          <div>
            <label>
              IMAGE: 
              <input type="file" ref={this.fileInput} />
            </label>
          </div>
          <div>
            <label>
              DISCRIPTION: 
              <input type="textare" name="discription" />
            </label>
          </div>
          <button>Create</button>
        </form>
        </div>
        <div className="wrap-contents">
          <img src={chest} alt="" height="100%" width="100%" />
        </div>     
      </div>
    )
  }
}