import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from "./Product/product"

function App() {

  return (
  <div className='container'>
    <Product title= "Samsung A34" img="public/img1.jpg" price={128} count={12}></Product>
    <Product title= "Samsung A51" img="public/img2.jpg" price={180} count={4}></Product>
    <Product title= "Note 10" img="public/img3.jpg" price={295} count={0}></Product>
  </div>
  )
}

export default App
