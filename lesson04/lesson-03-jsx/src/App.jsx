import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './header'
import Nav from './navigasion'
import Banner from './banner'
import {RanderProduct,RanderBoxModalDetail,RanderBoxModalShoppingCart} from './rander'
import BoxModalShoppingCart from '../box_modal/box_modal_shopping'


function App() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <nav className='container'>
        <Nav/>
      </nav>
      <main className='container'>
        <Banner/>
        <div className='title-product'><strong>Top 10 sản phẩm nổi bật</strong></div>
        <RanderProduct rander = "product-list"/>
        <RanderBoxModalDetail/>
        <BoxModalShoppingCart/>
      </main>
    </>
  )
}

export default App
