import React from "react";
import axios from "axios/lib/axios";

export default class Top extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
    this.greeting = this.greeting.bind(this)
  }
  componentDidMount(){
    axios.get("http://localhost:3333/api/")
    .then((result) => {
      this.setState({
        user: result.data.user
      })
    })
  }
  render() {
    return (
      this.greeting()
    )
  }
  greeting(){
    if (this.state.user === null) {
      return(
        <p>This page is TOP.</p>
      )
    } else {
      return(
        <p>Hello {this.state.user}</p>
      )
    }

  }
}