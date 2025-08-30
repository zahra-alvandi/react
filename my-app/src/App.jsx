import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from "./Product/product"

function App() {

  const allProducts = [
    {id:1, title: "Samsung A51", img: "public/img1.jpg", price: 150, count: 122},
    {id:2, title: "Samsung A34", img: "", price: 180, count: 1},
    {id:3, title: "Note 10", img: "public/img3.jpg", price: 295, count: 31},
  ]

  return (
  <div className='container'>
    <Product title={allProducts[0].title} img={allProducts[0].img} price={allProducts[0].price} count={allProducts[0].count}></Product>
    <Product {...allProducts[1]}></Product>  {/*using spread syntax*/}
    <Product {...allProducts[2]}></Product>  {/*using spread syntax*/}
  </div>
  )
}

export default App
