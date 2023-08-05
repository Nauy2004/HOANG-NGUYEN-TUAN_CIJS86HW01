import React from 'react'
import Banner from './Banner'
import Top10Product from './Top10Product'
import AllProduct from './allProduct'
import UniqueProducts from './UniqueProducts'
import { hotTrend,allProduct,productForU } from '../../data'
import './main.css'
function Main() {
  return (
    <main>
      <Banner />
      <div className='main bg-f5f6f8'>
        <Top10Product data={hotTrend} />
        <AllProduct data ={allProduct}/>
        <UniqueProducts data ={productForU}/>
      </div>
    </main>
  )
}

export default Main