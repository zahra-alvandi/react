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
//       ],
//       count: 0
//     }
//   }
 
//   chageUserHandler () {
//     // this.setState(
//     //   {
//     //     users: [
//     //     {id: 1, name: "qadir"},
//     //     {id: 2, name: "sasan"},
//     //     {id: 3, name: "mohammad"},
//     //     {id: 4, name: "ashkan"},
//     //     ]
//     //   }
//     // )
//     this.setState((prevState) => {
//       return {count: prevState.count + 1}
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.chageUserHandler.bind(this)}>Change User</button>
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

// class HoverBox extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {bg: "lightgray"};
//     this.hanleEnter = this.hanleEnter.bind(this)
//     this.handleLeave = this.handleLeave.bind(this)
//   }

//   hanleEnter () {
//     this.setState({bg: "skyblue"})
//   }

//   handleLeave () {
//     this.setState({bg: "lightgray"})
//   }

//   render() {
//     return(
//       <div 
//         onMouseOver={this.hanleEnter}
//         onMouseLeave={this.handleLeave}
//         style={
//           {
//             width: 150,
//             height: 150,
//             backgroundColor: this.state.bg,
//             magrin: 20
//           }
//         }
//       >

//       </div>
//     )
//   }
// }

// export default HoverBox

// class SignupForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {name: "", email: ""};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleChange(event) {
//     this.setState({[event.target.name]: event.target.value});
//   }

//   handleClick(event) {
//     event.preventDeafult();
//     alert(`Name: ${this.state.name}\nEmail: ${this.state.email}`);
//   }

//   render() {
//     const {name, email } = this.state;
//     const disabled = !name || !email;
//     return(
//       <form action="" onSubmit={this.handleClick} style={{
//         display: 'flex',
//         flexDirection: "column",
//         width: 250,
//         gap: 10
//       }}>
//         <input type="text" placeholder='name' onChange={this.handleChange} />
//         <input type="email" placeholder='email' onChange={this.handleChange} />
//         <button type='sumbit' disabled={disabled} style={
//           {width: 100,
//             fontSize: 14
//           }
//         }>
//           Submit
//         </button>
//       </form>
//     )
//   }
// }

// export default SignupForm

// class todoList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todos: [
//         "Learn React",
//         "Learn Js",
//         "Read a few pages of my book",
//         "Drink Coffee"
//       ]
//     }
//     this.deletItem = this.deletItem.bind(this);  
//   }
//   deletItem(index) {
//     this.setState(prev => ({
//       todos: prev.todos.filter((_,i) => i !==index)
//     }))
//   }

//   render() {
//     return(
//       <ul className='parent'>
//         {this.state.todos.map((item, idx) => (
//           <li key={idx}>
//             {item}
//             <button onClick={() => this.deletItem(idx)} className='btn'>Delete</button>
//           </li>
//         ))}
//       </ul>
//     )
//   }
// }

// export default todoList

// class WelcomeBtn extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {message: ""};
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     this.setState({message: "Hi :)"})
//   }

//   render() {
//     return(
//       <div style={{width:150}}>
//         <button onClick={this.handleClick}>click here</button>
//         <p>{this.state.message}</p>
//       </div>
//     )
//   }
// }

// export default WelcomeBtn

// class CharacterCounter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0};
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(event) {
//     this.setState({count: event.target.value.length})
//   }

//   render() {
//     return(
//       <div>
//         <input onChange={this.handleChange} />
//         <p>Characters count: {this.state.count}</p>
//       </div>
//     )
//   }
// }

// export default CharacterCounter

// class ToggleText extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {show: false};
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     this.setState(prev => ({show: !prev.show}))
//   }

//   render() {
//     return(
//       <div>
//         <button className='btn' onClick={this.handleClick}>show/hide</button>
//         {this.state.show && <p>Hello React</p>}
//       </div>
//     )
//   }
// }

// export default ToggleText

// class ColorBox extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {bg: "white"};
//     this.changeColor = this.changeColor.bind(this)
//   }

//   changeColor() {
//     this.setState(prev => (
//       {
//         bg: prev.bg === "white" ? "yellow" : "white"
//       }
//     ))
//   }

//   render() {
//     return(
//       <div>
//         <button className='btn' onClick={this.changeColor}>Changing Color</button>
//         <div style={{
//           width: 100,
//           height: 100,
//           backgroundColor: this.state.bg
//         }}></div>
//       </div>
//     )
//   }
// }

// export default ColorBox

// class ClickerCounter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {clicks: 0}
//     this.addClick = this.addClick.bind(this)
//   }

//   addClick() {
//     this.setState(prev => (
//       {
//         clicks: prev.clicks + 1
//       }
//     ))
//   }

//   render() {
//     return(
//       <div>
//         <button onClick={this.addClick}>click here</button>
//         <p>Clicks count: {this.state.clicks}</p>
//       </div>
//     )
//   }
// }

// export default ClickerCounter

// class DoubleClickText extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {text: "Hello"}
//     this.changeText = this.changeText.bind(this);
//   }

//   changeText () {
//     this.setState({text: "GoodBye"})
//   }

//   render() {
//     return(
//       <p onDoubleClick={this.changeText}>{this.state.text}</p>
//     )
//   }
// }

// export default DoubleClickText

