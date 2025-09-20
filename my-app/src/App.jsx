import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from "./Product/product"
import Modal from './Modal/modal'
import User from './User/user'

class App extends React.Component {

  // const allProducts = [
  //   {id:1, title: "Samsung A51", img: "public/img1.jpg", price: 150, count: 122},
  //   {id:2, title: "Samsung A34", img: "public/img2.jpg", price: 180, count: 1},
  //   {id:3, title: "Note 10", img: "public/img3.jpg", price: 295, count: 31},
  // ]
  constructor (props) {
    super(props)
    this.state = {
      users: [
      {id:1, name: "ali"},
      {id:2, name: "amir"},
      {id:3, name: "amin"},
      {id:4, name: "babak"},
    ]
    }
  } 

  render () {
    return (
    <div>
      <User {...this.state.users[0]}></User>
      <User {...this.state.users[1]}></User>
      <User {...this.state.users[2]}></User>
      <User {...this.state.users[3]}></User>
      {/* <Product title={allProducts[0].title} img={allProducts[0].img} price={allProducts[0].price} count={allProducts[0].count}>
         <button>OFF (50%)</button>
      </Product>
      <Product {...allProducts[1]}>
          <button>OFF (10%)</button>
        </Product>  using spread syntax
      <Product {...allProducts[2]}>
          <h2>OFF(25%)</h2>
        </Product>  using spread syntax */}
        {/* <h1>SabzLearn</h1>
        <Modal state="پرداخت شما با موفقیت انجام شد">
          <p>Are you sure you want to delete this element?</p>
          <ul className="cd-buttons">
            <li><a href="#">Yes</a></li>
            <li><a href="#">No</a></li>
          </ul>
        </Modal> */}
    </div>
    )

  }
}

export default App
