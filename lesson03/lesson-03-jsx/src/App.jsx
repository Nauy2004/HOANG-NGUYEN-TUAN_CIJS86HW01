import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './header'
import Nav from './navigasion'
import Banner from './banner'
import RanderProduct from './rander'

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
        <RanderProduct/>
      </main>
    </>
  )
}

export default App
