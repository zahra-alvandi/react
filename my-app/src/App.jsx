import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from "./Product/product"
import Modal from './Modal/modal'
import User from './User/user'
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      users: [
        {id: 1, name: "ali"},
        {id: 2, name: "amin"},
        {id: 3, name: "amir"},
        {id: 4, name: "babak"},
      ]
    }

    this.code = 25
  }

  clickHandler () {
    alert("click shod :)")
    this.code = 35
  }

  keyDownHandler () {
    console.log("type shode :)")
  }
 
  render() {
    return (
      <div>
        <h1 onClick={this.clickHandler}>{this.code}</h1>
        <input type="text" onKeyDown={this.keyDownHandler} />
        <User {...this.state.users[0]}></User>
        <User {...this.state.users[1]}></User>
        <User {...this.state.users[2]}></User>
        <User {...this.state.users[3]}></User>
      </div>
    )
  }
}

// function App() {
//   return(
//     <div>
//       <Product></Product>
//     </div>
//   )
// }

export default App
