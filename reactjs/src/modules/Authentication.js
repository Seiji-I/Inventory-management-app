import axios from 'axios';
import React from 'react';

class Authentication extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    try {
      axios.get("http://localhost:3333/login")
      .then((result) => {
        this.setState({
          username: result.data.user
        })
      })
    } catch (err){
      console.log(err)
      return null
    }
  }
}

export default Authentication;