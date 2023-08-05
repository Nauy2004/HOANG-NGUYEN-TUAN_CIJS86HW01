import products from "../src/data";

const btnAdd = (e) =>{

    console.log(e);
}
let listCards = []

function BtnAddCart(pops) {
    return(
        <button type="button" 
        className="btn btn-outline-danger" 
        id = "add" onClick={() => btnAdd(pops.index)}>
            THÊM VÀO GIỎ HÀNG
        </button>
    )
}


export {btnAdd,BtnAddCart}