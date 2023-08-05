import React from 'react'
import ProductItem from '../Product'
import './top10product.css'
function Top10Product(props) {
    let product = props.data
    return (
        <div className='form-product'>
            <h6>Top 10 sản phẩm nổi bật</h6>
            <div className='top10-product product-list'>
                {product.map((item) => {
                    return (
                        <ProductItem data={item} />
                    )
                })}
            </div>
        </div>
    )
}

export default Top10Product