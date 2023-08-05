import React from 'react'
import ProductItem from '../Product'
import './allProduct.css'
function AllProduct(props) {
    let product = props.data
    let listMenu = [
        {
            name: 'Bộ lọc',
            icon: 'bi bi-filter',
        },
        {
            name: 'Thương hiệu',
            icon: '',
        },
        {
            name: 'Giá cả',
            icon: '',
        },
        {
            name: 'Màn hình',
            icon: '',
        }, {
            name: 'Camera sau',
            icon: '',
        }, {
            name: 'Camera trước',
            icon: '',
        }, {
            name: 'Ram',
            icon: '',
        }, 
        {
            name: 'Bộ nhớ trong',
            icon: '',
        },
    ]
    let btnMenu = () => {
        return listMenu.map((item) => {
          return(
            <div className='menu-item'>
                <i className={item.icon}></i>
                <button type='button'>{item.name}</button>
            </div>
          )  
        })
    }
return (
    <div className=''>
        <div className='menu'>
            {btnMenu()}
        </div>
        <div className='top10-product product-list form-product'>
            {product.map((item) => {
                return (
                    <ProductItem data={item} />
                )
            })}
        </div>
    </div>
)
}

export default AllProduct