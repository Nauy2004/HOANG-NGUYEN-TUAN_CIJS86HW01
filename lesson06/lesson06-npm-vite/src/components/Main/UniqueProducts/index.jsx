import React from 'react'
import ProductFroU from '../Product/productForU'
import './UnProduct.css'
function UniqueProducts(props) {
    let product = props.data
    let renderProduct = () =>{
        return product.map((item) =>{
            return(
                <ProductFroU data = {item}/>
            )
        })
    }
  return (
    <div className='form-product'>
        <div className='productForU'>Sản phẩm danh riêng cho bạn</div>
        <div className='top10-product product-list'>
            {renderProduct()}
        </div>
    </div>
  )
}

export default UniqueProducts