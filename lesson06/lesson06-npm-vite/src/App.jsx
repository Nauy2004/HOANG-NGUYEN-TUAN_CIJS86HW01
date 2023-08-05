import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navgation from './components/Navigation'
import Main from './components/Main'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Header/>
      <Navgation/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
