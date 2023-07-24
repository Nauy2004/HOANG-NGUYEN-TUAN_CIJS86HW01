import products from './data'
import ProductCard from './product'

function RanderProduct() {
    return(
        <div className='product-list'>
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

export default RanderProduct;
