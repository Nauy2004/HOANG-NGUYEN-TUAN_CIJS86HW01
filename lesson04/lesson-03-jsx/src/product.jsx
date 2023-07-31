import {getIdproduct,getClassifyPhoneName} from '../src/handl_str'

function ProductCard(product) {
    let discountSell = parseFloat(product.price);
    let numberDiscount = parseFloat(product.discount);
    let discountAfter = (discountSell-(discountSell/100*numberDiscount)).toLocaleString()
    let idProduct = getIdproduct(product.name)
        return(
        <div className="card">
            <img src={product.img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h6 class="card-title">{product.name}</h6>
                <p class="card-text">
                    <span className="text-red">{discountSell.toLocaleString()}</span>
                    <br/>
                    <span className="d-inline-flex">
                        <strike className="text-gray">{discountAfter}đ</strike>
                    </span>
                    <span className="d-inline-flex discount">-{product.discount}%</span>
                    <br/>
                    <span className="text-500">
                        Chipset: {product.chip}
                        <br/>
                        Kích thước màn hình: {product.sizeScreen}
                        <br/>
                        Ram: {product.ram}  
                        <br/>
                        Bộ nhớ trong: {product.rom}
                    </span>
                </p>                      
            </div>
            <button className="btn btn-success w-50 ms-2" type="button"
            data-bs-toggle="modal" data-bs-target={'#'+idProduct}>Show detail</button>
        </div>
    )
}

export default ProductCard;