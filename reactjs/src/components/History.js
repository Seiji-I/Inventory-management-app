import React from "react";

export default class History extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      transactions: [
        {transaction:"increase 10", name: "wood", price: 100, image: null, date: Date()},
        {transaction:"decrease 1", name: "stone", price: 80, image: null, date: Date()},
        {transaction:"increase 3", name: "mashroom", price: 90, image: null, date: Date()},
      ]
    }
  }
  render() {
    return(
      <>
      <p>
      You can see your past transaction history. 
      </p>
      <table>
        <tbody>
        <tr>
          <th>TRANSACTION</th>
          <th>NAME</th>
          <th>PRICE</th>
          <th>IMAGE</th>
          <th>DATE</th>
        </tr>
        {this.state.transactions.map((data) => {
          return (
            <tr>
              <td>{data.transaction}</td>
              <td>{data.name}</td>
              <td>{data.price}</td>
              <td>{data.image}</td>
              <td>{data.date}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
      </>
    )
    
  }

}