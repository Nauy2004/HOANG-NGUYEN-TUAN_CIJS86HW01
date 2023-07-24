

function ProductCard(product) {
    let discountAfter = parseFloat(product.price);
    let numberDiscount = parseFloat(product.discount);
    return(
        <div className="card">
            <img src={product.img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h6 class="card-title">{product.name}</h6>
                <p class="card-text">
                    Giá: {product.price}
                    <br/>
                    <span className="d-inline-flex">
                        <strike>{discountAfter-(discountAfter/100*numberDiscount)}đ</strike>
                    </span>
                    <span className="d-inline-flex discount">-{product.discount}%</span>
                    <br/>
                    Chipset: {product.chip}
                    <br/>
                    Kích thước màn hình: {product.sizeScreen}
                    <br/>
                    Ram: {product.ram}  
                    <br/>
                    Bộ nhớ trong: {product.rom}
                </p>       
            </div>
        </div>
    )
}

export default ProductCard;