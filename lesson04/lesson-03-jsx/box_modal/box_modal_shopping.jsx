import products from "../src/data";
import CartShopping from "./ShoppingCart";
function BoxModalShoppingCart(pops) {
    return (
        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              {products.map((product)=>(      
                <CartShopping img = {product.img}
                name = {product.name} price ={product.price}
                />        
                ))}
              <div class="modal-footer">

              </div>
            </div>
          </div>
        </div>
    );
    }
  
export default BoxModalShoppingCart;