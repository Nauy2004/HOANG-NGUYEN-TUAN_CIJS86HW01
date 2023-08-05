import {getIdproduct,getClassifyPhoneName} from '../src/handl_str'
import { BtnAddCart } from '../hanld_cart/add_to_cart';
function ModalDetail(product) {
    let discountSell = parseFloat(product.price);
    let numberDiscount = parseFloat(product.discount);
    let discountAfter = (discountSell-(discountSell/100*numberDiscount)).toLocaleString()
    let idProduct = getIdproduct(product.name)
    let classifyPhoneName = getClassifyPhoneName(product.name) ;

    return (
        <>
            <div class="modal fade" id={idProduct} abindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={product.img} class="card-img" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div class="card-body">
                                            <div className="list-card-link">
                                                <a href="#" class="card-link">
                                                    Trang chủ
                                                </a>
                                                <span className="p-1">{'>'}</span>
                                                <a href="#" class="card-link">
                                                    Điện thoại
                                                </a>
                                                <span className="p-1">{'>'}</span>
                                                <a href="#" class="card-link">
                                                    <strong>Điện thoại {classifyPhoneName[0]}</strong>
                                                </a>
                                            </div>
                                            <h5 class="card-title">{product.name}</h5>
                                            <p class="card-text">
                                                <span className="fs-5">
                                                    {discountSell.toLocaleString()}
                                                </span>
                                                <br/>
                                                <span className="d-inline-flex discount m-1">
                                                    -{product.discount}%
                                                </span>
                                                <span className="d-inline-flex">
                                                    <strike className="text-gray">{discountAfter}đ</strike>
                                                </span>
                                                <br/>
                                                <span className="text-red border border-danger p-1 rounded">
                                                    Trả góp 0 %
                                                </span>
                                                <span className="bg-success p-1 border border-success text-light m-1 rounded">
                                                    {product.isNew}
                                                </span>
                                            </p>
                                            <BtnAddCart onClick = {product.key}/>                     
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ModalDetail
