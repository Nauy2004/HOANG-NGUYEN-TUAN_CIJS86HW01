import React from 'react'
import '../product.css'

function ProductFroU(props) {
    let product = props.data
    let price = product.price.split('đ').join('')
    let discountSell = Number(price.split('.').join(''))
    let discount = Number(product.discount)
    let discountAfter = discountSell + (discountSell / 100 * discount)
    return (
        <div className="card" key={product.id}>
            <img src={product.img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h6 class="card-title">{product.name}</h6>
                <p className='card-text text-red'>
                    {discountSell.toLocaleString()} đ
                </p>
                <p className='card-text text-red'>
                    <span className="d-inline-flex">
                        <strike className="text-gray">{discountAfter.toLocaleString()} đ</strike>
                    </span>
                    <span className="d-inline-flex discount">-{product.discount}%</span>
                </p>
            </div>
            <button className='addToCompare'>
                <span>
                    <i class="bi bi-plus-circle me-1"></i>
                </span>
                Thêm vào so sánh
            </button>
        </div>
    )
}

export default ProductFroU