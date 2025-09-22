import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from "./Product/product"
import Modal from './Modal/modal'
import User from './User/user'

class App extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      users: [
        {id: 1, name: "Ali"},
        {id: 2, name: "Amin"},
        {id: 3, name: "Amir"},
        {id: 4, name: "Babak"},
      ]
    }
    setTimeout(() => {
      this.setState({
        users: [
          {id: 1, name:"Qadir"},
          {id: 2, name:"Sasan"},
          {id: 3, name:"Mohammad"},
          {id: 4, name:"Ashkan"},
        ]
      })
    }, 5000);
  }

  render() {
    return (
      <div>
        <User {...this.state.users[0]}></User>
        <User {...this.state.users[1]}></User>
        <User {...this.state.users[2]}></User>
        <User {...this.state.users[3]}></User>
      </div>
    )
  }
}

export default App
