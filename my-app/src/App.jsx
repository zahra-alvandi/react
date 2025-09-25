import React, { Component } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from "./Product/product"
import Modal from './Modal/modal'
import User from './User/user'

// class App extends React.Component {
//   constructor(props) {
//     super(props) 

//     this.state = {
//       users: [
//         {id: 1, name: "ali"},
//         {id: 2, name: "amin"},
//         {id: 3, name: "amir"},
//         {id: 4, name: "babak"},
//       ]
//     }
//     this.clickHandler = this.clickHandler.bind(this)
//     this.code = 25
//   }

//   clickHandler () {
//     alert("click shod :)")
//     this.code = 55
//     console.log(this)
//   }

//   keyDownHandler () {
//     console.log("type shode :)")
//   }
 
//   render() {
//     return (
//       <div>
//         {/* <h1 onClick={this.clickHandler.bind(this)}>{this.code}</h1> */}
//         {/* <h1 onClick={() => {this.clickHandler()}}>{this.code}</h1> */}
//         <h1 onClick={this.clickHandler}>{this.code}</h1>
//         <input type="text" onKeyDown={this.keyDownHandler} />
//         <User {...this.state.users[0]}></User>
//         <User {...this.state.users[1]}></User>
//         <User {...this.state.users[2]}></User>
//         <User {...this.state.users[3]}></User>
//       </div>
//     )
//   }
// }

// function App() {
//   return(
//     <div>
//       <Product></Product>
//     </div>
//   )
// }

// export default App

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state  = {count: 0};
//     this.increase = this.increase.bind(this);
//     this.decrease = this.decrease.bind(this);
//   }

//   increase () {
//     this.setState(prev => (
//       {count: prev.count + 1}
//     ));
//   }

//   decrease () {
//     this.setState(prev => (
//       {count: prev.count -1}
//     ));
//   }

//   render() {
//     return(
//       <div>
//         <h2>{this.state.count}</h2>
//         <button onClick={this.increase}>+</button>
//         <button onClick={this.decrease}>-</button>
//       </div>
//     )
//   }
// }

// export default Counter

// class LiveInput extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {text: ""};
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange () {
//     this.setState({text: event.target.value})
//   }

//   render() {
//     return(
//       <div>
//         <input type="text" onChange={this.handleChange} />
//         <p>Previwe: {this.state.text}</p>
//       </div>
//     )
//   }
// }

// export default LiveInput

class HoverBox extends Component {
  constructor(props) {
    super(props);
    this.state = {bg: "lightgray"};
    this.hanleEnter = this.hanleEnter.bind(this)
    this.handleLeave = this.handleLeave.bind(this)
  }

  hanleEnter () {
    this.setState({bg: "skyblue"})
  }

  handleLeave () {
    this.setState({bg: "lightgray"})
  }

  render() {
    return(
      <div 
        onMouseOver={this.hanleEnter}
        onMouseLeave={this.handleLeave}
        style={
          {
            width: 150,
            height: 150,
            backgroundColor: this.state.bg,
            magrin: 20
          }
        }
      >

      </div>
    )
  }
}

export default HoverBox