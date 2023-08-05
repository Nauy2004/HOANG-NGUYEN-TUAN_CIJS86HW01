import products from './data'
import ProductCard from './product'
import ModalDetail from '../box_modal/box_modal_detail'
import BoxModalShoppingCart from '../box_modal/box_modal_shopping'

export function RanderProduct(type) {
    return(
        <div className={type.rander}>
                    {products.map((product)=>(
                    <ProductCard img = {product.img} name = {product.name} 
                    price = {product.price} discount = {product.discount}
                    chip ={product.chip} sizeScreen = {product.sizeScreen}
                    ram = {product.ram} rom = {product.rom}
                    />
            ))}
        </div>
    )
}

export function RanderBoxModalDetail() {
    return(
        <>
            {products.map((product,key)=>(              
            <ModalDetail img = {product.img} name = {product.name} 
            price = {product.price} discount = {product.discount}
            isNew = "new" onClick = {key}
            />
            ))}
        </>
    )
}
export function RanderBoxModalShoppingCart() {
    return(
        <>
            {products.map((product)=>(      
                <BoxModalShoppingCart img = {product.img}
                name = {product.name} price ={product.price}
                />        
        ))}
        </>
    )
}