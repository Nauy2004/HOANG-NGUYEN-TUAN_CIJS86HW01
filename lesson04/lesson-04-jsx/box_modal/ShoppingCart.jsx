
function CartShopping(pops) {
    return(
        <>
            <div class="modal-body">
                <div className="card mb-3">
                  <div className="row g-0 d-flex justify-content-between">
                    <div className="col-md-4">
                      <img src={pops.img} class="card-img" alt="..." />
                    </div>
                    <div className="col-md-3">
                      <div class="card-body">
                        <h5 class="card-title">{pops.name}</h5>
                      </div>
                    </div>
                    <div className="col-md-3">
                        <p class="card-text">
                            <span className="fs-6">
                                {pops.price}
                            </span>
                            <br />
                            <span>
                                
                            </span>
                        </p>
                    </div>
                  </div>
                </div>
              </div>
        </>
    )
}

export default CartShopping